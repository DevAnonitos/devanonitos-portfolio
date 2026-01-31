/**
 * Clean build artifacts
 * Removes .next, out, and other build-related directories
 */

import { rmSync, existsSync } from 'fs';
import { join } from 'path';
import { logger } from '../utils/logger.js';
import { paths } from '../utils/config.js';

const DIRS_TO_CLEAN = [
  '.next',
  'out',
  '.turbo',
  'dist',
  'build',
];

async function clean() {
  logger.header('🧹 Cleaning Build Artifacts');

  let cleanedCount = 0;

  for (const dir of DIRS_TO_CLEAN) {
    const dirPath = join(paths.root, dir);

    if (existsSync(dirPath)) {
      try {
        logger.start(`Removing ${dir}...`);
        rmSync(dirPath, { recursive: true, force: true });
        logger.success(`Removed ${dir}`);
        cleanedCount++;
      } catch (error) {
        logger.error(`Failed to remove ${dir}:`, error.message);
      }
    } else {
      logger.info(`${dir} does not exist, skipping`);
    }
  }

  logger.section('Summary');
  logger.success(`Cleaned ${cleanedCount} director${cleanedCount === 1 ? 'y' : 'ies'}`);
  logger.info('Build artifacts have been cleaned successfully\n');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  clean().catch(error => {
    logger.error('Clean failed:', error);
    process.exit(1);
  });
}

export default clean;
