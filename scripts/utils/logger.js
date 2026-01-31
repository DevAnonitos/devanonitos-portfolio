/**
 * Logger utility for scripts
 * Provides colored console output for better readability
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',

  // Foreground colors
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  // Background colors
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
};

class Logger {
  constructor(prefix = '') {
    this.prefix = prefix;
  }

  _log(color, icon, message, ...args) {
    const timestamp = new Date().toLocaleTimeString();
    const prefixStr = this.prefix ? `[${this.prefix}] ` : '';
    console.log(
      `${colors.dim}${timestamp}${colors.reset} ${color}${icon}${colors.reset} ${prefixStr}${message}`,
      ...args
    );
  }

  info(message, ...args) {
    this._log(colors.blue, 'ℹ', message, ...args);
  }

  success(message, ...args) {
    this._log(colors.green, '✓', message, ...args);
  }

  warn(message, ...args) {
    this._log(colors.yellow, '⚠', message, ...args);
  }

  error(message, ...args) {
    this._log(colors.red, '✖', message, ...args);
  }

  debug(message, ...args) {
    this._log(colors.magenta, '●', message, ...args);
  }

  start(message, ...args) {
    this._log(colors.cyan, '▶', message, ...args);
  }

  header(message) {
    console.log('\n' + colors.bright + colors.cyan + '═'.repeat(60) + colors.reset);
    console.log(colors.bright + colors.cyan + message + colors.reset);
    console.log(colors.bright + colors.cyan + '═'.repeat(60) + colors.reset + '\n');
  }

  section(message) {
    console.log('\n' + colors.bright + message + colors.reset);
    console.log(colors.dim + '─'.repeat(40) + colors.reset);
  }
}

// Export singleton instance
export const logger = new Logger();

// Export class for custom instances
export default Logger;
