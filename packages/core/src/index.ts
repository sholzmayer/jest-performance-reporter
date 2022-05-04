import { AggregatedResult } from '@jest/test-result';
import { saveJsonReport } from './reports/json';
import { LogLevelOptions } from './reports/terminal/log';
import { extractJestReports } from './core/jest-mapping';
import { printTestResults } from './reports/terminal';

const setupAndRun = (data: {
  testData: AggregatedResult;
  options: { jsonReportPath?: string } & LogLevelOptions;
}) => {
  const { testData, options } = data;
  const { warnAfterMs, errorAfterMs, logLevel, maxItems, jsonReportPath } = options;
  const reports = extractJestReports(testData);

  printTestResults(reports, { errorAfterMs, warnAfterMs, logLevel, maxItems });
  jsonReportPath && saveJsonReport(reports, jsonReportPath);
};

export default function JestPerformanceReporter(_, options: any) {
  this.onRunComplete = (_: any, testData: AggregatedResult) =>
    setupAndRun({
      testData,
      options,
    });
}
