export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  authorRole: string;

  authorAvatar: string;

  authorColor: string;

  tags: string[];
  content: Array<{
    type: "paragraph" | "heading" | "list" | "highlight";
    text?: string;
    items?: string[];
  }>;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  authorRole: string;
  authorAvatar: string;
  authorColor: string;
  tags: string[];
  content: Array<{
    type: "paragraph" | "heading" | "list" | "highlight";
    text?: string;
    items?: string[];
  }>;
}