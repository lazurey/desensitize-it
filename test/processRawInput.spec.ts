import { processRawInput } from '../src/processRawInput';

describe('# Process raw input to string', () => {
  it('should return the original string if it is already a string', () => {
    expect(processRawInput('abc')).toBe('abc');
  });
});
