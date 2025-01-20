import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于部分 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              About Awesome CursorRules
            </h3>
            <p className="mt-4 text-base text-gray-500">
              A curated collection of .cursorrules files for enhancing your Cursor AI development experience. 
              Customize AI behavior, improve code suggestions, and boost productivity.
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-base text-gray-500 hover:text-gray-900">
                  Categories
                </Link>
              </li>
              <li>
                <a
                  href="https://cursor.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Cursor Editor
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/awesome-cursorrules"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* 社交链接 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://github.com/awesome-cursorrules"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-gray-500 hover:text-gray-900"
                >
                  <FiGithub className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/zhijunli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-gray-500 hover:text-gray-900"
                >
                  <FiTwitter className="h-5 w-5 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:hi@jiehuo.ai"
                  className="flex items-center text-base text-gray-500 hover:text-gray-900"
                >
                  <FiMail className="h-5 w-5 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            Made with <FiHeart className="inline-block h-4 w-4 text-red-500" /> by the{' '}
            <a
              href="https://github.com/awesome-cursorrules"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Awesome CursorRules
            </a>{' '}
            community.
          </p>
          <p className="mt-1 text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} GetCursorRules.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 