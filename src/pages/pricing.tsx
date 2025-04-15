import { Button } from '../components/ui/button';

export function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Pricing Plans</h1>
      <p className="text-lg text-gray-600 text-center mb-8">Choose the perfect plan for your needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Free</h2>
          <p className="mt-2 text-gray-600">Perfect for getting started</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$0</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Access to basic tools
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Limited API calls
            </li>
          </ul>
          <Button className="w-full mt-8">Get Started</Button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Pro</h2>
          <p className="mt-2 text-gray-600">For professional users</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Access to all tools
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Unlimited API calls
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Priority support
            </li>
          </ul>
          <Button className="w-full mt-8">Subscribe Now</Button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
          <p className="mt-2 text-gray-600">For large organizations</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$99</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Custom solutions
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              Dedicated support
            </li>
            <li className="flex items-center text-gray-600">
              <span className="mr-2">✓</span>
              SLA guarantee
            </li>
          </ul>
          <Button className="w-full mt-8">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
}