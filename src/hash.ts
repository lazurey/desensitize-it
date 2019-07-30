/* tslint:disable */
export const hash = (word: string): number => {
  let h = 0;
  let i = 0;
  let chr;
  for (i = 0; i < word.length; i++) {
    chr = word.charCodeAt(i);
    h = ((h << 5) - h) + chr;
    h |= 0;
  }
  return h;
};
