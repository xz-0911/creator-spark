# Creator Spark – Multi-Source Content Dashboard

Portfolio Project #2  
Course Assignment – Multi-Source Content Dashboard  
Due: Feb 14  

## Project Overview

Creator Spark is a web-based content inspiration dashboard designed for digital content creators. It aggregates data from multiple public APIs into a unified interface to help users quickly discover trending videos and visual inspiration in one place.

Instead of switching between platforms to find ideas, users can search and filter content from different sources within a single-page application.

## Product Brief 

Creator Spark solves a common workflow problem faced by social media creators and content strategists: finding fresh inspiration across multiple platforms takes time and requires constant tab-switching. Creators often check YouTube for trending videos and GIPHY for visual content separately. This dashboard brings those sources together in one unified interface.

The target users are independent content creators, YouTubers, social media managers, and marketing students who need daily inspiration for short-form videos, reels, or social posts. These users typically look for trending topics, visual elements, and viral formats to adapt into their own content.

This tool improves their workflow by centralizing content discovery. Users can search across APIs, filter results, and instantly refresh data without leaving the page. It reduces friction in the ideation phase and helps creators move from research to production more quickly.

Unlike general news aggregators, Creator Spark is focused specifically on creative inspiration rather than information overload. The UI highlights visuals and trending media instead of long text articles, making it more aligned with how digital creators actually work.

## APIs Used

### 1. YouTube Data API v3
Documentation: https://developers.google.com/youtube/v3

**Data Pulled:**
- Video titles
- Thumbnails
- Channel names
- Video IDs for playback
- Search results

**Why Chosen:**
YouTube is one of the primary platforms for content trends. It provides searchable, structured data for trending and keyword-based discovery.

**Limitations:**
- Daily quota limits
- Requires API key
- No direct "trending" endpoint without additional filtering

### 2. GIPHY API
Documentation: https://developers.giphy.com/docs/api/

**Data Pulled:**
- Trending GIFs
- GIF URLs
- Titles and source attribution

**Why Chosen:**
GIPHY provides quick visual inspiration and trending media formats, which are useful for short-form content creators.

**Limitations:**
- Rate limits
- Some GIF metadata is minimal
- Search results depend heavily on keyword quality

## Functional Features

- Integrates 2 public APIs
- Unified content display
- Search functionality across sources
- Manual refresh button for updated content
- Source attribution displayed for each item
- Loading states while fetching data
- Error handling with user-friendly messages
- Responsive design for desktop and mobile
- Single-page application architecture

## Technical Implementation

- React + TypeScript
- Tailwind CSS for UI styling
- Vite for build tooling
- API calls handled with asynchronous functions
- Error handling with conditional rendering
- Loading states during data fetch

API keys are stored securely and excluded from version control.

## Reflection

Working with multiple APIs was more challenging than expected because each API returns data in a different structure. The YouTube API provides structured video metadata, while the GIPHY API focuses on media URLs and simplified metadata. Normalizing these responses into a unified UI required careful data mapping and debugging.

Handling API quotas and error states was another challenge. APIs occasionally fail or return empty responses, so building graceful fallback messages was important to maintain a good user experience.

In version 2.0, I would add a third API such as Reddit or News API to expand cross-platform trend tracking. I would also implement saved collections so users could bookmark inspiring content.

This project helped me understand how real products aggregate data from different services and how important UX decisions are when presenting multi-source content. API integration is not just about fetching data — it is about structuring it in a way that makes sense to the end user.

## Author

Xun Zhao  
University of Connecticut  
Applied Mathematics  
