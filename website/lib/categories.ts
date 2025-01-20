/**
 * Categories and rules for Cursor AI
 * This file contains all the categories and their associated rules
 * Each rule has a name, path, and optional description
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Category, Rule } from './types';

const RULES_DIR = path.join(process.cwd(), 'rules');

// Helper function to create a rule with proper typing
const createRule = (name: string, path: string, description?: string): Rule => ({
  name,
  path,
  description
});

// Helper function to read rule description from README.md
async function getRuleDescription(rulePath: string): Promise<string | undefined> {
  try {
    const readmePath = path.join(RULES_DIR, rulePath, 'README.md');
    const content = await fs.readFile(readmePath, 'utf-8');
    const { data } = matter(content);
    return data.description;
  } catch {
    return undefined;
  }
}

// Categories data
export async function getCategories(): Promise<Category[]> {
  return [
    {
      name: "Frontend Frameworks and Libraries",
      rules: [
        createRule(
          "Angular (Novo Elements)", 
          "angular-novo-elements-cursorrules-prompt-file",
          await getRuleDescription("angular-novo-elements-cursorrules-prompt-file")
        ),
        createRule(
          "Angular (TypeScript)", 
          "angular-typescript-cursorrules-prompt-file",
          await getRuleDescription("angular-typescript-cursorrules-prompt-file")
        ),
        { name: "Astro (TypeScript)", path: "astro-typescript-cursorrules-prompt-file" },
        { name: "Cursor AI (React, TypeScript, shadcn/ui)", path: "cursor-ai-react-typescript-shadcn-ui-cursorrules-p" },
        { name: "Next.js 15 (React 19, Vercel AI, Tailwind)", path: "nextjs15-react19-vercelai-tailwind-cursorrules-prompt-file" },
        { name: "Next.js 14 (Tailwind, SEO)", path: "cursorrules-cursor-ai-nextjs-14-tailwind-seo-setup" },
        { name: "Next.js (React, Tailwind)", path: "nextjs-react-tailwind-cursorrules-prompt-file" },
        { name: "Next.js (React, TypeScript)", path: "nextjs-react-typescript-cursorrules-prompt-file" },
        { name: "Next.js (SEO Development)", path: "nextjs-seo-dev-cursorrules-prompt-file" },
        { name: "Next.js (Supabase Todo App)", path: "nextjs-supabase-todo-app-cursorrules-prompt-file" },
        { name: "Next.js (Tailwind, TypeScript)", path: "nextjs-tailwind-typescript-apps-cursorrules-prompt" },
        { name: "Next.js (TypeScript App)", path: "nextjs-typescript-app-cursorrules-prompt-file" },
        { name: "Next.js (TypeScript)", path: "nextjs-typescript-cursorrules-prompt-file" },
        { name: "Next.js (TypeScript, Tailwind)", path: "nextjs-typescript-tailwind-cursorrules-prompt-file" },
        { name: "Next.js (Vercel, Supabase)", path: "nextjs-vercel-supabase-cursorrules-prompt-file" },
        { name: "Next.js (Vercel, TypeScript)", path: "nextjs-vercel-typescript-cursorrules-prompt-file" },
        { name: "Next.js (App Router)", path: "nextjs-app-router-cursorrules-prompt-file" },
        { name: "Next.js (Material UI, Tailwind CSS)", path: "nextjs-material-ui-tailwind-css-cursorrules-prompt" },
        { name: "Qwik (Basic Setup with TypeScript and Vite)", path: "qwik-basic-cursorrules-prompt-file" },
        { name: "Qwik (with Tailwind CSS)", path: "qwik-tailwind-cursorrules-prompt-file" },
        { name: "React Components Creation", path: "react-components-creation-cursorrules-prompt-file" },
        { name: "React (Next.js UI Development)", path: "react-nextjs-ui-development-cursorrules-prompt-fil" },
        { name: "React (TypeScript, Next.js, Node.js)", path: "react-typescript-nextjs-nodejs-cursorrules-prompt-" },
        { name: "React (TypeScript, Symfony)", path: "react-typescript-symfony-cursorrules-prompt-file" },
        { name: "Solid.js (Basic Setup)", path: "solidjs-basic-cursorrules-prompt-file" },
        { name: "Solid.js (TypeScript)", path: "solidjs-typescript-cursorrules-prompt-file" },
        { name: "Solid.js (Tailwind CSS)", path: "solidjs-tailwind-cursorrules-prompt-file" },
        { name: "Svelte 5 vs Svelte 4", path: "svelte-5-vs-svelte-4-cursorrules-prompt-file" },
        { name: "SvelteKit (RESTful API, Tailwind CSS)", path: "sveltekit-restful-api-tailwind-css-cursorrules-pro" },
        { name: "SvelteKit (Tailwind CSS, TypeScript)", path: "sveltekit-tailwindcss-typescript-cursorrules-promp" },
        { name: "SvelteKit (TypeScript Guide)", path: "sveltekit-typescript-guide-cursorrules-prompt-file" },
        { name: "Vue 3 (Nuxt 3 Development)", path: "vue-3-nuxt-3-development-cursorrules-prompt-file" },
        { name: "Vue 3 (Nuxt 3, TypeScript)", path: "vue-3-nuxt-3-typescript-cursorrules-prompt-file" },
        { name: "Vue 3 (Composition API)", path: "vue3-composition-api-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Backend and Full-Stack",
      rules: [
        { name: "Deno Integration", path: "deno-integration-techniques-cursorrules-prompt-fil" },
        { name: "Elixir Engineer Guidelines", path: "elixir-engineer-guidelines-cursorrules-prompt-file" },
        { name: "Elixir (Phoenix, Docker)", path: "elixir-phoenix-docker-setup-cursorrules-prompt-fil" },
        { name: "ES Module (Node.js)", path: "es-module-nodejs-guidelines-cursorrules-prompt-fil" },
        { name: "Go Backend Scalability", path: "go-backend-scalability-cursorrules-prompt-file" },
        { name: "Go ServeMux REST API", path: "go-servemux-rest-api-cursorrules-prompt-file" },
        { name: "Go (Basic Setup)", path: "htmx-go-basic-cursorrules-prompt-file" },
        { name: "Go with Fiber", path: "htmx-go-fiber-cursorrules-prompt-file" },
        { name: "HTMX (Basic Setup)", path: "htmx-basic-cursorrules-prompt-file" },
        { name: "HTMX (Flask)", path: "htmx-flask-cursorrules-prompt-file" },
        { name: "HTMX (Django)", path: "htmx-django-cursorrules-prompt-file" },
        { name: "Java (Springboot, JPA)", path: "java-springboot-jpa-cursorrules-prompt-file" },
        { name: "Knative (Istio, Typesense, GPU)", path: "knative-istio-typesense-gpu-cursorrules-prompt-fil" },
        { name: "Laravel (PHP 8.3)", path: "laravel-php-83-cursorrules-prompt-file" },
        { name: "Laravel (TALL Stack)", path: "laravel-tall-stack-best-practices-cursorrules-prom" },
        { name: "Node.js (MongoDB)", path: "nodejs-mongodb-cursorrules-prompt-file-tutorial" },
        { name: "Node.js (MongoDB, JWT, Express, React)", path: "nodejs-mongodb-jwt-express-react-cursorrules-promp" },
        { name: "Python (FastAPI)", path: "py-fast-api" },
        { name: "Python (FastAPI)", path: "cursorrules-file-cursor-ai-python-fastapi-api" },
        { name: "Python 3.12 (FastAPI Best Practices)", path: "python-312-fastapi-best-practices-cursorrules-prom" },
        { name: "Python (Django Best Practices)", path: "python-django-best-practices-cursorrules-prompt-fi" },
        { name: "Python (FastAPI Best Practices)", path: "python-fastapi-best-practices-cursorrules-prompt-f" },
        { name: "Python (FastAPI Scalable API)", path: "python-fastapi-scalable-api-cursorrules-prompt-fil" },
        { name: "Python (Flask JSON Guide)", path: "python-flask-json-guide-cursorrules-prompt-file" },
        { name: "TypeScript (NestJS Best Practices)", path: "typescript-nestjs-best-practices-cursorrules-promp" },
        { name: "WordPress (PHP, Guzzle, Gutenberg)", path: "wordpress-php-guzzle-gutenberg-cursorrules-prompt-" },
        { name: "WordPress (macOS)", path: "cursorrules-cursor-ai-wordpress-draft-macos-prompt" },
        { name: "Python LLM & ML Workflow", path: "python-llm-ml-workflow-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Mobile Development",
      rules: [
        { name: "React Native Expo", path: "react-native-expo-cursorrules-prompt-file" },
        { name: "SwiftUI Guidelines", path: "swiftui-guidelines-cursorrules-prompt-file" },
        { name: "TypeScript (Expo, Jest, Detox)", path: "typescript-expo-jest-detox-cursorrules-prompt-file" },
        { name: "Android Native (Jetpack Compose)", path: "android-jetpack-compose-cursorrules-prompt-file" },
        { name: "Flutter Expert", path: "flutter-app-expert-cursorrules-prompt-file" }
      ]
    },
    {
      name: "CSS and Styling",
      rules: [
        { name: "Tailwind CSS (Next.js Guide)", path: "tailwind-css-nextjs-guide-cursorrules-prompt-file" },
        { name: "Tailwind (React, Firebase)", path: "tailwind-react-firebase-cursorrules-prompt-file" },
        { name: "Tailwind (shadcn/ui Integration)", path: "tailwind-shadcn-ui-integration-cursorrules-prompt-" },
        { name: "HTML (Tailwind CSS, JavaScript)", path: "html-tailwind-css-javascript-cursorrules-prompt-fi" },
        { name: "JavaScript (Astro, Tailwind CSS)", path: "javascript-astro-tailwind-css-cursorrules-prompt-f" },
        { name: "React (Styled Components)", path: "react-styled-components-cursorrules-prompt-file" },
        { name: "React (Chakra UI)", path: "react-chakra-ui-cursorrules-prompt-file" }
      ]
    },
    {
      name: "State Management",
      rules: [
        { name: "React (Redux, TypeScript)", path: "react-redux-typescript-cursorrules-prompt-file" },
        { name: "React (MobX)", path: "react-mobx-cursorrules-prompt-file" },
        { name: "React (React Query)", path: "react-query-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Database and API",
      rules: [
        { name: "GraphQL (Apollo Client)", path: "react-graphql-apollo-client-cursorrules-prompt-file" },
        { name: "TypeScript (Axios)", path: "typescript-axios-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Testing",
      rules: [
        { name: "TypeScript (Expo, Jest, Detox)", path: "typescript-expo-jest-detox-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Build Tools and Development",
      rules: [
        { name: "Chrome Extension (JavaScript/TypeScript)", path: "chrome-extension-dev-js-typescript-cursorrules-pro" },
        { name: "GitHub Code Quality", path: "github-code-quality-cursorrules-prompt-file" },
        { name: "GitHub Instructions", path: "github-cursorrules-prompt-file-instructions" },
        { name: "Kubernetes (MkDocs Documentation)", path: "kubernetes-mkdocs-documentation-cursorrules-prompt" },
        { name: "Linux (NVIDIA CUDA, Python)", path: "linux-nvidia-cuda-python-cursorrules-prompt-file" },
        { name: "Optimize (DRY, SOLID Principles)", path: "optimize-dry-solid-principles-cursorrules-prompt-f" },
        { name: "Python Containerization", path: "python-containerization-cursorrules-prompt-file" },
        { name: "Python (GitHub Setup)", path: "python-github-setup-cursorrules-prompt-file" },
        { name: "Tauri (Svelte, TypeScript Guide)", path: "tauri-svelte-typescript-guide-cursorrules-prompt-f" },
        { name: "TypeScript Code Convention", path: "typescript-code-convention-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Language-Specific",
      rules: [
        { name: "JavaScript/TypeScript Code Quality", path: "javascript-typescript-code-quality-cursorrules-pro" },
        { name: "JavaScript (Chrome APIs)", path: "javascript-chrome-apis-cursorrules-prompt-file" },
        { name: "Optimize (Rell Blockchain Code)", path: "optimize-rell-blockchain-code-cursorrules-prompt-f" },
        { name: "Pandas (scikit-learn Guide)", path: "pandas-scikit-learn-guide-cursorrules-prompt-file" },
        { name: "Plasticode (Telegram API)", path: "plasticode-telegram-api-cursorrules-prompt-file" },
        { name: "PyQt6 (EEG Processing)", path: "pyqt6-eeg-processing-cursorrules-prompt-file" },
        { name: "Python/TypeScript Guide", path: "python--typescript-guide-cursorrules-prompt-file" },
        { name: "Python Best Practices", path: "python-cursorrules-prompt-file-best-practices" },
        { name: "Python Developer", path: "python-developer-cursorrules-prompt-file" },
        { name: "Python Projects Guide", path: "python-projects-guide-cursorrules-prompt-file" },
        { name: "PyTorch (scikit-learn)", path: "pytorch-scikit-learn-cursorrules-prompt-file" },
        { name: "Solidity (Hardhat)", path: "solidity-hardhat-cursorrules-prompt-file" },
        { name: "Solidity (React Blockchain Apps)", path: "solidity-react-blockchain-apps-cursorrules-prompt-" },
        { name: "TypeScript (LLM Tech Stack)", path: "typescript-llm-tech-stack-cursorrules-prompt-file" },
        { name: "TypeScript (Node.js, Next.js, AI)", path: "typescript-nodejs-nextjs-ai-cursorrules-prompt-fil" },
        { name: "TypeScript (Node.js, Next.js, React, UI, CSS)", path: "typescript-nodejs-nextjs-react-ui-css-cursorrules-" },
        { name: "TypeScript (Node.js, React, Vite)", path: "typescript-nodejs-react-vite-cursorrules-prompt-fi" },
        { name: "TypeScript (React, Next.js, Cloudflare)", path: "typescript-react-nextjs-cloudflare-cursorrules-pro" },
        { name: "TypeScript (React, NextUI, Supabase)", path: "typescript-react-nextui-supabase-cursorrules-promp" },
        { name: "TypeScript (shadcn/ui, Next.js)", path: "typescript-shadcn-ui-nextjs-cursorrules-prompt-fil" },
        { name: "TypeScript (Vite, Tailwind)", path: "typescript-vite-tailwind-cursorrules-prompt-file" },
        { name: "TypeScript (Vue.js)", path: "typescript-vuejs-cursorrules-prompt-file" },
        { name: "TypeScript (Zod, Tailwind, Next.js)", path: "typescript-zod-tailwind-nextjs-cursorrules-prompt-" },
        { name: "WebAssembly (Z80 Cellular Automata)", path: "webassembly-z80-cellular-automata-cursorrules-prom" },
        { name: "TypeScript (Next.js)", path: "typescript-nextjs-cursorrules-prompt-file" },
        { name: "TypeScript (Next.js, React)", path: "typescript-nextjs-react-cursorrules-prompt-file" },
        { name: "TypeScript (Next.js, React, Tailwind, Supabase)", path: "typescript-nextjs-react-tailwind-supabase-cursorru" },
        { name: "TypeScript (Next.js, Supabase)", path: "typescript-nextjs-supabase-cursorrules-prompt-file" },
        { name: "TypeScript (Node.js, Next.js App)", path: "typescript-nodejs-nextjs-app-cursorrules-prompt-fi" },
        { name: "TypeScript (React)", path: "typescript-react-cursorrules-prompt-file" },
        { name: "TypeScript (Clasp App Script)", path: "typescript-clasp-cursorrules-prompt-file" }
      ]
    },
    {
      name: "Other",
      rules: [
        { name: "ASCII Simulation Game", path: "ascii-simulation-game-cursorrules-prompt-file" },
        { name: "Code Guidelines", path: "code-guidelines-cursorrules-prompt-file" },
        { name: "DragonRuby Best Practices", path: "dragonruby-best-practices-cursorrules-prompt-file" },
        { name: "Graphical Apps Development", path: "graphical-apps-development-cursorrules-prompt-file" },
        { name: "Meta-Prompt", path: "meta-prompt-cursorrules-prompt-file" },
        { name: "Next.js (Type LLM)", path: "next-type-llm" },
        { name: "Unity (C#)", path: "unity-cursor-ai-c-cursorrules-prompt-file" },
        { name: "Web App Optimization", path: "web-app-optimization-cursorrules-prompt-file" }
      ]
    }
  ];
}

// Helper function to get a specific rule by path
export async function getRuleByPath(path: string): Promise<Rule | undefined> {
  const categories = await getCategories();
  for (const category of categories) {
    const rule = category.rules.find(r => r.path === path);
    if (rule) return rule;
  }
  return undefined;
}

// Helper function to get a specific category by name
export async function getCategoryByName(name: string): Promise<Category | undefined> {
  const categories = await getCategories();
  return categories.find(c => c.name === name);
} 