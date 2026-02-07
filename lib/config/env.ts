import type { AppEnvironment, RuntimeEnv } from "@/lib/types"

const DEFAULT_ENV: AppEnvironment = "development"

function getEnv(key: keyof RuntimeEnv, fallback: string): string {
  const value = process.env[key]
  return value?.trim() ? value : fallback
}

function getNodeEnv(): AppEnvironment {
  const value = process.env.NODE_ENV

  if (value === "development" || value === "test" || value === "production") {
    return value
  }

  return DEFAULT_ENV
}

function toBoolean(value: string): boolean {
  return value.toLowerCase() === "true"
}

export const env: RuntimeEnv = {
  NODE_ENV: getNodeEnv(),
  NEXT_PUBLIC_APP_NAME: getEnv("NEXT_PUBLIC_APP_NAME", "DevAnonitos Portfolio"),
  NEXT_PUBLIC_APP_DESCRIPTION: getEnv(
    "NEXT_PUBLIC_APP_DESCRIPTION",
    "Modern performance-first portfolio website."
  ),
  NEXT_PUBLIC_APP_URL: getEnv("NEXT_PUBLIC_APP_URL", "http://localhost:3000"),
  NEXT_PUBLIC_FEATURE_ANALYTICS: getEnv("NEXT_PUBLIC_FEATURE_ANALYTICS", "false"),
  NEXT_PUBLIC_FEATURE_CONTACT_FORM: getEnv("NEXT_PUBLIC_FEATURE_CONTACT_FORM", "true"),
  NEXT_PUBLIC_FEATURE_PROJECT_FILTERS: getEnv("NEXT_PUBLIC_FEATURE_PROJECT_FILTERS", "true"),
}

export const envBooleans = {
  analytics: toBoolean(env.NEXT_PUBLIC_FEATURE_ANALYTICS),
  contactForm: toBoolean(env.NEXT_PUBLIC_FEATURE_CONTACT_FORM),
  projectFilters: toBoolean(env.NEXT_PUBLIC_FEATURE_PROJECT_FILTERS),
} as const
