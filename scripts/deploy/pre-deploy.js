/**
 * Pre-deployment validation
 * Runs checks before deploying to production
 */

import { execSync } from 'child_process';
import { logger } from '../utils/logger.js';
import { config, paths } from '../utils/config.js';
import { existsSync } from 'fs';

async function preDeploy() {
  logger.header('🚀 Pre-Deployment Validation');

  let hasErrors = false;
  let hasWarnings = false;

  // Check git status
  logger.section('Git Status');
  try {
    const status = execSync('git status --porcelain', {
      cwd: paths.root,
      encoding: 'utf-8'
    });

    if (status.trim()) {
      logger.warn('Uncommitted changes detected:');
      console.log(status);
      hasWarnings = true;
    } else {
      logger.success('Working directory is clean');
    }

    // Check current branch
    const branch = execSync('git branch --show-current', {
      cwd: paths.root,
      encoding: 'utf-8'
    }).trim();

    logger.info(`Current branch: ${branch}`);

    if (branch !== 'main' && branch !== 'master') {
      logger.warn(`Deploying from branch: ${branch}`);
      hasWarnings = true;
    }
  } catch (error) {
    logger.error('Git check failed. Is this a git repository?');
    hasErrors = true;
  }

  // Run linter
  logger.section('Linting');
  try {
    execSync('npm run lint', {
      cwd: paths.root,
      stdio: 'inherit'
    });
    logger.success('Linting passed');
  } catch (error) {
    logger.error('Linting failed. Please fix errors before deploying.');
    hasErrors = true;
  }

  // Run type check
  logger.section('Type Checking');
  try {
    execSync('npx tsc --noEmit', {
      cwd: paths.root,
      stdio: 'inherit'
    });
    logger.success('Type checking passed');
  } catch (error) {
    logger.error('Type checking failed. Please fix errors before deploying.');
    hasErrors = true;
  }

  // Check for TODO/FIXME comments
  logger.section('Code Quality');
  try {
    const todos = execSync('git grep -n "TODO\\|FIXME" -- "*.ts" "*.tsx" "*.js" "*.jsx" || true', {
      cwd: paths.root,
      encoding: 'utf-8'
    });

    if (todos.trim()) {
      logger.warn('Found TODO/FIXME comments:');
      console.log(todos);
      hasWarnings = true;
    } else {
      logger.success('No TODO/FIXME comments found');
    }
  } catch (error) {
    // Ignore errors
  }

  // Check environment variables
  logger.section('Environment');
  const requiredEnvVars = [
    // Add your required environment variables here
    // 'NEXT_PUBLIC_API_URL',
  ];

  if (requiredEnvVars.length > 0) {
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        logger.error(`Missing required environment variable: ${envVar}`);
        hasErrors = true;
      } else {
        logger.success(`${envVar} is set`);
      }
    }
  } else {
    logger.info('No required environment variables configured');
  }

  // Test build
  logger.section('Build Test');
  logger.start('Running production build...');
  try {
    execSync('npm run build', {
      cwd: paths.root,
      stdio: 'inherit'
    });
    logger.success('Production build successful');
  } catch (error) {
    logger.error('Production build failed. Please fix errors before deploying.');
    hasErrors = true;
  }

  // Summary
  logger.section('Summary');
  if (hasErrors) {
    logger.error('Pre-deployment validation failed! ❌');
    logger.info('Please fix the errors above before deploying.\n');
    process.exit(1);
  } else if (hasWarnings) {
    logger.warn('Pre-deployment validation passed with warnings ⚠️');
    logger.info('Please review the warnings above.\n');
  } else {
    logger.success('Pre-deployment validation passed! ✨');
    logger.info('Ready to deploy\n');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  preDeploy().catch(error => {
    logger.error('Pre-deployment validation failed:', error);
    process.exit(1);
  });
}

export default preDeploy;
