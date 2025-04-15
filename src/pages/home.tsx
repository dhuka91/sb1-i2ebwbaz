import { CategorySection } from '../components/CategorySection';
import { ToolCard } from '../components/ToolCard';
import { categories } from '../lib/data/tools';

export function HomePage() {
  return (
    <div>
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          title={category.title}
          description={category.description}
          className={category.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          {category.tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              link={tool.path}
            />
          ))}
        </CategorySection>
      ))}
    </div>
  );
}