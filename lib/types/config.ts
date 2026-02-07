export type AppEnvironment = "development" | "test" | "production"

export interface FeatureFlags {
  analytics: boolean
  contactForm: boolean
  projectFilters: boolean
}

export interface AppConfig {
  name: string
  description: string
  url: string
  environment: AppEnvironment
  isProduction: boolean
  isDevelopment: boolean
}

export interface RuntimeEnv {
  NODE_ENV: AppEnvironment
  NEXT_PUBLIC_APP_NAME: string
  NEXT_PUBLIC_APP_DESCRIPTION: string
  NEXT_PUBLIC_APP_URL: string
  NEXT_PUBLIC_FEATURE_ANALYTICS: string
  NEXT_PUBLIC_FEATURE_CONTACT_FORM: string
  NEXT_PUBLIC_FEATURE_PROJECT_FILTERS: string
}
