import { desensitize } from '../src';

describe('Desensitize it', () => {
  it('should desensitize a string to a stable shuffled string', () => {
    expect(desensitize('Abcdefg DDDD 123')).toBe('Uxzedfb Ezvf 035');
    expect(desensitize('Abcdefg DDDD 123')).toBe('Uxzedfb Ezvf 035');
  });
  it('should transform Dell Computer to a stable unreadable string', () => {
    expect(desensitize('Dell Computer 戴尔')).toBe('Sbpf Yczjtvuj 论忝');
    expect(desensitize('Dell Computer 戴尔')).toBe('Sbpf Yczjtvuj 论忝');
  });
  it('should handle pure Chinese string', () => {
    expect(desensitize('Hello World!')).toBe('Wvncp Najvb/');
    expect(desensitize('Please help me desensitize it!')).toBe('Nkuifd Pyqu Wm Djhtnysxdtf Wu:');
    expect(desensitize('This is a sensitive data: 3306')).toBe('Aimn Lo U Qwfoymihe Rlzg- 6431');
    expect(desensitize('这是一个敏感数据：666')).toBe('海生尽从不尽和束-476');
    expect(desensitize('碧云天，黄叶地，秋色连波，波上寒烟翠。')).toBe('九坐催*雕庙献:年九韵身+两梦学上手.');
  });
});
