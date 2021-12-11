import { writeFileSync } from 'fs';
import { TestResult } from '../core/jest-mapping';
export const reportFileName = 'performance-report.json';

export const saveReport = (testResults: TestResult[]) =>
  writeFileSync(reportFileName, JSON.stringify(testResults, null, 2));
