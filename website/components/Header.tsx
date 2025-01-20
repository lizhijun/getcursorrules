export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Awesome CursorRules
            </h1>
            <p className="mt-2 text-gray-600">
              A curated list of awesome .cursorrules files for enhancing your Cursor AI experience
            </p>
          </div>
          <img 
            src="/cursor-ai-logo.png" 
            alt="Cursor AI Logo"
            className="h-16 w-auto" 
          />
        </div>
      </div>
    </header>
  );
} 