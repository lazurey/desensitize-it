import { processRawInput } from '../src/processInput';

describe('# Process raw input to string', () => {
  it('should return the original string if it is already a string', () => {
    expect(processRawInput('abc')).toBe('abc');
  });
  it('should handle array type input', () => {
    expect(processRawInput(['a', 'b', 'c'])).toBe('abc');
  });
  it('should handle number type input', () => {
    expect(processRawInput(123)).toBe('123');
  });
  it('should handle number type input', () => {
    expect(processRawInput(undefined)).toBe('');
  });
  it('should handle other type of input', () => {
    const toString = jest.fn();
    const obj = {
      toString,
      value: 'aaaaa',
    };
    processRawInput(obj);
    expect(toString).toHaveBeenCalledTimes(1);
  });
  it('should provide default value, when to string not available', () => {
    expect(processRawInput({
      toString: undefined,
      value: 'some value',
    })).toBe('42');
  });
});
