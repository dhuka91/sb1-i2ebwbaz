import { useParams } from 'react-router-dom';
import { useTools } from '../lib/hooks/use-tools';

export function ToolPage() {
  const { toolId } = useParams();
  const tools = useTools();
  const tool = tools.find(t => t.id === toolId);

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900">Tool not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{tool.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{tool.description}</p>
      {/* Tool specific UI will be implemented here */}
    </div>
  );
}