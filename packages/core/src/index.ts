import { AggregatedResult } from '@jest/test-result';
import { saveReport } from './reports/file';
import { LogLevelOptions } from './reports/terminal/log';
import { extractJestReports } from './core/jest-mapping';
import { printTestResults } from './reports/terminal';

const setupAndRun = (data: {
  testData: AggregatedResult;
  options: { createReport?: boolean } & LogLevelOptions;
}) => {
  const { testData, options } = data;
  const { warnAfterMs, errorAfterMs, logLevel, maxItems, createReport } = options;
  const reports = extractJestReports(testData);

  printTestResults(reports, { errorAfterMs, warnAfterMs, logLevel, maxItems });
  createReport && saveReport(reports);
};

export default function JestPerformanceReporter(_, options: any) {
  this.onRunComplete = (_: any, testData: AggregatedResult) =>
    setupAndRun({
      testData,
      options,
    });
}
