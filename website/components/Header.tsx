import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="mb-4">
            <Image 
              src="/cursor-ai-logo.png" 
              alt="Awesome CursorRules"
              width={120}
              height={120}
              className="h-auto"
            />
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Awesome CursorRules
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A curated list of awesome .cursorrules files for enhancing your Cursor AI experience.
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <a 
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Cursor AI
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="https://github.com/sindresorhus/awesome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <img 
                src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" 
                alt="Awesome"
                className="h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 