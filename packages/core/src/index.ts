import { AggregatedResult } from '@jest/test-result';
import { saveJsonReport } from './reports/json';
import { LogLevelOptions } from './reports/terminal/log';
import { extractJestReports } from './core/jest-mapping';
import { printTestResults } from './reports/terminal';
import { saveCsvReport } from './reports/csv';

const setupAndRun = async (data: {
  testData: AggregatedResult;
  options: { jsonReportPath?: string; csvReportPath?: string } & LogLevelOptions;
}) => {
  const { testData, options } = data;
  const { warnAfterMs, errorAfterMs, logLevel, maxItems, jsonReportPath, csvReportPath } = options;
  const reports = extractJestReports(testData);

  printTestResults(reports, { errorAfterMs, warnAfterMs, logLevel, maxItems });
  jsonReportPath && saveJsonReport(reports, jsonReportPath);
  csvReportPath && (await saveCsvReport(reports, csvReportPath));
};

export default class JestPerformanceReporter {
  constructor(_: any, public reporterOptions: any) {}

  onRunComplete(testContexts: any, results: AggregatedResult) {
    setupAndRun({
      testData: results,
      options: this.reporterOptions,
    });
  }
}
