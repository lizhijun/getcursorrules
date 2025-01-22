'use client';

import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqs: FAQItem[] = [
  {
    question: "What is a .cursorrules file?",
    answer: "A .cursorrules file is a configuration file that provides context and guidelines to Cursor AI about your project. It helps the AI better understand your codebase, coding standards, and project-specific requirements."
  },
  {
    question: "Where should I place the .cursorrules file?",
    answer: "Place the .cursorrules file in the root directory of your project. Cursor AI will automatically detect and use it to enhance its understanding of your project context."
  },
  {
    question: "How does a .cursorrules file work?",
    answer: (
      <div>
        <p>A .cursorrules file works by:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Providing project context to Cursor AI</li>
          <li>Defining coding standards and best practices</li>
          <li>Specifying commonly used libraries and patterns</li>
          <li>Setting guidelines for code generation</li>
        </ul>
      </div>
    )
  },
  {
    question: "Can I customize .cursorrules for my needs?",
    answer: "Yes! You can customize .cursorrules files to match your project's specific requirements. You can define your own rules, coding standards, and preferences to make Cursor AI work better for your use case."
  },
  {
    question: "How do I contribute my .cursorrules?",
    answer: (
      <div>
        <p>To contribute your .cursorrules file:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-2">
          <li>Fork the repository on GitHub</li>
          <li>Add your .cursorrules file to the appropriate category</li>
          <li>Include a README.md with description and usage</li>
          <li>Submit a pull request</li>
        </ol>
      </div>
    )
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 