export const processRawInput = (raw: any): string => {
  let rawStr;
  if (Array.isArray(raw)) {
    rawStr = raw.join();
  } else if (raw && typeof raw !== 'string') {
     rawStr = raw.toString();
  } else if (!raw) {
    rawStr = '';
  } else if (typeof raw === 'string') {
    rawStr = raw;
  } else {
    rawStr = 'to be random';
  }
  return rawStr;
};
