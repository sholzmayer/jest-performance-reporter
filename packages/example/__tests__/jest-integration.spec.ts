import { readFileSync } from 'fs';

const roundOffNearest100 = (num) => {
  return Math.floor(num / 100) * 100;
};

test('that the json report works fine', () => {
  const report = JSON.parse(readFileSync('performance-report.json').toString());

  expect(
    report.map(({ fullName, status, duration }) => ({
      fullName,
      status,
      duration: roundOffNearest100(duration),
    }))
  ).toMatchSnapshot();
});
