export interface Tool {
  id: string;
  title: string;
  description: string;
  category: 'text' | 'ai' | 'design' | 'image' | 'keyword';
  icon: string;
  path: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  tools: Tool[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
}

export interface ProcessTextOptions {
  type: 'plagiarism' | 'rewrite' | 'grammar' | 'summarize';
  text: string;
}

export interface GenerateAIContentOptions {
  type: 'essay' | 'article' | 'title' | 'paragraph';
  prompt: string;
}