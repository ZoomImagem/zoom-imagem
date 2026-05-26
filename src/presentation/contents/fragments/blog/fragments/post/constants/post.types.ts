export interface CTA {
  text: string;
  linkLabel: string;
  href: string;
}

export interface Advantage {
  number: string;
  title: string;
  description: string;
}

export interface CaseItem {
  brand: string;
  title: string;
  thumbnail: string;
  instagramUrl: string;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "advantages"; items: Advantage[] }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cases"; items: CaseItem[] }
  | { type: "cta"; data: CTA };

export interface Author {
  name: string;
  initial: string;
}

export interface Article {
  id: string;
  slug: string;
  category: string;
  readingTime: string;
  title: string;
  lede: string;
  author: Author;
  publishedAt: string;
  content: ContentBlock[];
}
