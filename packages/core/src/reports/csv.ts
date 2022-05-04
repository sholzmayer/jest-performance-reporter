import { TestResult } from '../core/jest-mapping';
const { createObjectCsvWriter } = require('csv-writer');

export const saveCsvReport = async (testResults: TestResult[], path: string) => {
  const csvWriter = createObjectCsvWriter({
    path,
    header: [
      { id: 'fullName', title: 'NAME' },
      { id: 'duration', title: 'DURATION' },
      { id: 'status', title: 'STATUS' },
    ],
  });

  return csvWriter.writeRecords(testResults);
};
