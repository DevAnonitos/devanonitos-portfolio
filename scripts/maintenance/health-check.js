/**
 * Project health check
 * Comprehensive check of project health and best practices
 */

import { execSync } from 'child_process';
import { existsSync, statSync, readdirSync } from 'fs';
import { join } from 'path';
import { logger } from '../utils/logger.js';
import { config, paths } from '../utils/config.js';

function checkFileSize(filePath, maxSizeMB = 1) {
  if (!existsSync(filePath)) return null;
  const stats = statSync(filePath);
  const sizeMB = stats.size / (1024 * 1024);
  return {
    size: sizeMB,
    isLarge: sizeMB > maxSizeMB
  };
}

function countFiles(dir, extensions = []) {
  let count = 0;

  try {
    const files = readdirSync(dir);

    for (const file of files) {
      const filePath = join(dir, file);
      const stats = statSync(filePath);

      if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        count += countFiles(filePath, extensions);
      } else if (stats.isFile()) {
        if (extensions.length === 0 || extensions.some(ext => file.endsWith(ext))) {
          count++;
        }
      }
    }
  } catch (error) {
    // Ignore errors
  }

  return count;
}

async function healthCheck() {
  logger.header('🏥 Project Health Check');

  let score = 100;
  const issues = [];
  const warnings = [];

  // Check package.json
  logger.section('Package Configuration');

  const pkg = config.package;

  if (!pkg.description) {
    warnings.push('Missing package description');
    score -= 2;
  } else {
    logger.success('Package description present');
  }

  if (!pkg.repository) {
    warnings.push('Missing repository information');
    score -= 2;
  } else {
    logger.success('Repository information present');
  }

  if (!pkg.license) {
    warnings.push('Missing license information');
    score -= 2;
  } else {
    logger.success(`License: ${pkg.license}`);
  }

  // Check essential files
  logger.section('Essential Files');

  const essentialFiles = [
    'README.md',
    'LICENSE',
    '.gitignore',
    'package.json',
    'tsconfig.json',
  ];

  for (const file of essentialFiles) {
    if (existsSync(join(paths.root, file))) {
      logger.success(`${file} present`);
    } else {
      issues.push(`Missing ${file}`);
      score -= 5;
    }
  }

  // Check code quality tools
  logger.section('Code Quality Tools');

  const qualityTools = {
    'ESLint': 'eslint.config.mjs',
    'Prettier': '.prettierrc',
    'EditorConfig': '.editorconfig',
  };

  for (const [tool, file] of Object.entries(qualityTools)) {
    if (existsSync(join(paths.root, file))) {
      logger.success(`${tool} configured`);
    } else {
      warnings.push(`${tool} not configured`);
      score -= 3;
    }
  }

  // Check dependencies
  logger.section('Dependencies');

  try {
    const outdatedOutput = execSync('npm outdated --json', {
      cwd: paths.root,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const outdated = JSON.parse(outdatedOutput || '{}');
    const outdatedCount = Object.keys(outdated).length;

    if (outdatedCount === 0) {
      logger.success('All dependencies up to date');
    } else {
      warnings.push(`${outdatedCount} outdated dependencies`);
      score -= Math.min(outdatedCount * 2, 10);
    }
  } catch (error) {
    if (error.stdout) {
      try {
        const outdated = JSON.parse(error.stdout);
        const outdatedCount = Object.keys(outdated).length;
        warnings.push(`${outdatedCount} outdated dependencies`);
        score -= Math.min(outdatedCount * 2, 10);
      } catch {
        logger.success('All dependencies up to date');
      }
    } else {
      logger.success('All dependencies up to date');
    }
  }

  // Check security
  logger.section('Security');

  try {
    execSync('npm audit --json', {
      cwd: paths.root,
      stdio: 'pipe'
    });
    logger.success('No security vulnerabilities');
  } catch (error) {
    if (error.stdout) {
      try {
        const audit = JSON.parse(error.stdout);
        const vulnCount = audit.metadata?.vulnerabilities?.total || 0;
        if (vulnCount > 0) {
          issues.push(`${vulnCount} security vulnerabilities`);
          score -= Math.min(vulnCount * 5, 20);
        }
      } catch {
        warnings.push('Could not parse security audit');
      }
    }
  }

  // Check project structure
  logger.section('Project Structure');

  const srcFiles = countFiles(paths.src, ['.ts', '.tsx', '.js', '.jsx']);
  logger.info(`Source files: ${srcFiles}`);

  if (srcFiles === 0) {
    warnings.push('No source files found');
    score -= 10;
  } else if (srcFiles > 100) {
    logger.info('Large codebase - consider modularization');
  }

  // Check git
  logger.section('Version Control');

  try {
    const status = execSync('git status --porcelain', {
      cwd: paths.root,
      encoding: 'utf-8'
    });

    if (status.trim()) {
      warnings.push('Uncommitted changes present');
      score -= 3;
    } else {
      logger.success('Working directory clean');
    }
  } catch (error) {
    warnings.push('Not a git repository');
    score -= 10;
  }

  // Summary
  logger.section('Health Score');

  const finalScore = Math.max(0, score);

  if (finalScore >= 90) {
    logger.success(`Health Score: ${finalScore}/100 - Excellent! ✨`);
  } else if (finalScore >= 70) {
    logger.info(`Health Score: ${finalScore}/100 - Good`);
  } else if (finalScore >= 50) {
    logger.warn(`Health Score: ${finalScore}/100 - Needs Improvement`);
  } else {
    logger.error(`Health Score: ${finalScore}/100 - Critical`);
  }

  if (issues.length > 0) {
    logger.section('Issues');
    issues.forEach(issue => logger.error(`❌ ${issue}`));
  }

  if (warnings.length > 0) {
    logger.section('Warnings');
    warnings.forEach(warning => logger.warn(`⚠️  ${warning}`));
  }

  if (issues.length === 0 && warnings.length === 0) {
    logger.info('\n🎉 Your project is in great shape!\n');
  } else {
    logger.info('\n💡 Address the issues above to improve your project health.\n');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  healthCheck().catch(error => {
    logger.error('Health check failed:', error);
    process.exit(1);
  });
}

export default healthCheck;
