import * as Icons from 'lucide-react';
import type { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'plagiarism-checker',
    title: 'Plagiarism Checker',
    description: 'Check your content for originality and detect plagiarism',
    category: 'text',
    icon: 'FileText',
    path: '/tools/plagiarism-checker'
  },
  {
    id: 'article-rewriter',
    title: 'Article Rewriter',
    description: 'Rewrite articles while maintaining context and meaning',
    category: 'text',
    icon: 'Edit3',
    path: '/tools/article-rewriter'
  },
  {
    id: 'grammar-checker',
    title: 'Grammar Checker',
    description: 'Advanced grammar and style checking',
    category: 'text',
    icon: 'CheckSquare',
    path: '/tools/grammar-checker'
  },
  {
    id: 'ai-essay-writer',
    title: 'AI Essay Writer',
    description: 'Generate well-structured essays with AI',
    category: 'ai',
    icon: 'Bot',
    path: '/tools/ai-essay-writer'
  },
  {
    id: 'ai-writer',
    title: 'AI Writer',
    description: 'Create high-quality content with AI',
    category: 'ai',
    icon: 'PenTool',
    path: '/tools/ai-writer'
  },
  {
    id: 'logo-maker',
    title: 'Logo Maker',
    description: 'Create professional logos for your brand',
    category: 'design',
    icon: 'Palette',
    path: '/tools/logo-maker'
  },
  {
    id: 'image-compressor',
    title: 'Image Compressor',
    description: 'Compress images without losing quality',
    category: 'image',
    icon: 'Image',
    path: '/tools/image-compressor'
  },
  {
    id: 'keyword-position',
    title: 'Keyword Position',
    description: 'Track keyword rankings',
    category: 'keyword',
    icon: 'Search',
    path: '/tools/keyword-position'
  }
];

export const categories = [
  {
    id: 'text',
    title: 'Text Analysis Tools',
    description: 'Comprehensive suite of text analysis and manipulation tools',
    icon: 'FileText',
    tools: tools.filter(tool => tool.category === 'text')
  },
  {
    id: 'ai',
    title: 'AI Writing Generators',
    description: 'AI-powered tools to enhance your writing',
    icon: 'Bot',
    tools: tools.filter(tool => tool.category === 'ai')
  },
  {
    id: 'design',
    title: 'Design Studio',
    description: 'Professional design tools for creating stunning visuals',
    icon: 'Palette',
    tools: tools.filter(tool => tool.category === 'design')
  },
  {
    id: 'image',
    title: 'Image Editing Tools',
    description: 'Powerful tools for editing and optimizing images',
    icon: 'Image',
    tools: tools.filter(tool => tool.category === 'image')
  },
  {
    id: 'keyword',
    title: 'Keyword Tools',
    description: 'Research and analyze keywords for better content strategy',
    icon: 'Search',
    tools: tools.filter(tool => tool.category === 'keyword')
  }
];