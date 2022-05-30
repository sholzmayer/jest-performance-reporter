import { detectLogType, logError, LogLevelOptions, logSuccess, logWarn } from './log';
import { TestResult } from '../../core/jest-mapping';

const formator = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const formatTime = (durationInMs: number) => formator.format(durationInMs / 1000) + ' s';

export const printTestResults = (testResults: TestResult[], logOptions: LogLevelOptions) => {
  const { logLevel, maxItems = 5 } = logOptions;
  const organizedTestResults = [...testResults]
    .sort((a, b) => b.duration - a.duration)
    .slice(0, maxItems);

  if (logLevel === 'error' || logLevel === 'warn' || logLevel === 'success') {
    const slowTestResults = organizedTestResults.filter(
      (testResult) => detectLogType(testResult.duration, logOptions) === 'error'
    );
    slowTestResults.forEach((testResult) =>
      logError(` ${formatTime(testResult.duration)} `, testResult.fullName)
    );
  }

  if (logLevel === 'warn' || logLevel === 'success') {
    const mediumTestResults = organizedTestResults.filter(
      (testResult) => detectLogType(testResult.duration, logOptions) === 'warn'
    );
    mediumTestResults.forEach((testResult) =>
      logWarn(` ${formatTime(testResult.duration)} `, testResult.fullName)
    );
  }

  if (logLevel === 'success') {
    const fastTestResults = organizedTestResults.filter(
      (testResult) => detectLogType(testResult.duration, logOptions) === 'success'
    );
    fastTestResults.forEach((testResult) =>
      logSuccess(` ${formatTime(testResult.duration)} `, testResult.fullName)
    );
  }
};
