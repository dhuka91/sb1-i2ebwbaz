import { useMemo } from 'react';
import { Tool } from '../types';
import { tools } from '../data/tools';

export function useTools(category?: string) {
  return useMemo(() => {
    if (!category) return tools;
    return tools.filter((tool: Tool) => tool.category === category);
  }, [category]);
}