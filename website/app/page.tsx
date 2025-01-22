import { getCategories } from '@/lib/categories';
import { CategoryList } from '@/components/CategoryList';
import { FiSettings, FiUsers, FiZap, FiCode, FiLayers, FiBox } from 'react-icons/fi';
import { FAQ } from '@/components/FAQ';

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section with Gradient Background */}
      <section className="text-center mb-20 py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl text-white">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Awesome CursorRules
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          A curated list of awesome .cursorrules files for enhancing your Cursor AI experience
        </p>
        <a 
          href="#categories"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold 
                   hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
        >
          Browse Rules
        </a>
      </section>

      {/* Why .cursorrules? Section with Icons */}
      <section className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why .cursorrules?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FiSettings className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-xl font-semibold">Customized AI Behavior</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Tailor the AI's responses to your project's specific needs, ensuring more relevant and accurate code suggestions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FiCode className="w-8 h-8 text-purple-500 mr-4" />
              <h3 className="text-xl font-semibold">Consistency</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Define coding standards and best practices to ensure AI-generated code aligns with your project's style guidelines.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FiLayers className="w-8 h-8 text-indigo-500 mr-4" />
              <h3 className="text-xl font-semibold">Context Awareness</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Provide important project context for more informed and accurate code generation.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FiZap className="w-8 h-8 text-yellow-500 mr-4" />
              <h3 className="text-xl font-semibold">Improved Productivity</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Generate code that requires less manual editing, speeding up your development process.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FiUsers className="w-8 h-8 text-green-500 mr-4" />
              <h3 className="text-xl font-semibold">Team Alignment</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ensure consistent AI assistance across your team, promoting cohesion in coding practices.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FiBox className="w-8 h-8 text-red-500 mr-4" />
              <h3 className="text-xl font-semibold">Project-Specific Knowledge</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Include project structure and requirements for more accurate suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section with Enhanced Styling */}
      <section id="categories" className="mb-20 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of .cursorrules files organized by category
          </p>
        </div>
        <CategoryList categories={categories} />
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* How to Use Section with Better Visual Hierarchy */}
      <section className="mb-20 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">How to Use</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6 text-center">
            Get started with .cursorrules in your project by following these simple steps:
          </p>
          <ol className="space-y-4">
            <li className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                1
              </span>
              <span>Choose a .cursorrules file that matches your project's needs</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                2
              </span>
              <span>Copy the file to your project's root directory</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                3
              </span>
              <span>Customize the rules according to your specific requirements</span>
            </li>
            <li className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                4
              </span>
              <span>Cursor AI will automatically use these rules when generating code</span>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
} 