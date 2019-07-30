import { SPLIT_SEPARATOR } from './constant';
import { processRawInput, processWords } from './processInput';
import { replaceWord } from './replaceWord';

export const desensitize = (input: any): string => {
  const inputStr: string = processRawInput(input);
  const inputWords: string[] = processWords(inputStr);
  return inputWords.map((word: string) => {
    return replaceWord(word);
  }).join(SPLIT_SEPARATOR);
};
