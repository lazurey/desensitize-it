import { desensitize } from '../src';

describe('Desensitize it', () => {
  it('should desensitize a string to a stable shuffled string', () => {
    expect(desensitize('Abcdefg DDDD 123')).toBe('uxzedfb ezvf 035');
    expect(desensitize('Abcdefg DDDD 123')).toBe('uxzedfb ezvf 035');
  });
  it('should transform Dell Computer to a stable unreadable string', () => {
    expect(desensitize('Dell Computer 戴尔')).toBe('sbpf yczjtvuj 论忝');
    expect(desensitize('Dell Computer 戴尔')).toBe('sbpf yczjtvuj 论忝');
  });
  it('should handle pure Chinese string', () => {
    expect(desensitize('碧云天，黄叶地，秋色连波，波上寒烟翠。')).toBe('九坐催*雕庙献:年九韵身+两梦学上手.');
    expect(desensitize('Tomorrow is another day.')).toBe('latasifv lo yjbkmjo nms-');
    expect(desensitize('Mr. Miss\'s')).toBe('oh| vpbj-j');
    expect(desensitize('13800138000')).toBe('36008096992');
    expect(desensitize('Hello World!')).toBe('wvncp najvb/');
  });
});
