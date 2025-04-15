import React from 'react';
import { cn } from '../lib/utils';

interface CategorySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function CategorySection({ title, description, children, className }: CategorySectionProps) {
  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-lg text-gray-600">{description}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}