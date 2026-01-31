/**
 * Check for outdated dependencies
 * Scans package.json and reports outdated packages
 */

import { execSync } from 'child_process';
import { logger } from '../utils/logger.js';
import { config } from '../utils/config.js';

async function checkDeps() {
  logger.header('📦 Dependency Check');

  logger.start('Checking for outdated packages...\n');

  try {
    // Run npm outdated
    const output = execSync('npm outdated --json', {
      cwd: config.paths.root,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const outdated = JSON.parse(output || '{}');
    const packages = Object.keys(outdated);

    if (packages.length === 0) {
      logger.success('All dependencies are up to date! ✨\n');
      return;
    }

    logger.section('Outdated Packages');
    logger.warn(`Found ${packages.length} outdated package${packages.length === 1 ? '' : 's'}:\n`);

    // Display outdated packages
    for (const [name, info] of Object.entries(outdated)) {
      const current = info.current || 'N/A';
      const wanted = info.wanted || 'N/A';
      const latest = info.latest || 'N/A';
      const type = info.type || 'dependencies';

      logger.info(`${name} (${type})`);
      logger.info(`  Current: ${current}`);
      logger.info(`  Wanted:  ${wanted}`);
      logger.info(`  Latest:  ${latest}`);

      if (info.homepage) {
        logger.debug(`  Homepage: ${info.homepage}`);
      }
      console.log('');
    }

    // Recommendations
    logger.section('Recommendations');
    logger.info('To update dependencies:');
    logger.info('  - Safe update (respects semver): npm update');
    logger.info('  - Update to latest: npm install <package>@latest');
    logger.info('  - Update all to latest: npm run update-deps');
    logger.warn('\nAlways test after updating dependencies!\n');

  } catch (error) {
    // npm outdated exits with code 1 if there are outdated packages
    if (error.stdout) {
      try {
        const outdated = JSON.parse(error.stdout);
        const packages = Object.keys(outdated);

        if (packages.length > 0) {
          logger.section('Outdated Packages');
          logger.warn(`Found ${packages.length} outdated package${packages.length === 1 ? '' : 's'}:\n`);

          for (const [name, info] of Object.entries(outdated)) {
            logger.info(`${name}`);
            logger.info(`  Current: ${info.current || 'N/A'}`);
            logger.info(`  Wanted:  ${info.wanted || 'N/A'}`);
            logger.info(`  Latest:  ${info.latest || 'N/A'}`);
            console.log('');
          }

          logger.section('Recommendations');
          logger.info('Run: npm update (safe) or npm run update-deps (latest)\n');
          return;
        }
      } catch (parseError) {
        // Ignore parse errors
      }
    }

    logger.success('All dependencies are up to date! ✨\n');
  }

  // Check for security vulnerabilities
  logger.section('Security Audit');
  logger.start('Running security audit...\n');

  try {
    execSync('npm audit --json', {
      cwd: config.paths.root,
      stdio: 'inherit'
    });
    logger.success('No security vulnerabilities found! ✨\n');
  } catch (error) {
    logger.warn('Security vulnerabilities detected!');
    logger.info('Run: npm audit fix\n');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  checkDeps().catch(error => {
    logger.error('Dependency check failed:', error);
    process.exit(1);
  });
}

export default checkDeps;
