export const isLatin = (char: string): boolean => /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/.test(char);

export const isChinese = (char: string): boolean => /[\u4e00-\u9fa5]/.test(char);

export const isNumber = (char: string): boolean => /\d/.test(char);
