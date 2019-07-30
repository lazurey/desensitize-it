import { SPLIT_SEPARATOR } from './constant';

export const processRawInput = (raw: any): string => {
  let rawStr;
  if (Array.isArray(raw)) {
    rawStr = raw.join('');
  } else if (!raw) {
    rawStr = '';
  } else if (typeof raw === 'string') {
    rawStr = raw;
  } else {
    rawStr = (typeof raw.toString === 'function')
      ? raw.toString()
      : '42';
  }
  return rawStr;
};

export const processWords = (rawStr: string): string[] => {
  return rawStr.replace(/\s+/g, ' ').split(SPLIT_SEPARATOR);
};
