import { replaceNumber, replaceLatin, replaceChinese, replaceSymbol } from '../src/replaceChar';

describe('# Replace numbers', () => {
  it('should replace number with default number bank', () => {
    // hash('1943') = 1516199
    expect(replaceNumber(0, 1516199)).toBe('8');
    expect(replaceNumber(0, 1516199)).toBe('8');
    expect(replaceNumber(1, 1516199)).toBe('0');
    expect(replaceNumber(2, 1516199)).toBe('8');
    expect(replaceNumber(3, 1516199)).toBe('4');
  });
  it('should use provided bank when provided', () => {
    const numberBank = [
      '123123123',
      '321321311',
    ];
    expect(replaceNumber(3, 1516199, numberBank)).toBe('2');
  });
});

describe('# Replace Latin letters', () => {
  it('should use default bank when not provided', () => {
    //  hash('abcde') = 92599395
    expect(replaceLatin(0, 92599395)).toBe('O');
    expect(replaceLatin(1, 92599395)).toBe('p');
    expect(replaceLatin(2, 92599395)).toBe('m');
    expect(replaceLatin(3, 92599395)).toBe('j');
    expect(replaceLatin(4, 92599395)).toBe('d');
  });
  it('should use provided bank', () => {
    //  hash('abcde') = 92599395
    const latinBank = [
      'abcde',
      'cdeab',
    ];
    expect(replaceLatin(0, 92599395, latinBank)).toBe('C');
  });
});

describe('# Replace Chinese letters', () => {
  it('should use default bank when not provided', () => {
    // hash('相看两不厌') = -1010270128
    expect(replaceChinese(0, 1010270128)).toBe('一');
    expect(replaceChinese(1, 1010270128)).toBe('决');
    expect(replaceChinese(2, 1010270128)).toBe('禅');
    expect(replaceChinese(3, 1010270128)).toBe('来');
    expect(replaceChinese(4, 1010270128)).toBe('王');
  });
  it('should use provided bank', () => {
    // hash('相看两不厌') = -1010270128
    const chineseBank = [
      '长风破浪会有时',
      '直挂云帆济沧海',
    ];
    expect(replaceChinese(0, 1010270128, chineseBank)).toBe('云');
    expect(replaceChinese(1, 1010270128, chineseBank)).toBe('风');
  });
});

describe('# Replace Symbols', () => {
  it('should use default bank when not provided', () => {
    expect(replaceSymbol(0, 1010270128)).toBe('/');
    expect(replaceSymbol(1, 1010270128)).toBe('-');
  });
  it('should use provided bank', () => {
    const symbolStr = '!@#$%^&*()_+';
    expect(replaceSymbol(0, 1010270128, symbolStr)).toBe('@');
    expect(replaceSymbol(1, 1010270128, symbolStr)).toBe('!');
  });
});
