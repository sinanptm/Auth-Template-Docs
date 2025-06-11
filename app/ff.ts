export interface FrontendFolderInfo {
    name: string;
    purpose: string;
    description: string;
    technologies: string[];
    category: string;
    examples: string[];
    keyFeatures: string[];
    patterns: string[];
    codeExample?: {
        filename: string;
        code: string;
        description: string;
    };
}

export const frontendFolderData: Record<string, FrontendFolderInfo> = {
    app: {
        name: "app",
        purpose: "Next.js 15 App Router with Authentication Layouts",
        description:
            "Next.js 15 App Router structure with sophisticated authentication handling through nested layouts. Features route groups for user and admin sections, with layout-based authentication guards that prevent unauthorized access. Uses React 19 with server components and advanced routing patterns including protected routes and role-based access control.",
        technologies: ["Next.js 15.3.2", "React 19", "TypeScript 5", "App Router", "Server Components"],
        category: "Routing & Pages",
        examples: ["layout.tsx", "metadata.ts", "(user)/auth/layout.tsx", "admin/layout.tsx", "not-found.tsx"],
        keyFeatures: [
            "Route groups for user/admin separation",
            "Layout-based authentication guards",
            "Server and Client Components",
            "Nested layouts with auth checking",
            "Protected routes with role-based access",
            "Metadata API integration",
        ],
        patterns: ["App Router", "Route Groups", "Layout Guards", "Protected Routes"],
        codeExample: {
            filename: "app/admin/layout.tsx",
            code: `'use client';

import LoadingOverlay from "@/components/LoadingOverlay";
import useAuthAdmin from "@/hooks/store/auth/useAuthAdmin";
import { WrapperProps } from "@/types";
import { notFound, usePathname } from "next/navigation";

const AdminLayout = ({ children }: WrapperProps) => {
    const { isAuthenticated, isHydrated } = useAuthAdmin();
    const path = usePathname();

    if (!isHydrated) {
        return <LoadingOverlay loading />;
    }

    if (!isAuthenticated && !path.includes('/admin/auth')) {
        notFound();
    }

    return children;
};

export default AdminLayout;`,
            description:
                "Admin layout with authentication guard that checks admin authentication status and redirects unauthorized users, with hydration handling for SSR compatibility.",
        },
    },
    components: {
        name: "components",
        purpose: "Modular React Component Architecture with shadcn/ui",
        description:
            "Comprehensive component library organized by feature and complexity. Built on shadcn/ui and Radix UI primitives with custom form elements, authentication components, and layout components. Features atomic design principles with reusable form elements that integrate react-hook-form with Zod validation.",
        technologies: ["React 19", "shadcn/ui", "Radix UI", "Tailwind CSS", "TypeScript", "react-hook-form"],
        category: "UI Components",
        examples: ["ui/", "forms/elements/", "layout/", "dialogs/", "admin/", "user/auth/"],
        keyFeatures: [
            "shadcn/ui component integration",
            "Custom form elements with validation",
            "Atomic design component organization",
            "Authentication-specific components",
            "Responsive design patterns",
            "Accessibility-first approach",
        ],
        patterns: ["Compound Components", "Controlled Components", "Form Validation", "Custom Hooks Integration"],
        codeExample: {
            filename: "components/forms/elements/CustomInput.tsx",
            code: `import { Input } from "@/components/ui/input";
import FormFieldWrapper from "./FormFieldWrapper";
import { memo, useState } from "react";
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { BaseFormFieldProps } from "@/types";

interface CustomInputProps extends BaseFormFieldProps, React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = ({ type, ...props }: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { error, showHint, ...inputProps } = props;
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <FormFieldWrapper {...props}>
      {(id, describedBy) => (
        <div className="relative">
          <Input
            id={id}
            type={inputType}
            className={cn(
              props.error && "border-destructive focus-visible:ring-destructive",
              isPassword && "pr-10",
              props.className,
            )}
            aria-describedby={describedBy}
            aria-invalid={!!props.error}
            {...inputProps}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          )}
        </div>
      )}
    </FormFieldWrapper>
  );
};

export default memo(CustomInput);`,
            description:
                "Custom input component with password visibility toggle, error handling, and accessibility features, extending shadcn/ui Input with form validation integration.",
        },
    },
    hooks: {
        name: "hooks",
        purpose: "Custom React Hooks with TanStack Query & Zustand",
        description:
            "Advanced custom hooks architecture featuring TanStack Query for server state management and Zustand for client state. Includes API hooks with automatic token refresh, authentication state management with localStorage persistence, and utility hooks for loading states and error handling.",
        technologies: ["TanStack Query 5.76.2", "Zustand 5.0.5", "React 19", "TypeScript", "Axios"],
        category: "State & Logic",
        examples: ["api/user/", "api/admin/", "store/auth/", "useLoading.ts", "useAuthRedirectToast.ts"],
        keyFeatures: [
            "TanStack Query for server state",
            "Zustand stores with persistence",
            "Authentication state management",
            "Automatic token refresh logic",
            "SSR-safe hydration handling",
            "Type-safe API hooks",
        ],
        patterns: ["Custom Hooks", "Server State Management", "Client State Management", "Hydration Patterns"],
        codeExample: {
            filename: "hooks/store/auth/useAuthUser.ts",
            code: `"use client";

import { create } from "zustand";
import { clearAuthData, setItemLocalStorage } from "@/lib/utils";
import { Tokens, UserRole } from "@/types";
import { useEffect, useState } from "react";
import { getItemLocalStorage } from "@/lib/utils";
import { UserAuthState } from "@/types";

// Store creation without hydration logic
const createAuthStore = create<UserAuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  user: null,

  setToken: (token) => {
    set({ token, isAuthenticated: true });
    setItemLocalStorage(Tokens.User, token);
  },

  setUser: (user) => {
    set({ user });
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  },

  logout: () => {
    set({ token: null, user: null, isAuthenticated: false });
    clearAuthData(UserRole.User);
  },

  // Method to initialize the store with values from localStorage
  initialize: (token, user) => {
    set({
      token,
      user,
      isAuthenticated: !!token
    });
  }
}));

// Hook handles hydration and returns the store
const useAuthUser = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const store = createAuthStore();

  // Hydrate the store on the client side
  useEffect(() => {
    if (!isHydrated) {
      const token = getItemLocalStorage(Tokens.User);
      const userStr = getItemLocalStorage("user");
      const user = userStr ? JSON.parse(userStr) : null;

      store.initialize(token, user);
      setIsHydrated(true);
    }
  }, [isHydrated, store]);

  return {
    ...store,
    isHydrated,
  };
}

export default useAuthUser;`,
            description:
                "Zustand authentication store with SSR-safe hydration, localStorage persistence, and automatic token management for seamless user authentication state.",
        },
    },
    lib: {
        name: "lib",
        purpose: "Core Utilities with Axios & Zod Integration",
        description:
            "Essential utility library featuring Axios API client with automatic token refresh, Zod validation schemas, utility functions for authentication, and shared configurations. Includes sophisticated error handling, request/response interceptors, and type-safe API wrapper functions.",
        technologies: ["Axios 1.9.0", "axios-auth-refresh 3.3.6", "Zod 3.25.28", "TypeScript", "Tailwind Merge"],
        category: "Utilities & Config",
        examples: ["api/", "utils.ts", "schema.ts", "fonts.ts"],
        keyFeatures: [
            "Axios client with auth refresh interceptors",
            "Zod validation schemas for forms",
            "Type-safe API wrapper functions",
            "Authentication utility functions",
            "Error handling and toast notifications",
            "localStorage management utilities",
        ],
        patterns: ["Factory Pattern", "Interceptor Pattern", "Schema Validation", "Error Boundaries"],
        codeExample: {
            filename: "lib/api/createApiInstance.ts",
            code: `import axios, { AxiosInstance } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { SERVER_URL } from "@/config";
import { UserRole } from "@/types";
import { StatusCode } from "@/types/api";
import { clearAuthData, getTokenKey } from "../utils";
import { PostRoutes } from "@/types/api/PostRoutes";

const createApiInstance = (role: UserRole = UserRole.User): AxiosInstance => {
  const tokenKey = getTokenKey(role);

  const api = axios.create({
    baseURL: \`\${SERVER_URL}/api\`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem(tokenKey);
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  });

  const refreshAuthLogic = async (failedRequest: any) => {
    try {
      const route = \`\${SERVER_URL}/api\${role === UserRole.Admin ? PostRoutes.AdminRefresh : PostRoutes.UserRefresh}\`;

      const response = await axios.post(route, {}, {
        withCredentials: true,
      });

      const { accessToken } = response.data;
      localStorage.setItem(tokenKey, accessToken);
      failedRequest.response.config.headers.Authorization = \`Bearer \${accessToken}\`;
      return Promise.resolve();
    } catch (error: any) {
      const reason = error?.response?.data?.message || "Failed to refresh authentication token";
      clearAuthData(role, { reason });
      return Promise.reject(error);
    }
  };

  createAuthRefreshInterceptor(api, refreshAuthLogic, {
    statusCodes: [StatusCode.TokenExpired],
    retryInstance: api,
  });

  return api;
};

export default createApiInstance;`,
            description:
                "Sophisticated Axios instance factory with automatic token refresh, role-based authentication, and comprehensive error handling for seamless API communication.",
        },
    },
    types: {
        name: "types",
        purpose: "Comprehensive TypeScript Type System",
        description:
            "Extensive TypeScript type definitions covering API routes, form validation, component props, and state management. Features discriminated unions, generic types, and utility types that ensure type safety across the entire application with clear contracts between different layers.",
        technologies: ["TypeScript 5", "Type Definitions", "Generic Types", "Utility Types"],
        category: "Type Safety",
        examples: ["api/GetRoutes.ts", "api/PostRoutes.ts", "form.ts", "props.ts", "state.ts", "index.ts"],
        keyFeatures: [
            "API route type definitions",
            "Form validation type schemas",
            "Component prop interfaces",
            "Authentication state types",
            "Generic utility types",
            "Discriminated union types",
        ],
        patterns: ["Type Guards", "Generic Constraints", "Utility Types", "Interface Segregation"],
        codeExample: {
            filename: "types/props.ts",
            code: `import { ReactNode } from "react";
import { ForgotPasswordTokenData, SigninFormData } from "./form";

export interface WrapperProps {
  children: ReactNode;
}

export interface SigninFormProps {
  onSubmit: (data: SigninFormData) => void;
  isLoading?: boolean;
  className?: string;
  submitButtonText?: string;

  onForgotPassword?: () => void;
  showForgotPassword?: boolean;
  forgotPasswordText?: string;
  forgotPasswordLink?: string;

  showSignUp?: boolean;
  signUpText?: string;
  signUpLinkText?: string;
  signUpLink?: string;

  defaultValues?: {
    email?: string;
    password?: string;
  };
}

export interface BaseFormFieldProps {
  label?: string;
  hint?: string;
  required?: boolean;
  showHint?: boolean;
  description?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
}

export interface FormFieldWrapperProps extends BaseFormFieldProps {
  children: (id: string, describedBy: string | undefined) => React.ReactNode;
}`,
            description:
                "Comprehensive prop interfaces for form components with optional configurations, error handling, and flexible customization options for authentication flows.",
        },
    },
    styles: {
        name: "styles",
        purpose: "Tailwind CSS v4 with Custom Design System",
        description:
            "Modern styling architecture using Tailwind CSS v4 with custom CSS properties, dark mode support, and a comprehensive design system. Features custom animations, color schemes with OKLCH color space, and responsive design utilities with accessibility considerations.",
        technologies: ["Tailwind CSS v4", "PostCSS", "CSS Custom Properties", "OKLCH Colors", "tw-animate-css"],
        category: "Styling & Design",
        examples: ["globals.css"],
        keyFeatures: [
            "Tailwind CSS v4 with @import syntax",
            "OKLCH color space for better color accuracy",
            "Custom CSS properties for theming",
            "Dark mode support with custom variants",
            "Custom animations and transitions",
            "Responsive design utilities",
        ],
        patterns: ["Utility-First CSS", "CSS Custom Properties", "Design Tokens", "Component Variants"],
        codeExample: {
            filename: "styles/globals.css",
            code: `@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-destructive: var(--destructive);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-lg: var(--radius);
}

:root {
  --background: oklch(0.147 0.004 49.25);
  --foreground: oklch(0.985 0.001 106.423);
  --primary: oklch(0.923 0.003 48.717);
  --primary-foreground: oklch(0.216 0.006 56.043);
  --secondary: oklch(0.268 0.007 34.298);
  --secondary-foreground: oklch(0.985 0.001 106.423);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.553 0.013 58.071);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}`,
            description:
                "Modern Tailwind CSS v4 configuration with OKLCH color space, custom design tokens, and comprehensive theming system for consistent visual design.",
        },
    },
    config: {
        name: "config",
        purpose: "Application Configuration with Firebase Integration",
        description:
            "Centralized configuration management with environment variable handling, Firebase integration, and application constants. Provides type-safe configuration objects and manages different environments with proper fallbacks and validation.",
        technologies: ["Firebase 11.8.1", "Environment Variables", "TypeScript"],
        category: "Configuration",
        examples: ["index.ts"],
        keyFeatures: [
            "Firebase configuration and initialization",
            "Environment variable management",
            "Server URL configuration",
            "Type-safe configuration objects",
            "Development vs production settings",
            "Application constants definition",
        ],
        patterns: ["Configuration Objects", "Environment-based Config", "Service Initialization"],
        codeExample: {
            filename: "config/index.ts",
            code: `export const APP_NAME = "Auth Template";
import { initializeApp } from "firebase/app";

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);`,
            description:
                "Application configuration with Firebase initialization, environment variable management, and server URL configuration with development fallbacks.",
        },
    },
    constants: {
        name: "constants",
        purpose: "Application Constants & Static Values",
        description:
            "Centralized constants and static values used throughout the application. While not explicitly shown in the provided code, this folder would typically contain API endpoints, validation rules, UI constants, and other static data that remains unchanged during runtime.",
        technologies: ["TypeScript", "Enums", "Constants"],
        category: "Static Data",
        examples: ["index.ts", "api.ts", "validation.ts", "ui.ts"],
        keyFeatures: [
            "API endpoint constants",
            "Validation rule definitions",
            "UI configuration constants",
            "Error message constants",
            "Enum definitions",
            "Static configuration data",
        ],
        patterns: ["Constants Pattern", "Enum Pattern", "Static Configuration"],
    },
    public: {
        name: "public",
        purpose: "Static Assets & Public Files",
        description:
            "Static assets served directly by Next.js including images, icons, fonts, and other public files. Contains Google OAuth assets and other resources that need to be publicly accessible via direct URLs for SEO and performance optimization.",
        technologies: ["Static Files", "SVG Icons", "Images", "Public Assets"],
        category: "Static Assets",
        examples: ["assets/google.svg", "favicon.ico", "robots.txt", "sitemap.xml"],
        keyFeatures: [
            "OAuth provider assets (Google)",
            "Direct URL accessibility",
            "SEO-optimized file structure",
            "Performance-optimized assets",
            "Icon and image resources",
            "Public configuration files",
        ],
        patterns: ["Static Asset Organization", "SEO Optimization", "Performance Optimization"],
    },
};

export const frontendCategories = {
    "Routing & Pages": {
        description: "Next.js 15 App Router with authentication layouts",
        folders: ["app"],
        color: "bg-blue-900 text-blue-200",
    },
    "UI Components": {
        description: "React components with shadcn/ui and form validation",
        folders: ["components"],
        color: "bg-green-900 text-green-200",
    },
    "State & Logic": {
        description: "TanStack Query and Zustand state management",
        folders: ["hooks"],
        color: "bg-purple-900 text-purple-200",
    },
    "Utilities & Config": {
        description: "Axios API client and Zod validation utilities",
        folders: ["lib"],
        color: "bg-orange-900 text-orange-200",
    },
    "Type Safety": {
        description: "Comprehensive TypeScript type definitions",
        folders: ["types"],
        color: "bg-red-900 text-red-200",
    },
    "Styling & Design": {
        description: "Tailwind CSS v4 with OKLCH colors and design system",
        folders: ["styles"],
        color: "bg-pink-900 text-pink-200",
    },
    Configuration: {
        description: "Firebase integration and environment configuration",
        folders: ["config"],
        color: "bg-indigo-900 text-indigo-200",
    },
    "Static Data": {
        description: "Application constants and static values",
        folders: ["constants"],
        color: "bg-yellow-900 text-yellow-200",
    },
    "Static Assets": {
        description: "Public files and OAuth provider assets",
        folders: ["public"],
        color: "bg-gray-900 text-gray-200",
    },
};
