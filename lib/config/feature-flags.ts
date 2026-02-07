import type { FeatureFlags } from "@/lib/types"

import { envBooleans } from "./env"

export const featureFlags: FeatureFlags = {
  analytics: envBooleans.analytics,
  contactForm: envBooleans.contactForm,
  projectFilters: envBooleans.projectFilters,
}

export function isFeatureEnabled(feature: keyof FeatureFlags): boolean {
  return featureFlags[feature]
}
