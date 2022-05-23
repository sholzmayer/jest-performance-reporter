import { AggregatedResult, Reporter, TestContext } from '@jest/reporters';
import { extractJestReports } from './core/jest-mapping';
import { saveCsvReport } from './reports/csv';
import { saveJsonReport } from './reports/json';
import { printTestResults } from './reports/terminal';
import { LogLevelOptions } from './reports/terminal/log';

const setupAndRun = async (data: {
  testData: AggregatedResult;
  options: {
    jsonReportPath?: string;
    csvReportPath?: string;
  } & LogLevelOptions;
  skipFileReport: boolean;
}) => {
  const { testData, options, skipFileReport } = data;
  const { warnAfterMs, errorAfterMs, logLevel, maxItems, jsonReportPath, csvReportPath } = options;
  const reports = extractJestReports(testData);

  printTestResults(reports, { errorAfterMs, warnAfterMs, logLevel, maxItems });
  !skipFileReport && jsonReportPath && saveJsonReport(reports, jsonReportPath);
  !skipFileReport && csvReportPath && (await saveCsvReport(reports, csvReportPath));
};

export default class JestPerformanceReporter implements Reporter {
  constructor(
    public jestOptions: { watch: boolean; watchAll: boolean },
    public reporterOptions: any
  ) {}

  onRunComplete(testContexts: Set<TestContext>, results: AggregatedResult) {
    setupAndRun({
      testData: results,
      options: this.reporterOptions,
      skipFileReport: this.jestOptions.watch || this.jestOptions.watchAll,
    });
  }

  onRunStart() {}

  getLastError() {}
}
