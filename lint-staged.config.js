const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  // Lint & Format JS/TS files
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],

  // Type check TS files (Full project check due to tsc limitations with staged files)
  '**/*.ts?(x)': () => 'tsc --noEmit',

  // Format non-code files
  '*.{css,scss,json,md,html}': ['prettier --write'],
}
