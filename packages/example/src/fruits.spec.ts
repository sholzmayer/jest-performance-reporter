import { someFruits } from './fruits';

const timer = (duration: number) => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), duration));
};

describe('Fruits', () => {
  it('should have a raspberry', () => {
    expect(someFruits().some((fruit) => fruit === 'raspberry')).toBeTruthy();
  });

  it('should have an apple', async () => {
    await timer(500);
    expect(someFruits().some((fruit) => fruit === 'apple')).toBeTruthy();
  });
});

it('should have a raspberry without describe', () => {
  expect(someFruits().some((fruit) => fruit === 'raspberry')).toBeTruthy();
});
