export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  image: string;
}

export interface Topic {
  id: number;
  title: string;
  category: string;
  heat: number;
  mentions: string;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  category: string;
  snippet: string;
}

export const trendingMovies: Movie[] = [
  { id: 1, title: "暗夜行者", genre: "科幻", rating: 9.2, year: 2026, image: "movie-1" },
  { id: 2, title: "星际纷争", genre: "动作", rating: 8.8, year: 2026, image: "movie-2" },
  { id: 3, title: "日落之恋", genre: "爱情", rating: 8.5, year: 2025, image: "movie-3" },
  { id: 4, title: "迷雾追踪", genre: "悬疑", rating: 9.0, year: 2026, image: "movie-4" },
  { id: 5, title: "龙之怒吼", genre: "奇幻", rating: 8.7, year: 2026, image: "movie-5" },
  { id: 6, title: "幽灵庄园", genre: "恐怖", rating: 8.3, year: 2025, image: "movie-6" },
];

export const trendingTopics: Topic[] = [
  { id: 1, title: "#AI创作革命", category: "科技", heat: 98, mentions: "520万" },
  { id: 2, title: "#春节档票房大战", category: "娱乐", heat: 95, mentions: "380万" },
  { id: 3, title: "#短视频新趋势", category: "社交", heat: 90, mentions: "290万" },
  { id: 4, title: "#虚拟偶像出道", category: "娱乐", heat: 87, mentions: "210万" },
  { id: 5, title: "#游戏改编电影", category: "影视", heat: 85, mentions: "180万" },
  { id: 6, title: "#独立音乐崛起", category: "音乐", heat: 82, mentions: "150万" },
  { id: 7, title: "#元宇宙直播", category: "科技", heat: 78, mentions: "120万" },
  { id: 8, title: "#纪录片热潮", category: "影视", heat: 75, mentions: "95万" },
];

export const entertainmentNews: NewsItem[] = [
  { id: 1, title: "AI驱动的内容创作工具席卷短视频平台", source: "创作者日报", time: "2小时前", category: "科技", snippet: "新一代AI工具让视频制作效率提升300%，内容创作者迎来黄金时代。" },
  { id: 2, title: "2026春节档预售票房突破20亿", source: "娱乐头条", time: "3小时前", category: "影视", snippet: "多部重磅影片齐聚春节档，竞争空前激烈。" },
  { id: 3, title: "虚拟主播首次登上卫视春晚舞台", source: "新娱速递", time: "5小时前", category: "娱乐", snippet: "虚拟形象与真人演员同台表演，引发热议。" },
  { id: 4, title: "独立游戏开发者分享爆款创意秘诀", source: "游戏世界", time: "6小时前", category: "游戏", snippet: "从零到百万下载，这位开发者只用了三个月。" },
  { id: 5, title: "播客产业年度报告：听众增长50%", source: "音频前线", time: "8小时前", category: "音频", snippet: "知识付费与娱乐播客双双爆发式增长。" },
  { id: 6, title: "全球流媒体平台争夺亚洲原创内容", source: "环球娱乐", time: "10小时前", category: "影视", snippet: "亚洲故事正在征服全球观众。" },
];

export const categories = ["全部", "影视", "科技", "娱乐", "社交", "音乐", "游戏", "音频"];
