import { writeFileSync } from 'fs';
import { TestResult } from '../core/jest-mapping';

export const saveJsonReport = (testResults: TestResult[], fileName: string) =>
  writeFileSync(fileName, JSON.stringify(testResults, null, 2));
