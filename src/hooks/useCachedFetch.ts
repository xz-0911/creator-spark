import { useState, useEffect, useRef, useCallback } from "react";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();
const CACHE_TTL = 60_000; // 60 seconds

export function useCachedFetch<T>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) {
      setData(null);
      return;
    }

    // Check cache
    const cached = cache.get(url) as CacheEntry<T> | undefined;
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      setData(cached.data);
      setError(null);
      setLoading(false);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      cache.set(url, { data: json, timestamp: Date.now() });
      setData(json);
      setError(null);
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === "AbortError") return;
      setError(e instanceof Error ? e.message : "请求失败");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => abortRef.current?.abort();
  }, [fetchData]);

  const refetch = useCallback(() => {
    if (url) cache.delete(url);
    fetchData();
  }, [url, fetchData]);

  return { data, loading, error, refetch };
}
