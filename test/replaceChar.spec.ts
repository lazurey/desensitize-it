import { replaceNumber } from '../src/replaceChar';

describe('# Replace char', () => {
  it('should replace number with provided bank', () => {
    // hash('1943') = 1516199
    expect(replaceNumber(0, 1516199)).toBe('8');
    expect(replaceNumber(0, 1516199)).toBe('8');
    expect(replaceNumber(1, 1516199)).toBe('0');
    expect(replaceNumber(2, 1516199)).toBe('8');
    expect(replaceNumber(3, 1516199)).toBe('4');
  });
});
