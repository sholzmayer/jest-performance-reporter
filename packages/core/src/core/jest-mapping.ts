export const reportFileName = 'performance-report.json';

export interface Report {
  testFilePath: string;
  testResults: TestResult[];
}

export interface TestResult {
  duration: number;
  fullName: string;
}

export const extractJestReports = (testData) => {
  const { testResults } = testData;
  const nonSkippedTest = (testResult) => testResult.duration !== null;
  const nonPendingTest = (testResult) => testResult.status !== 'pending'; // skipped tests are pending

  const results = testResults.map((testResult) => ({
    testFilePath: testResult.testFilePath,
    testResults: testResult.testResults
      .filter(nonSkippedTest)
      .filter(nonPendingTest)
      .map((testResult) => ({
        duration: testResult.duration,
        fullName: testResult.fullName,
        failureDetails:
          testResult.failureDetails?.length > 0 ? testResult.failureDetails : undefined,
      })),
  }));
  return mapTestReports(results);
};

const mapTestReports = (reports: Report[]) => {
  const testResults: TestResult[] = [];

  reports.forEach((report) => {
    report.testResults.forEach((testResult) => testResults.push(testResult));
  });
  return testResults;
};
