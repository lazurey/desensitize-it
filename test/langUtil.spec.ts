import { isLatin, isChinese, isNumber } from '../src/langUtil';

describe('Language utils', () => {
  it('should recognize a Latin character', () => {
    expect(isLatin('a')).toBeTruthy();
    expect(isLatin('Z')).toBeTruthy();
    expect(isLatin('é')).toBeTruthy();
    expect(isLatin('ñ')).toBeTruthy();
  });
  it('should tell when a char is not a Latin', () => {
    expect(isLatin('-')).toBeFalsy();
    expect(isLatin('1')).toBeFalsy();
    expect(isLatin('*')).toBeFalsy();
    expect(isLatin('凪')).toBeFalsy();
    expect(isLatin('月')).toBeFalsy();
    expect(isLatin('∂')).toBeFalsy();
  });
  it('should recognize a Chinese char', () => {
    expect(isChinese('勇')).toBeTruthy();
    expect(isChinese('敢')).toBeTruthy();
    expect(isChinese('的')).toBeTruthy();
    expect(isChinese('你')).toBeTruthy();
  });
  it('should recognize when it is not a Chinese char', () => {
    expect(isChinese('b')).toBeFalsy();
    expect(isChinese('1')).toBeFalsy();
    expect(isChinese(')')).toBeFalsy();
    expect(isChinese('…')).toBeFalsy();
  });
  it('should recognize a number', () => {
    expect(isNumber('4')).toBeTruthy();
    expect(isNumber('2')).toBeTruthy();
  });
  it('should recognize when it is not a number', () => {
    expect(isNumber('c')).toBeFalsy();
    expect(isNumber('X')).toBeFalsy();
    expect(isNumber('哈')).toBeFalsy();
    expect(isNumber('-')).toBeFalsy();
  });
});
