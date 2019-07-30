import { processWords } from '../src/processInput';

describe('Process string into words', () => {
  it('should separate a string by space', () => {
    expect(processWords('abc 123   345')).toEqual(['abc', '123', '345']);
    expect(processWords('生命因你而火热')).toEqual(['生命因你而火热']);
    expect(processWords('あの日に渡した　なぎさを　今も')).toEqual(['あの日に渡した', 'なぎさを', '今も']);
  });
});
