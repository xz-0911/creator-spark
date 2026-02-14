# InspirationHub – Multi-Source Content Dashboard

Portfolio Project #2  
Course Assignment – Multi-Source Content Dashboard  
Due: Feb 14  

---

## Project Overview

InspirationHub is a web-based content inspiration dashboard designed for digital content creators. It aggregates data from multiple public APIs into a unified interface, allowing users to discover trending videos and visual content in one place.

Instead of switching between platforms to find ideas, users can search and explore content from different sources within a single-page application.

---

## Product Brief (250 words)

InspirationHub solves a common workflow problem faced by digital content creators: finding fresh inspiration across multiple platforms takes time and requires constant tab-switching. Creators often check YouTube for trending videos and GIPHY for visual content separately. This dashboard brings those sources together into a single, unified interface.

The target users are independent content creators, YouTubers, social media managers, and marketing students who need daily inspiration for short-form videos, reels, and social media posts. These users typically look for trending topics, visual elements, and viral formats that they can adapt into their own content strategies.

This tool improves workflow by centralizing content discovery. Users can search across APIs, filter by keyword, and refresh data without leaving the page. This reduces friction in the ideation phase and helps creators move from research to production more efficiently.

Unlike traditional news aggregators, InspirationHub focuses specifically on creative inspiration rather than long-form articles or text-heavy content. The interface prioritizes visual media and trending content formats, aligning with how digital creators actually work.

---

## APIs Used

### 1. YouTube Data API v3  
Documentation: https://developers.google.com/youtube/v3

**Data Pulled:**
- Video titles  
- Thumbnails  
- Channel names  
- Video IDs  
- Search results  

**Why Chosen:**
YouTube is one of the primary platforms where digital trends emerge. The API provides structured, searchable data that supports keyword-based discovery.

**Limitations:**
- Daily request quota limits  
- Requires API key authentication  
- Trending discovery depends on search queries  

---

### 2. GIPHY API  
Documentation: https://developers.giphy.com/docs/api/

**Data Pulled:**
- Trending GIFs  
- GIF URLs  
- Titles and source attribution  

**Why Chosen:**
GIPHY provides fast-access visual inspiration, which is valuable for short-form and social media content creators.

**Limitations:**
- Rate limits  
- Some GIF metadata is limited  
- Results depend on keyword specificity  

---

## Functional Features

- Integrates 2 public APIs  
- Unified multi-source content display  
- Search functionality  
- Manual refresh for updated content  
- Clear source attribution  
- Loading states while fetching data  
- Graceful error handling  
- Responsive design for desktop and mobile  
- Single-page application architecture  

---

## Technical Implementation

- React + TypeScript  
- Tailwind CSS  
- Vite build system  
- Asynchronous API calls  
- Conditional rendering for loading and error states  
- API keys excluded from version control  

---

## Reflection (180 words)

Working with multiple APIs was more complex than expected because each API returns data in a different structure. The YouTube API provides structured video metadata, while the GIPHY API focuses primarily on media URLs and simplified metadata. Normalizing these responses into a unified interface required careful mapping and testing.

Managing API quotas and handling error states was another challenge. APIs can return empty results or fail unexpectedly, so implementing user-friendly error messages and loading states was important for maintaining usability.

In version 2.0, I would integrate a third API such as Reddit or News API to expand cross-platform trend analysis. I would also add features like content bookmarking and filtering by source.

This project helped me better understand how real-world dashboards aggregate information from multiple services and how important UX decisions are when presenting multi-source data.

---

## Author

Xun Zhao  
University of Connecticut  
Applied Mathematics  
