/**
 * Update dependencies
 * Updates all dependencies to their latest versions
 */

import { execSync } from 'child_process';
import { logger } from '../utils/logger.js';
import { paths } from '../utils/config.js';

async function updateDeps() {
  logger.header('📦 Update Dependencies');

  logger.warn('This will update ALL dependencies to their latest versions.');
  logger.warn('Make sure to test thoroughly after updating!\n');

  // Confirm
  const readline = await import('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const answer = await new Promise(resolve => {
    rl.question('Continue? (y/N): ', resolve);
  });
  rl.close();

  if (answer.toLowerCase() !== 'y') {
    logger.info('Update cancelled\n');
    return;
  }

  // Update dependencies
  logger.section('Updating Dependencies');

  try {
    logger.start('Checking for updates...');

    // Get outdated packages
    const outdatedOutput = execSync('npm outdated --json', {
      cwd: paths.root,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const outdated = JSON.parse(outdatedOutput || '{}');
    const packages = Object.keys(outdated);

    if (packages.length === 0) {
      logger.success('All dependencies are already up to date! ✨\n');
      return;
    }

    logger.info(`Found ${packages.length} package${packages.length === 1 ? '' : 's'} to update\n`);

    // Update each package
    for (const pkg of packages) {
      logger.start(`Updating ${pkg}...`);
      try {
        execSync(`npm install ${pkg}@latest`, {
          cwd: paths.root,
          stdio: 'pipe'
        });
        logger.success(`Updated ${pkg}`);
      } catch (error) {
        logger.error(`Failed to update ${pkg}`);
      }
    }

  } catch (error) {
    if (error.stdout) {
      try {
        const outdated = JSON.parse(error.stdout);
        const packages = Object.keys(outdated);

        if (packages.length > 0) {
          logger.info(`Found ${packages.length} package${packages.length === 1 ? '' : 's'} to update\n`);

          for (const pkg of packages) {
            logger.start(`Updating ${pkg}...`);
            try {
              execSync(`npm install ${pkg}@latest`, {
                cwd: paths.root,
                stdio: 'pipe'
              });
              logger.success(`Updated ${pkg}`);
            } catch (updateError) {
              logger.error(`Failed to update ${pkg}`);
            }
          }
        }
      } catch (parseError) {
        logger.error('Failed to parse outdated packages');
      }
    } else {
      logger.success('All dependencies are already up to date! ✨\n');
      return;
    }
  }

  // Run audit fix
  logger.section('Security Audit');
  try {
    execSync('npm audit fix', {
      cwd: paths.root,
      stdio: 'inherit'
    });
    logger.success('Security audit completed');
  } catch (error) {
    logger.warn('Some security issues could not be automatically fixed');
  }

  // Summary
  logger.section('Summary');
  logger.success('Dependencies updated! ✨');
  logger.warn('\nIMPORTANT: Please test your application:');
  logger.info('  1. Run: npm run dev');
  logger.info('  2. Run: npm run build');
  logger.info('  3. Test all features');
  logger.info('  4. Commit changes if everything works\n');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updateDeps().catch(error => {
    logger.error('Update failed:', error);
    process.exit(1);
  });
}

export default updateDeps;
