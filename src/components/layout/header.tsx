import { Tool, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useAuth } from '../../lib/hooks/use-auth';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Tool className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">All-In-One Tools</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link to="/tools" className="text-gray-600 hover:text-gray-900">
              Tools
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link to="/docs" className="text-gray-600 hover:text-gray-900">
              Documentation
            </Link>
            
            {user ? (
              <Button variant="outline" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Account</span>
              </Button>
            ) : (
              <Button className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}