import latinArr from '../resources/latin.json';
import numberArr from '../resources/number.json';
import zhArr from '../resources/zh-cn.json';

const symbols = '-/+*:|-,.-';

export const getCoords = (idx: number, hash: number, maxRow: number, maxCol: number): { row: number, col: number } => {
  const hashStr = hash.toString();
  const row = (hashStr.length <= idx) ? (idx) : parseInt(hashStr[idx], 10);
  const col = parseInt(hashStr.substr(idx % hashStr.length, 9), 10);
  return {
    row: row % maxRow,
    col: col % maxCol,
  };
};

export const replaceNumber = (idx: number, hash: number, bank: string[] = numberArr): string => {
  const { row, col } = getCoords(idx, hash, bank.length, bank[0].length);
  return bank[row][col];
};

export const replaceLatin = (idx: number, hash: number, bank: string[] = latinArr): string => {
  const { row, col } = getCoords(idx, hash, bank.length, bank[0].length);
  return bank[row][col];
};

export const replaceChinese = (idx: number, hash: number, bank: string[] = zhArr): string => {
  const { row, col } = getCoords(idx, hash, bank.length, bank[0].length);
  return bank[row][col];
};

export const replaceSymbol = (idx: number, hash: number, bank: string = symbols): string => {
  const { row} = getCoords(idx, hash, symbols.length, symbols.length);
  return symbols[row];
};
