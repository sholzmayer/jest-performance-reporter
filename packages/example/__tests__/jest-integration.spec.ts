import { createReadStream, readFileSync } from 'fs';
import csv from 'csv-parser';
import { doesNotMatch } from 'assert';

const roundOffNearest100 = (num) => {
  return Math.floor(num / 100) * 100;
};

test('that the json report works', () => {
  const report = JSON.parse(readFileSync('performance-report.json').toString());

  expect(
    report.map(({ fullName, status, duration }) => ({
      fullName,
      status,
      duration: roundOffNearest100(duration),
    }))
  ).toMatchSnapshot();
});

test('that the csv report works', (done) => {
  const rows = [];
  createReadStream('performance-report.csv')
    .pipe(csv())
    .on('data', (row) => {
      rows.push({ ...row, DURATION: roundOffNearest100(row.DURATION) });
    })
    .on('end', () => {
      expect(rows).toMatchSnapshot();
      done();
    });
});
