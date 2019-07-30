import { hash } from './hash';
import { isChinese, isLatin, isNumber } from './langUtil';
import { replaceChinese, replaceLatin, replaceNumber, replaceSymbol } from './replaceChar';

export const replaceWord = (originalWord: string): string => {
  const charArr = originalWord.split('');
  const wordHash = Math.abs(hash(originalWord));
  return charArr.map((char: string, idx: number) => {
    if (isNumber(char)) {
      return replaceNumber(idx, wordHash);
    } else if (isLatin(char)) {
      return replaceLatin(idx, wordHash);
    } else if (isChinese(char)) {
      return replaceChinese(idx, wordHash);
    } else {
      return replaceSymbol(idx, wordHash);
    }
  }).join('');
};
