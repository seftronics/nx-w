import { Button, Input } from '@nx-w/ui';
import { cn } from '@nx-w/utils';

export default function Index() {
  return (
    <div className={cn('min-h-screen bg-gray-50 p-8')}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to NX-W Monorepo
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            UI Component Library Demo
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Buttons</h3>
              <div className="flex gap-4">
                <Button>Default Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Input</h3>
              <Input placeholder="Type something here..." className="max-w-md" />
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            🎉 Success!
          </h2>
          <p className="text-blue-700">
            Your Nx monorepo with Atomic Design UI library is working perfectly!
          </p>
          <ul className="mt-4 text-blue-600 space-y-1">
            <li>✅ UI Library (@nx-w/ui) - Ready</li>
            <li>✅ Utils Library (@nx-w/utils) - Ready</li>
            <li>✅ Next.js Website - Running</li>
            <li>✅ Atomic Design Structure - Implemented</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
