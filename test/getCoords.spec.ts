import { getCoords } from '../src/replaceChar';

describe('# Generate coordinates', () => {
  it('should generate a coordinate by given idx, hash, max col and row', () => {
    // hash('相看两不厌') = -1010270128
    const result = {
      row: 2,
      col: 14,
    };
    expect(getCoords(4, 1010270128, 10, 26)).toEqual(result);
    expect(getCoords(4, 1010270128, 10, 26)).toEqual(result);
  });
});
