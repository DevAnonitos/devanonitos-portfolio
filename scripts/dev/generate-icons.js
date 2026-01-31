/**
 * Generate favicon and app icons
 * Creates various icon sizes from a source image
 */

import { logger } from '../utils/logger.js';
import { paths } from '../utils/config.js';
import { existsSync } from 'fs';

async function generateIcons() {
  logger.header('🎨 Icon Generation');

  const sourceIcon = `${paths.public}/icon-source.png`;

  // Check if source icon exists
  if (!existsSync(sourceIcon)) {
    logger.error('Source icon not found!');
    logger.info('Please create: public/icon-source.png');
    logger.info('Recommended size: 512x512 or larger\n');
    process.exit(1);
  }

  logger.warn('Icon generation requires additional dependencies.');
  logger.info('\nOptions:');
  logger.info('  1. Use online tools:');
  logger.info('     - https://realfavicongenerator.net/');
  logger.info('     - https://favicon.io/');
  logger.info('');
  logger.info('  2. Install sharp for automated generation:');
  logger.info('     npm install --save-dev sharp');
  logger.info('');
  logger.info('  3. Manually create icons in public/:');
  logger.info('     - favicon.ico (16x16, 32x32, 48x48)');
  logger.info('     - apple-touch-icon.png (180x180)');
  logger.info('     - icon-192.png (192x192)');
  logger.info('     - icon-512.png (512x512)');
  logger.info('');

  // Check if sharp is available
  try {
    const sharp = await import('sharp');
    logger.success('Sharp is available! Generating icons...\n');

    const sizes = [
      { name: 'favicon-16x16.png', size: 16 },
      { name: 'favicon-32x32.png', size: 32 },
      { name: 'apple-touch-icon.png', size: 180 },
      { name: 'icon-192.png', size: 192 },
      { name: 'icon-512.png', size: 512 },
    ];

    for (const { name, size } of sizes) {
      const outputPath = `${paths.public}/${name}`;
      await sharp.default(sourceIcon)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      logger.success(`Generated ${name} (${size}x${size})`);
    }

    logger.info('\nDon\'t forget to update your metadata in app/layout.tsx!\n');
  } catch (error) {
    logger.warn('Sharp is not installed. Using manual approach.\n');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateIcons().catch(error => {
    logger.error('Icon generation failed:', error);
    process.exit(1);
  });
}

export default generateIcons;
