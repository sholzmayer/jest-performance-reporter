import { sum } from './calculator';

const timer = (duration: number) => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), duration));
};

describe('Calculator', () => {
  it('should sum 2+3', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it('should sum 8+0, with timeout', async () => {
    await timer(3000);
    expect(sum(8, 0)).toEqual(8);
  });
});
