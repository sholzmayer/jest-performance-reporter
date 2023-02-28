import { writeFileSync } from 'fs';
import { ensureDirectory } from '../core/ensure-directory';
import { TestResult } from '../core/jest-mapping';

export const saveJsonReport = (testResults: TestResult[], fileName: string) => {
  ensureDirectory(fileName);
  writeFileSync(fileName, JSON.stringify(testResults, null, 2));
};
