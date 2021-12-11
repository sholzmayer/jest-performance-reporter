const chalk = require('chalk');

const log = console.log;

const boldInverse = chalk.bold.inverse;

export const logSuccess = (message: string, ...messages: string[]) =>
  log(boldInverse.green(message), ...messages);
export const logWarn = (message: string, ...messages: string[]) =>
  log(boldInverse.yellow(message), ...messages);
export const logError = (message: string, ...messages: string[]) =>
  log(boldInverse.red(message), ...messages);

type LogLevel = 'success' | 'warn' | 'error';

export interface LogLevelOptions {
  logLevel: LogLevel;
  errorAfterMs: number;
  warnAfterMs: number;
  maxItems: number;
}

export const detectLogType = (duration: number, options: LogLevelOptions): LogLevel => {
  const { errorAfterMs, warnAfterMs } = options;
  if (duration > errorAfterMs) {
    return 'error';
  }
  if (duration > warnAfterMs) {
    return 'warn';
  }
  return 'success';
};
