/**
 * Categories and rules for Cursor AI
 * This file contains all the categories and their associated rules
 * Each rule has a name, path, and optional description
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Category, Rule, SEOMetadata } from './types';

const RULES_DIR = path.join(process.cwd(), 'rules');

// Helper function to create a rule with proper typing and SEO metadata
const createRule = (
  name: string, 
  path: string, 
  options: Partial<Rule> = {}
): Rule => ({
  name,
  path,
  ...options
});

// Helper function to read rule metadata from README.md
async function getRuleMetadata(rulePath: string): Promise<Partial<Rule>> {
  try {
    const readmePath = path.join(RULES_DIR, rulePath, 'README.md');
    const content = await fs.readFile(readmePath, 'utf-8');
    const { data } = matter(content);
    return {
      description: data.description,
      keywords: data.keywords,
      author: data.author,
      lastUpdated: data.lastUpdated,
      githubUrl: data.githubUrl
    };
  } catch {
    return {};
  }
}

// Categories data with enhanced SEO descriptions
export async function getCategories(): Promise<Category[]> {
  return [
    {
      name: "Frontend Frameworks and Libraries",
      description: "A collection of Cursor AI rules for popular frontend frameworks including React, Vue, Angular, and more. These rules help maintain consistent code quality and best practices in frontend development.",
      rules: [
        createRule(
          "Angular (Novo Elements)", 
          "angular-novo-elements-cursorrules-prompt-file",
          await getRuleMetadata("angular-novo-elements-cursorrules-prompt-file")
        ),
        createRule(
          "Angular (TypeScript)", 
          "angular-typescript-cursorrules-prompt-file",
          await getRuleMetadata("angular-typescript-cursorrules-prompt-file")
        ),
        createRule("Astro (TypeScript)", "astro-typescript-cursorrules-prompt-file",
          await getRuleMetadata("astro-typescript-cursorrules-prompt-file")),
        createRule("Cursor AI (React, TypeScript, shadcn/ui)", "cursor-ai-react-typescript-shadcn-ui-cursorrules-p",
          await getRuleMetadata("cursor-ai-react-typescript-shadcn-ui-cursorrules-p")),
        createRule("Next.js 15 (React 19, Vercel AI, Tailwind)", "nextjs15-react19-vercelai-tailwind-cursorrules-prompt-file",
          await getRuleMetadata("nextjs15-react19-vercelai-tailwind-cursorrules-prompt-file")),
        createRule("Next.js 14 (Tailwind, SEO)", "cursorrules-cursor-ai-nextjs-14-tailwind-seo-setup",
          await getRuleMetadata("cursorrules-cursor-ai-nextjs-14-tailwind-seo-setup")),
        createRule("Next.js (React, Tailwind)", "nextjs-react-tailwind-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-react-tailwind-cursorrules-prompt-file")),
        createRule("Next.js (React, TypeScript)", "nextjs-react-typescript-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-react-typescript-cursorrules-prompt-file")),
        createRule("Next.js (SEO Development)", "nextjs-seo-dev-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-seo-dev-cursorrules-prompt-file")),
        createRule("Next.js (Supabase Todo App)", "nextjs-supabase-todo-app-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-supabase-todo-app-cursorrules-prompt-file")),
        createRule("Next.js (Tailwind, TypeScript)", "nextjs-tailwind-typescript-apps-cursorrules-prompt",
          await getRuleMetadata("nextjs-tailwind-typescript-apps-cursorrules-prompt")),
        createRule("Next.js (TypeScript App)", "nextjs-typescript-app-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-typescript-app-cursorrules-prompt-file")),
        createRule("Next.js (TypeScript)", "nextjs-typescript-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-typescript-cursorrules-prompt-file")),
        createRule("Next.js (TypeScript, Tailwind)", "nextjs-typescript-tailwind-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-typescript-tailwind-cursorrules-prompt-file")),
        createRule("Next.js (Vercel, Supabase)", "nextjs-vercel-supabase-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-vercel-supabase-cursorrules-prompt-file")),
        createRule("Next.js (Vercel, TypeScript)", "nextjs-vercel-typescript-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-vercel-typescript-cursorrules-prompt-file")),
        createRule("Next.js (App Router)", "nextjs-app-router-cursorrules-prompt-file",
          await getRuleMetadata("nextjs-app-router-cursorrules-prompt-file")),
        createRule("Next.js (Material UI, Tailwind CSS)", "nextjs-material-ui-tailwind-css-cursorrules-prompt",
          await getRuleMetadata("nextjs-material-ui-tailwind-css-cursorrules-prompt")),
        createRule("Qwik (Basic Setup with TypeScript and Vite)", "qwik-basic-cursorrules-prompt-file",
          await getRuleMetadata("qwik-basic-cursorrules-prompt-file")),
        createRule("Qwik (with Tailwind CSS)", "qwik-tailwind-cursorrules-prompt-file",
          await getRuleMetadata("qwik-tailwind-cursorrules-prompt-file")),
        createRule("React Components Creation", "react-components-creation-cursorrules-prompt-file",
          await getRuleMetadata("react-components-creation-cursorrules-prompt-file")),
        createRule("React (Next.js UI Development)", "react-nextjs-ui-development-cursorrules-prompt-fil",
          await getRuleMetadata("react-nextjs-ui-development-cursorrules-prompt-fil")),
        createRule("React (TypeScript, Next.js, Node.js)", "react-typescript-nextjs-nodejs-cursorrules-prompt-",
          await getRuleMetadata("react-typescript-nextjs-nodejs-cursorrules-prompt-")),
        createRule("React (TypeScript, Symfony)", "react-typescript-symfony-cursorrules-prompt-file",
          await getRuleMetadata("react-typescript-symfony-cursorrules-prompt-file")),
        createRule("Solid.js (Basic Setup)", "solidjs-basic-cursorrules-prompt-file",
          await getRuleMetadata("solidjs-basic-cursorrules-prompt-file")),
        createRule("Solid.js (TypeScript)", "solidjs-typescript-cursorrules-prompt-file",
          await getRuleMetadata("solidjs-typescript-cursorrules-prompt-file")),
        createRule("Solid.js (Tailwind CSS)", "solidjs-tailwind-cursorrules-prompt-file",
          await getRuleMetadata("solidjs-tailwind-cursorrules-prompt-file")),
        createRule("Svelte 5 vs Svelte 4", "svelte-5-vs-svelte-4-cursorrules-prompt-file",
          await getRuleMetadata("svelte-5-vs-svelte-4-cursorrules-prompt-file")),
        createRule("SvelteKit (RESTful API, Tailwind CSS)", "sveltekit-restful-api-tailwind-css-cursorrules-pro",
          await getRuleMetadata("sveltekit-restful-api-tailwind-css-cursorrules-pro")),
        createRule("SvelteKit (Tailwind CSS, TypeScript)", "sveltekit-tailwindcss-typescript-cursorrules-promp",
          await getRuleMetadata("sveltekit-tailwindcss-typescript-cursorrules-promp")),
        createRule("SvelteKit (TypeScript Guide)", "sveltekit-typescript-guide-cursorrules-prompt-file",
          await getRuleMetadata("sveltekit-typescript-guide-cursorrules-prompt-file")),
        createRule("Vue 3 (Nuxt 3 Development)", "vue-3-nuxt-3-development-cursorrules-prompt-file",
          await getRuleMetadata("vue-3-nuxt-3-development-cursorrules-prompt-file")),
        createRule("Vue 3 (Nuxt 3, TypeScript)", "vue-3-nuxt-3-typescript-cursorrules-prompt-file",
          await getRuleMetadata("vue-3-nuxt-3-typescript-cursorrules-prompt-file")),
        createRule("Vue 3 (Composition API)", "vue3-composition-api-cursorrules-prompt-file",
          await getRuleMetadata("vue3-composition-api-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Backend and Full-Stack",
      description: "Comprehensive rules for backend development using Node.js, Python, Go, and other server-side technologies. Includes best practices for API development, database integration, and full-stack applications.",
      rules: [
        createRule("Deno Integration", "deno-integration-techniques-cursorrules-prompt-fil",
          await getRuleMetadata("deno-integration-techniques-cursorrules-prompt-fil")),
        createRule("Elixir Engineer Guidelines", "elixir-engineer-guidelines-cursorrules-prompt-file",
          await getRuleMetadata("elixir-engineer-guidelines-cursorrules-prompt-file")),
        createRule("Elixir (Phoenix, Docker)", "elixir-phoenix-docker-setup-cursorrules-prompt-fil",
          await getRuleMetadata("elixir-phoenix-docker-setup-cursorrules-prompt-fil")),
        createRule("ES Module (Node.js)", "es-module-nodejs-guidelines-cursorrules-prompt-fil",
          await getRuleMetadata("es-module-nodejs-guidelines-cursorrules-prompt-fil")),
        createRule("Go Backend Scalability", "go-backend-scalability-cursorrules-prompt-file",
          await getRuleMetadata("go-backend-scalability-cursorrules-prompt-file")),
        createRule("Go ServeMux REST API", "go-servemux-rest-api-cursorrules-prompt-file",
          await getRuleMetadata("go-servemux-rest-api-cursorrules-prompt-file")),
        createRule("Go (Basic Setup)", "htmx-go-basic-cursorrules-prompt-file",
          await getRuleMetadata("htmx-go-basic-cursorrules-prompt-file")),
        createRule("Go with Fiber", "htmx-go-fiber-cursorrules-prompt-file",
          await getRuleMetadata("htmx-go-fiber-cursorrules-prompt-file")),
        createRule("HTMX (Basic Setup)", "htmx-basic-cursorrules-prompt-file",
          await getRuleMetadata("htmx-basic-cursorrules-prompt-file")),
        createRule("HTMX (Flask)", "htmx-flask-cursorrules-prompt-file",
          await getRuleMetadata("htmx-flask-cursorrules-prompt-file")),
        createRule("HTMX (Django)", "htmx-django-cursorrules-prompt-file",
          await getRuleMetadata("htmx-django-cursorrules-prompt-file")),
        createRule("Java (Springboot, JPA)", "java-springboot-jpa-cursorrules-prompt-file",
          await getRuleMetadata("java-springboot-jpa-cursorrules-prompt-file")),
        createRule("Knative (Istio, Typesense, GPU)", "knative-istio-typesense-gpu-cursorrules-prompt-fil",
          await getRuleMetadata("knative-istio-typesense-gpu-cursorrules-prompt-fil")),
        createRule("Laravel (PHP 8.3)", "laravel-php-83-cursorrules-prompt-file",
          await getRuleMetadata("laravel-php-83-cursorrules-prompt-file")),
        createRule("Laravel (TALL Stack)", "laravel-tall-stack-best-practices-cursorrules-prom",
          await getRuleMetadata("laravel-tall-stack-best-practices-cursorrules-prom")),
        createRule("Node.js (MongoDB)", "nodejs-mongodb-cursorrules-prompt-file-tutorial",
          await getRuleMetadata("nodejs-mongodb-cursorrules-prompt-file-tutorial")),
        createRule("Node.js (MongoDB, JWT, Express, React)", "nodejs-mongodb-jwt-express-react-cursorrules-promp",
          await getRuleMetadata("nodejs-mongodb-jwt-express-react-cursorrules-promp")),
        createRule("Python (FastAPI)", "py-fast-api",
          await getRuleMetadata("py-fast-api")),
        createRule("Python (FastAPI)", "cursorrules-file-cursor-ai-python-fastapi-api",
          await getRuleMetadata("cursorrules-file-cursor-ai-python-fastapi-api")),
        createRule("Python 3.12 (FastAPI Best Practices)", "python-312-fastapi-best-practices-cursorrules-prom",
          await getRuleMetadata("python-312-fastapi-best-practices-cursorrules-prom")),
        createRule("Python (Django Best Practices)", "python-django-best-practices-cursorrules-prompt-fi",
          await getRuleMetadata("python-django-best-practices-cursorrules-prompt-fi")),
        createRule("Python (FastAPI Best Practices)", "python-fastapi-best-practices-cursorrules-prompt-f",
          await getRuleMetadata("python-fastapi-best-practices-cursorrules-prompt-f")),
        createRule("Python (FastAPI Scalable API)", "python-fastapi-scalable-api-cursorrules-prompt-fil",
          await getRuleMetadata("python-fastapi-scalable-api-cursorrules-prompt-fil")),
        createRule("Python (Flask JSON Guide)", "python-flask-json-guide-cursorrules-prompt-file",
          await getRuleMetadata("python-flask-json-guide-cursorrules-prompt-file")),
        createRule("TypeScript (NestJS Best Practices)", "typescript-nestjs-best-practices-cursorrules-promp",
          await getRuleMetadata("typescript-nestjs-best-practices-cursorrules-promp")),
        createRule("WordPress (PHP, Guzzle, Gutenberg)", "wordpress-php-guzzle-gutenberg-cursorrules-prompt-",
          await getRuleMetadata("wordpress-php-guzzle-gutenberg-cursorrules-prompt-")),
        createRule("WordPress (macOS)", "cursorrules-cursor-ai-wordpress-draft-macos-prompt",
          await getRuleMetadata("cursorrules-cursor-ai-wordpress-draft-macos-prompt")),
        createRule("Python LLM & ML Workflow", "python-llm-ml-workflow-cursorrules-prompt-file",
          await getRuleMetadata("python-llm-ml-workflow-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Mobile Development",
      description: "Rules for mobile app development including React Native, Flutter, SwiftUI, and Android development. Covers best practices for cross-platform and native mobile applications.",
      rules: [
        createRule("React Native Expo", "react-native-expo-cursorrules-prompt-file", 
          await getRuleMetadata("react-native-expo-cursorrules-prompt-file")),
        createRule("SwiftUI Guidelines", "swiftui-guidelines-cursorrules-prompt-file",
          await getRuleMetadata("swiftui-guidelines-cursorrules-prompt-file")),
        createRule("TypeScript (Expo, Jest, Detox)", "typescript-expo-jest-detox-cursorrules-prompt-file",
          await getRuleMetadata("typescript-expo-jest-detox-cursorrules-prompt-file")),
        createRule("Android Native (Jetpack Compose)", "android-jetpack-compose-cursorrules-prompt-file",
          await getRuleMetadata("android-jetpack-compose-cursorrules-prompt-file")),
        createRule("Flutter Expert", "flutter-app-expert-cursorrules-prompt-file",
          await getRuleMetadata("flutter-app-expert-cursorrules-prompt-file")),
        createRule("Flutter (Riverpod)", "flutter-riverpod-cursorrules-prompt-file",
          await getRuleMetadata("flutter-riverpod-cursorrules-prompt-file"))
      ]
    },
    {
      name: "CSS and Styling",
      description: "Comprehensive styling rules covering Tailwind CSS, styled-components, Chakra UI, and other modern CSS frameworks. Includes best practices for responsive and maintainable styles.",
      rules: [
        createRule("Tailwind CSS (Next.js Guide)", "tailwind-css-nextjs-guide-cursorrules-prompt-file",
          await getRuleMetadata("tailwind-css-nextjs-guide-cursorrules-prompt-file")),
        createRule("Tailwind (React, Firebase)", "tailwind-react-firebase-cursorrules-prompt-file",
          await getRuleMetadata("tailwind-react-firebase-cursorrules-prompt-file")),
        createRule("Tailwind (shadcn/ui Integration)", "tailwind-shadcn-ui-integration-cursorrules-prompt-",
          await getRuleMetadata("tailwind-shadcn-ui-integration-cursorrules-prompt-")),
        createRule("HTML (Tailwind CSS, JavaScript)", "html-tailwind-css-javascript-cursorrules-prompt-fi",
          await getRuleMetadata("html-tailwind-css-javascript-cursorrules-prompt-fi")),
        createRule("JavaScript (Astro, Tailwind CSS)", "javascript-astro-tailwind-css-cursorrules-prompt-f",
          await getRuleMetadata("javascript-astro-tailwind-css-cursorrules-prompt-f")),
        createRule("React (Styled Components)", "react-styled-components-cursorrules-prompt-file",
          await getRuleMetadata("react-styled-components-cursorrules-prompt-file")),
        createRule("React (Chakra UI)", "react-chakra-ui-cursorrules-prompt-file",
          await getRuleMetadata("react-chakra-ui-cursorrules-prompt-file"))
      ]
    },
    {
      name: "State Management",
      description: "Rules for managing application state using popular libraries like Redux, MobX, and React Query. Includes patterns for scalable and maintainable state management.",
      rules: [
        createRule("React (Redux, TypeScript)", "react-redux-typescript-cursorrules-prompt-file",
          await getRuleMetadata("react-redux-typescript-cursorrules-prompt-file")),
        createRule("React (MobX)", "react-mobx-cursorrules-prompt-file",
          await getRuleMetadata("react-mobx-cursorrules-prompt-file")),
        createRule("React (React Query)", "react-query-cursorrules-prompt-file",
          await getRuleMetadata("react-query-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Database and API",
      description: "Guidelines for database integration and API development, including GraphQL, REST APIs, and various database technologies. Focuses on best practices for data handling and API design.",
      rules: [
        createRule("GraphQL (Apollo Client)", "react-graphql-apollo-client-cursorrules-prompt-file",
          await getRuleMetadata("react-graphql-apollo-client-cursorrules-prompt-file")),
        createRule("TypeScript (Axios)", "typescript-axios-cursorrules-prompt-file",
          await getRuleMetadata("typescript-axios-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Testing",
      description: "Testing guidelines and best practices for various frameworks and tools, including Jest, Detox, and other testing libraries. Covers unit, integration, and end-to-end testing.",
      rules: [
        createRule("TypeScript (Expo, Jest, Detox)", "typescript-expo-jest-detox-cursorrules-prompt-file",
          await getRuleMetadata("typescript-expo-jest-detox-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Build Tools and Development",
      description: "Development tools and build system configurations, including Chrome Extensions, GitHub workflows, containerization, and development best practices.",
      rules: [
        createRule("Chrome Extension (JavaScript/TypeScript)", "chrome-extension-dev-js-typescript-cursorrules-pro",
          await getRuleMetadata("chrome-extension-dev-js-typescript-cursorrules-pro")),
        createRule("GitHub Code Quality", "github-code-quality-cursorrules-prompt-file",
          await getRuleMetadata("github-code-quality-cursorrules-prompt-file")),
        createRule("GitHub Instructions", "github-cursorrules-prompt-file-instructions",
          await getRuleMetadata("github-cursorrules-prompt-file-instructions")),
        createRule("Kubernetes (MkDocs Documentation)", "kubernetes-mkdocs-documentation-cursorrules-prompt",
          await getRuleMetadata("kubernetes-mkdocs-documentation-cursorrules-prompt")),
        createRule("Linux (NVIDIA CUDA, Python)", "linux-nvidia-cuda-python-cursorrules-prompt-file",
          await getRuleMetadata("linux-nvidia-cuda-python-cursorrules-prompt-file")),
        createRule("Optimize (DRY, SOLID Principles)", "optimize-dry-solid-principles-cursorrules-prompt-f",
          await getRuleMetadata("optimize-dry-solid-principles-cursorrules-prompt-f")),
        createRule("Python Containerization", "python-containerization-cursorrules-prompt-file",
          await getRuleMetadata("python-containerization-cursorrules-prompt-file")),
        createRule("Python (GitHub Setup)", "python-github-setup-cursorrules-prompt-file",
          await getRuleMetadata("python-github-setup-cursorrules-prompt-file")),
        createRule("Tauri (Svelte, TypeScript Guide)", "tauri-svelte-typescript-guide-cursorrules-prompt-f",
          await getRuleMetadata("tauri-svelte-typescript-guide-cursorrules-prompt-f")),
        createRule("TypeScript Code Convention", "typescript-code-convention-cursorrules-prompt-file",
          await getRuleMetadata("typescript-code-convention-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Language-Specific",
      description: "Language-specific guidelines and best practices for JavaScript, TypeScript, Python, and other programming languages. Includes code quality standards and language-specific patterns.",
      rules: [
        createRule("JavaScript/TypeScript Code Quality", "javascript-typescript-code-quality-cursorrules-pro",
          await getRuleMetadata("javascript-typescript-code-quality-cursorrules-pro")),
        createRule("JavaScript (Chrome APIs)", "javascript-chrome-apis-cursorrules-prompt-file",
          await getRuleMetadata("javascript-chrome-apis-cursorrules-prompt-file")),
        createRule("Optimize (Rell Blockchain Code)", "optimize-rell-blockchain-code-cursorrules-prompt-f",
          await getRuleMetadata("optimize-rell-blockchain-code-cursorrules-prompt-f")),
        createRule("Pandas (scikit-learn Guide)", "pandas-scikit-learn-guide-cursorrules-prompt-file",
          await getRuleMetadata("pandas-scikit-learn-guide-cursorrules-prompt-file")),
        createRule("Plasticode (Telegram API)", "plasticode-telegram-api-cursorrules-prompt-file",
          await getRuleMetadata("plasticode-telegram-api-cursorrules-prompt-file")),
        createRule("PyQt6 (EEG Processing)", "pyqt6-eeg-processing-cursorrules-prompt-file",
          await getRuleMetadata("pyqt6-eeg-processing-cursorrules-prompt-file")),
        createRule("Python/TypeScript Guide", "python--typescript-guide-cursorrules-prompt-file",
          await getRuleMetadata("python--typescript-guide-cursorrules-prompt-file")),
        createRule("Python Best Practices", "python-cursorrules-prompt-file-best-practices",
          await getRuleMetadata("python-cursorrules-prompt-file-best-practices")),
        createRule("Python Developer", "python-developer-cursorrules-prompt-file",
          await getRuleMetadata("python-developer-cursorrules-prompt-file")),
        createRule("Python Projects Guide", "python-projects-guide-cursorrules-prompt-file",
          await getRuleMetadata("python-projects-guide-cursorrules-prompt-file")),
        createRule("PyTorch (scikit-learn)", "pytorch-scikit-learn-cursorrules-prompt-file",
          await getRuleMetadata("pytorch-scikit-learn-cursorrules-prompt-file")),
        createRule("Solidity (Hardhat)", "solidity-hardhat-cursorrules-prompt-file",
          await getRuleMetadata("solidity-hardhat-cursorrules-prompt-file")),
        createRule("Solidity (React Blockchain Apps)", "solidity-react-blockchain-apps-cursorrules-prompt-",
          await getRuleMetadata("solidity-react-blockchain-apps-cursorrules-prompt-")),
        createRule("TypeScript (LLM Tech Stack)", "typescript-llm-tech-stack-cursorrules-prompt-file",
          await getRuleMetadata("typescript-llm-tech-stack-cursorrules-prompt-file")),
        createRule("TypeScript (Node.js, Next.js, AI)", "typescript-nodejs-nextjs-ai-cursorrules-prompt-fil",
          await getRuleMetadata("typescript-nodejs-nextjs-ai-cursorrules-prompt-fil")),
        createRule("TypeScript (Node.js, Next.js, React, UI, CSS)", "typescript-nodejs-nextjs-react-ui-css-cursorrules-",
          await getRuleMetadata("typescript-nodejs-nextjs-react-ui-css-cursorrules-")),
        createRule("TypeScript (Node.js, React, Vite)", "typescript-nodejs-react-vite-cursorrules-prompt-fi",
          await getRuleMetadata("typescript-nodejs-react-vite-cursorrules-prompt-fi")),
        createRule("TypeScript (React, Next.js, Cloudflare)", "typescript-react-nextjs-cloudflare-cursorrules-pro",
          await getRuleMetadata("typescript-react-nextjs-cloudflare-cursorrules-pro")),
        createRule("TypeScript (React, NextUI, Supabase)", "typescript-react-nextui-supabase-cursorrules-promp",
          await getRuleMetadata("typescript-react-nextui-supabase-cursorrules-promp")),
        createRule("TypeScript (shadcn/ui, Next.js)", "typescript-shadcn-ui-nextjs-cursorrules-prompt-fil",
          await getRuleMetadata("typescript-shadcn-ui-nextjs-cursorrules-prompt-fil")),
        createRule("TypeScript (Vite, Tailwind)", "typescript-vite-tailwind-cursorrules-prompt-file",
          await getRuleMetadata("typescript-vite-tailwind-cursorrules-prompt-file")),
        createRule("TypeScript (Vue.js)", "typescript-vuejs-cursorrules-prompt-file",
          await getRuleMetadata("typescript-vuejs-cursorrules-prompt-file")),
        createRule("TypeScript (Zod, Tailwind, Next.js)", "typescript-zod-tailwind-nextjs-cursorrules-prompt-",
          await getRuleMetadata("typescript-zod-tailwind-nextjs-cursorrules-prompt-")),
        createRule("WebAssembly (Z80 Cellular Automata)", "webassembly-z80-cellular-automata-cursorrules-prom",
          await getRuleMetadata("webassembly-z80-cellular-automata-cursorrules-prom")),
        createRule("TypeScript (Next.js)", "typescript-nextjs-cursorrules-prompt-file",
          await getRuleMetadata("typescript-nextjs-cursorrules-prompt-file")),
        createRule("TypeScript (Next.js, React)", "typescript-nextjs-react-cursorrules-prompt-file",
          await getRuleMetadata("typescript-nextjs-react-cursorrules-prompt-file")),
        createRule("TypeScript (Next.js, React, Tailwind, Supabase)", "typescript-nextjs-react-tailwind-supabase-cursorru",
          await getRuleMetadata("typescript-nextjs-react-tailwind-supabase-cursorrules-prompt-")),
        createRule("TypeScript (Next.js, Supabase)", "typescript-nextjs-supabase-cursorrules-prompt-file",
          await getRuleMetadata("typescript-nextjs-supabase-cursorrules-prompt-file")),
        createRule("TypeScript (Node.js, Next.js App)", "typescript-nodejs-nextjs-app-cursorrules-prompt-fi",
          await getRuleMetadata("typescript-nodejs-nextjs-app-cursorrules-prompt-fi")),
        createRule("TypeScript (React)", "typescript-react-cursorrules-prompt-file",
          await getRuleMetadata("typescript-react-cursorrules-prompt-file")),
        createRule("TypeScript (Clasp App Script)", "typescript-clasp-cursorrules-prompt-file",
          await getRuleMetadata("typescript-clasp-cursorrules-prompt-file"))
      ]
    },
    {
      name: "Other",
      description: "Additional Cursor AI rules covering various topics including game development, code guidelines, and specialized development scenarios.",
      rules: [
        createRule("ASCII Simulation Game", "ascii-simulation-game-cursorrules-prompt-file",
          await getRuleMetadata("ascii-simulation-game-cursorrules-prompt-file")),
        createRule("Code Guidelines", "code-guidelines-cursorrules-prompt-file",
          await getRuleMetadata("code-guidelines-cursorrules-prompt-file")),
        createRule("DragonRuby Best Practices", "dragonruby-best-practices-cursorrules-prompt-file",
          await getRuleMetadata("dragonruby-best-practices-cursorrules-prompt-file")),
        createRule("Graphical Apps Development", "graphical-apps-development-cursorrules-prompt-file",
          await getRuleMetadata("graphical-apps-development-cursorrules-prompt-file")),
        createRule("Meta-Prompt", "meta-prompt-cursorrules-prompt-file",
          await getRuleMetadata("meta-prompt-cursorrules-prompt-file")),
        createRule("Next.js (Type LLM)", "next-type-llm",
          await getRuleMetadata("next-type-llm")),
        createRule("Unity (C#)", "unity-cursor-ai-c-cursorrules-prompt-file",
          await getRuleMetadata("unity-cursor-ai-c-cursorrules-prompt-file")),
        createRule("Web App Optimization", "web-app-optimization-cursorrules-prompt-file",
          await getRuleMetadata("web-app-optimization-cursorrules-prompt-file")),
        createRule("Convex", "convex-cursorrules-prompt-file",
          await getRuleMetadata("convex-cursorrules-prompt-file"))
      ]
    }
  ];
}

// Helper function to get SEO metadata for a specific rule
export async function getRuleSEOMetadata(rulePath: string): Promise<SEOMetadata> {
  const rule = await getRuleByPath(rulePath);
  if (!rule) {
    return {
      title: "Cursor AI Rule Not Found",
      description: "The requested Cursor AI rule could not be found.",
      keywords: ["cursor ai", "rules", "development"]
    };
  }

  const category = await getCategoryByRulePath(rulePath);
  return {
    title: `${rule.name} - Cursor AI Rules`,
    description: rule.description || `Cursor AI rules for ${rule.name}`,
    keywords: [
      "cursor ai",
      "development",
      "rules",
      rule.name.toLowerCase(),
      ...(rule.keywords || []),
      ...(category ? [category.name.toLowerCase()] : [])
    ],
    ogType: "article",
    canonical: `/rules/${rule.path}`
  };
}

// Helper function to get category by rule path
export async function getCategoryByRulePath(rulePath: string): Promise<Category | undefined> {
  const categories = await getCategories();
  return categories.find(category => 
    category.rules.some(rule => rule.path === rulePath)
  );
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