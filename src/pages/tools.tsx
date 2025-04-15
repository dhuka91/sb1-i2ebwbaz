import { useTools } from '../lib/hooks/use-tools';
import { ToolCard } from '../components/ToolCard';

export function ToolsPage() {
  const tools = useTools();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            link={tool.path}
          />
        ))}
      </div>
    </div>
  );
}