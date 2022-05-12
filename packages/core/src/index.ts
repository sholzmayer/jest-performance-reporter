import { AggregatedResult, Reporter, TestContext } from '@jest/reporters';
import { extractJestReports } from './core/jest-mapping';
import { saveCsvReport } from './reports/csv';
import { saveJsonReport } from './reports/json';
import { printTestResults } from './reports/terminal';
import { LogLevelOptions } from './reports/terminal/log';

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

export default class JestPerformanceReporter implements Reporter {
  constructor(_: any, public reporterOptions: any) {}

  onRunComplete(testContexts: Set<TestContext>, results: AggregatedResult) {
    setupAndRun({
      testData: results,
      options: this.reporterOptions,
    });
  }

  onRunStart() {}

  getLastError() {}
}
