/**
 * Post-deployment tasks
 * Runs cleanup and verification after deployment
 */

import { execSync } from 'child_process';
import { logger } from '../utils/logger.js';
import { config } from '../utils/config.js';

async function postDeploy() {
  logger.header('✅ Post-Deployment Tasks');

  const deploymentUrl = process.env.DEPLOYMENT_URL || process.env.VERCEL_URL;

  // Create git tag
  logger.section('Git Tagging');
  try {
    const version = config.package.version;
    const tagName = `v${version}`;

    // Check if tag already exists
    try {
      execSync(`git rev-parse ${tagName}`, { stdio: 'pipe' });
      logger.info(`Tag ${tagName} already exists`);
    } catch {
      // Tag doesn't exist, create it
      execSync(`git tag -a ${tagName} -m "Release ${version}"`, {
        cwd: config.paths.root,
        stdio: 'inherit'
      });
      logger.success(`Created tag: ${tagName}`);

      logger.info('Push tag with: git push origin ' + tagName);
    }
  } catch (error) {
    logger.warn('Failed to create git tag:', error.message);
  }

  // Verify deployment
  if (deploymentUrl) {
    logger.section('Deployment Verification');
    logger.info(`Deployment URL: ${deploymentUrl}`);

    try {
      // Basic health check
      const response = await fetch(deploymentUrl);
      if (response.ok) {
        logger.success('Deployment is accessible ✨');
      } else {
        logger.warn(`Deployment returned status: ${response.status}`);
      }
    } catch (error) {
      logger.error('Failed to verify deployment:', error.message);
    }
  } else {
    logger.info('No deployment URL provided, skipping verification');
  }

  // Notify (placeholder for notification services)
  logger.section('Notifications');
  logger.info('Add notification integrations here:');
  logger.info('  - Slack webhook');
  logger.info('  - Discord webhook');
  logger.info('  - Email notification');
  logger.info('  - etc.\n');

  // Summary
  logger.section('Summary');
  logger.success('Post-deployment tasks completed! ✨');

  if (deploymentUrl) {
    logger.info(`\n🌐 Your site is live at: ${deploymentUrl}\n`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  postDeploy().catch(error => {
    logger.error('Post-deployment tasks failed:', error);
    process.exit(1);
  });
}

export default postDeploy;
