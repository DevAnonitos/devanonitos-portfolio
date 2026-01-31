/**
 * Pre-build checks and setup
 * Validates environment and dependencies before building
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { logger } from '../utils/logger.js';
import { config, paths } from '../utils/config.js';

async function prebuild() {
  logger.header('🔍 Pre-Build Checks');

  let hasErrors = false;

  // Check Node version
  logger.section('Node.js Version');
  const nodeVersion = process.version;
  const requiredVersion = config.package.engines?.node || '>=18.0.0';
  logger.info(`Current: ${nodeVersion}`);
  logger.info(`Required: ${requiredVersion}`);

  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion < 18) {
    logger.error('Node.js version is too old. Please upgrade to v18 or higher.');
    hasErrors = true;
  } else {
    logger.success('Node.js version is compatible');
  }

  // Check if node_modules exists
  logger.section('Dependencies');
  if (!existsSync(paths.nodeModules)) {
    logger.error('node_modules not found. Please run: npm install');
    hasErrors = true;
  } else {
    logger.success('node_modules found');
  }

  // Check for required files
  logger.section('Required Files');
  const requiredFiles = [
    'package.json',
    'next.config.ts',
    'tsconfig.json',
  ];

  for (const file of requiredFiles) {
    if (existsSync(`${paths.root}/${file}`)) {
      logger.success(`${file} found`);
    } else {
      logger.error(`${file} not found`);
      hasErrors = true;
    }
  }

  // Check TypeScript
  logger.section('TypeScript');
  try {
    execSync('npx tsc --version', { stdio: 'pipe' });
    logger.success('TypeScript is available');
  } catch (error) {
    logger.error('TypeScript is not available');
    hasErrors = true;
  }

  // Check for environment variables (if needed)
  logger.section('Environment');
  const envFile = `${paths.root}/.env.local`;
  if (existsSync(envFile)) {
    logger.info('.env.local found');
  } else {
    logger.warn('.env.local not found (may not be required)');
  }

  // Summary
  logger.section('Summary');
  if (hasErrors) {
    logger.error('Pre-build checks failed. Please fix the errors above.');
    process.exit(1);
  } else {
    logger.success('All pre-build checks passed! ✨');
    logger.info('Ready to build\n');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  prebuild().catch(error => {
    logger.error('Pre-build checks failed:', error);
    process.exit(1);
  });
}

export default prebuild;
