export enum Category {
  TECH = "Tecnologia",
  GAMES = "Games",
  HARDWARE = "Hardware",
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  imageUrl: string;
  views: number;
  author: string;
  ranking?: number; // 1-10 for top content
}

export interface NavLink {
  label: string;
  path: string;
}