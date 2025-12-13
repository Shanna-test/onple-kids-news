import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface Article {
  title: string;
  slug: string;
  date: string;
  weekId: string;
  category: string;
  excerpt?: string;
  image?: string;
  thumbnail?: string;
  lead?: string; // 리드문
  source?: string; // 출처
  content: string;
}

// 카테고리별 기본 썸네일 매핑
const categoryThumbnailMap: Record<string, string> = {
  // 한국어 카테고리
  '정치': 'politics',
  '경제': 'economy',
  '사회': 'society',
  '문화': 'culture',
  '교육': 'society',
  '과학': 'society',
  '생활': 'society',
  '환경': 'society',
  '동물': 'culture',
  // 영어 카테고리
  'politics': 'politics',
  'economy': 'economy',
  'society': 'society',
  'culture': 'culture',
};

export function getThumbnailPath(article: Article): string {
  // 커스텀 썸네일이 있으면 사용
  if (article.thumbnail) {
    return article.thumbnail.startsWith('/') ? article.thumbnail : `/${article.thumbnail}`;
  }
  
  // 카테고리에 맞는 기본 썸네일 사용
  const categoryKey = article.category;
  const thumbnailName = categoryThumbnailMap[categoryKey] || 'society';
  return `/images/thumbnails/${thumbnailName}.svg`;
}

export interface Notice {
  title: string;
  slug: string;
  date: string;
  content: string;
}

const contentDir = path.join(process.cwd(), 'content');

export function getArticles(): Article[] {
  const articlesDir = path.join(contentDir, 'articles');
  if (!fs.existsSync(articlesDir)) return [];
  
  const files = fs.readdirSync(articlesDir);
  const articles = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(articlesDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents);
      return {
        ...data,
        content,
      } as Article;
    });
  
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getArticles();
  return articles.find(article => article.slug === slug) || null;
}

export function getArticlesByWeek(weekId: string): Article[] {
  const articles = getArticles();
  return articles
    .filter(article => article.weekId === weekId)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getWeekIds(): string[] {
  const articles = getArticles();
  const weekIds = [...new Set(articles.map(article => article.weekId))];
  return weekIds.sort().reverse();
}

export function getNotices(): Notice[] {
  const noticesDir = path.join(contentDir, 'notices');
  if (!fs.existsSync(noticesDir)) return [];
  
  const files = fs.readdirSync(noticesDir);
  const notices = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(noticesDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContents);
      return {
        ...data,
        content,
      } as Notice;
    });
  
  return notices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNoticeBySlug(slug: string): Notice | null {
  const notices = getNotices();
  return notices.find(notice => notice.slug === slug) || null;
}

