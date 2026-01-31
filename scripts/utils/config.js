/**
 * Configuration loader utility
 * Loads and validates configuration from various sources
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get project root (2 levels up from utils/)
export const PROJECT_ROOT = join(__dirname, '..', '..');

/**
 * Load package.json
 */
export function loadPackageJson() {
  const packagePath = join(PROJECT_ROOT, 'package.json');
  if (!existsSync(packagePath)) {
    throw new Error('package.json not found');
  }
  return JSON.parse(readFileSync(packagePath, 'utf-8'));
}

/**
 * Load environment variables from .env file
 */
export function loadEnv(envFile = '.env') {
  const envPath = join(PROJECT_ROOT, envFile);
  if (!existsSync(envPath)) {
    return {};
  }

  const envContent = readFileSync(envPath, 'utf-8');
  const env = {};

  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key) {
        env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
      }
    }
  });

  return env;
}

/**
 * Check if file exists in project
 */
export function fileExists(relativePath) {
  return existsSync(join(PROJECT_ROOT, relativePath));
}

/**
 * Get project paths
 */
export const paths = {
  root: PROJECT_ROOT,
  src: join(PROJECT_ROOT, 'app'),
  public: join(PROJECT_ROOT, 'public'),
  build: join(PROJECT_ROOT, '.next'),
  nodeModules: join(PROJECT_ROOT, 'node_modules'),
  scripts: join(PROJECT_ROOT, 'scripts'),
};

/**
 * Default configuration
 */
export const config = {
  paths,
  package: loadPackageJson(),
  env: process.env,
};

export default config;
