import { ensureDirectory } from '../core/ensure-directory';
import { TestResult } from '../core/jest-mapping';
const { createObjectCsvWriter } = require('csv-writer');

export const saveCsvReport = async (testResults: TestResult[], fileName: string) => {
  ensureDirectory(fileName);
  const csvWriter = createObjectCsvWriter({
    path: fileName,
    header: [
      { id: 'fullName', title: 'NAME' },
      { id: 'duration', title: 'DURATION' },
      { id: 'status', title: 'STATUS' },
    ],
  });

  return csvWriter.writeRecords(testResults);
};
