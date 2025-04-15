import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

export function ToolCard({ title, description, icon, link, className }: ToolCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200",
        "border border-gray-100 hover:border-gray-200",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-50 text-gray-600 group-hover:bg-gray-100 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </a>
  );
}