/**
 * Initial project setup
 * Sets up the development environment for first-time contributors
 */

import { execSync } from 'child_process';
import { existsSync, copyFileSync, writeFileSync } from 'fs';
import { logger } from '../utils/logger.js';
import { paths } from '../utils/config.js';

function runCommand(command, description) {
  logger.start(description);
  try {
    execSync(command, { stdio: 'inherit', cwd: paths.root });
    logger.success(`${description} - Done`);
    return true;
  } catch (error) {
    logger.error(`${description} - Failed`);
    return false;
  }
}

async function setup() {
  logger.header('🚀 Project Setup');

  // Check if already set up
  if (existsSync(`${paths.root}/node_modules`)) {
    logger.warn('Project appears to be already set up.');
    logger.info('If you want to re-setup, please run: npm run clean\n');

    const readline = await import('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const answer = await new Promise(resolve => {
      rl.question('Continue anyway? (y/N): ', resolve);
    });
    rl.close();

    if (answer.toLowerCase() !== 'y') {
      logger.info('Setup cancelled\n');
      return;
    }
  }

  // Install dependencies
  logger.section('Installing Dependencies');
  if (!runCommand('npm install', 'Installing npm packages')) {
    process.exit(1);
  }

  // Create .env.local if it doesn't exist
  logger.section('Environment Setup');
  const envLocal = `${paths.root}/.env.local`;
  const envExample = `${paths.root}/.env.example`;

  if (!existsSync(envLocal)) {
    if (existsSync(envExample)) {
      copyFileSync(envExample, envLocal);
      logger.success('Created .env.local from .env.example');
      logger.warn('Please update .env.local with your configuration');
    } else {
      writeFileSync(envLocal, '# Environment variables\n# Add your variables here\n');
      logger.success('Created empty .env.local');
    }
  } else {
    logger.info('.env.local already exists');
  }

  // Git hooks setup (if using husky)
  logger.section('Git Hooks');
  if (existsSync(`${paths.root}/.husky`)) {
    runCommand('npm run prepare', 'Setting up git hooks');
  } else {
    logger.info('No git hooks configuration found, skipping');
  }

  // Summary
  logger.section('Summary');
  logger.success('Project setup completed! ✨');
  logger.info('\nNext steps:');
  logger.info('  1. Update .env.local with your configuration');
  logger.info('  2. Run: npm run dev');
  logger.info('  3. Open: http://localhost:3000\n');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  setup().catch(error => {
    logger.error('Setup failed:', error);
    process.exit(1);
  });
}

export default setup;
