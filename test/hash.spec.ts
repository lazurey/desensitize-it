import { hash } from '../src/hash';

describe('# Hash string', () => {
  it('should hash a string to a stable one, repeatable', () => {
    expect(hash('abcde')).toBe(92599395);
    expect(hash('abcde')).toBe(92599395);
    expect(hash('abcde')).toBe(92599395);
    expect(hash('相看两不厌')).toBe(-1010270128);
    expect(hash('相看两不厌')).toBe(-1010270128);
    expect(hash('相看两不厌')).toBe(-1010270128);
    expect(hash('Starbucks')).toBe(-140972890);
    expect(hash('Starbucks')).toBe(-140972890);
    expect(hash('Starbucks')).toBe(-140972890);
    expect(hash('1943')).toBe(1516199);
    expect(hash('1943')).toBe(1516199);
    expect(hash('1943')).toBe(1516199);
    expect(hash('Kids-123')).toBe(-764095758);
    expect(hash('Kids-123')).toBe(-764095758);
    expect(hash('Kids-123')).toBe(-764095758);
  });
});
