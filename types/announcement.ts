// /types/announcement.ts
export interface Announcement {
  id: number;
  title: string;
  category: string;
  date: string;
  priority: "high" | "medium" | "low";
  excerpt: string;
  author: string;
}
