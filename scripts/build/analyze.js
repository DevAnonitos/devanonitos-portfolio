/**
 * Bundle size analysis
 * Analyzes the build output and reports bundle sizes
 */

import { readdirSync, statSync, readFileSync } from 'fs';
import { join } from 'path';
import { logger } from '../utils/logger.js';
import { paths } from '../utils/config.js';

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function getDirectorySize(dirPath) {
  let totalSize = 0;

  try {
    const files = readdirSync(dirPath);

    for (const file of files) {
      const filePath = join(dirPath, file);
      const stats = statSync(filePath);

      if (stats.isDirectory()) {
        totalSize += getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
  } catch (error) {
    // Ignore errors for inaccessible directories
  }

  return totalSize;
}

function analyzeNextBuild() {
  const buildPath = paths.build;

  if (!readdirSync(buildPath).length) {
    logger.error('Build directory is empty. Please run: npm run build');
    return null;
  }

  const analysis = {
    total: 0,
    static: 0,
    server: 0,
    chunks: [],
  };

  // Analyze static files
  const staticPath = join(buildPath, 'static');
  if (readdirSync(staticPath).length) {
    analysis.static = getDirectorySize(staticPath);
  }

  // Analyze server files
  const serverPath = join(buildPath, 'server');
  if (readdirSync(serverPath).length) {
    analysis.server = getDirectorySize(serverPath);
  }

  analysis.total = getDirectorySize(buildPath);

  return analysis;
}

async function analyze() {
  logger.header('📊 Bundle Size Analysis');

  const buildPath = paths.build;

  // Check if build exists
  try {
    readdirSync(buildPath);
  } catch (error) {
    logger.error('Build directory not found. Please run: npm run build');
    process.exit(1);
  }

  logger.start('Analyzing build output...\n');

  const analysis = analyzeNextBuild();

  if (!analysis) {
    process.exit(1);
  }

  // Display results
  logger.section('Build Size Breakdown');
  logger.info(`Total Build Size:  ${formatBytes(analysis.total)}`);
  logger.info(`Static Assets:     ${formatBytes(analysis.static)}`);
  logger.info(`Server Files:      ${formatBytes(analysis.server)}`);

  // Warnings
  logger.section('Recommendations');
  const totalMB = analysis.total / (1024 * 1024);

  if (totalMB > 10) {
    logger.warn('Build size is quite large (>10MB)');
    logger.info('Consider:');
    logger.info('  - Code splitting');
    logger.info('  - Image optimization');
    logger.info('  - Removing unused dependencies');
  } else if (totalMB > 5) {
    logger.warn('Build size is moderate (>5MB)');
    logger.info('Consider optimizing images and dependencies');
  } else {
    logger.success('Build size is good! ✨');
  }

  logger.info('');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  analyze().catch(error => {
    logger.error('Analysis failed:', error);
    process.exit(1);
  });
}

export default analyze;
