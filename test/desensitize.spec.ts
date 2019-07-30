import { desensitize } from '../src/index';

describe('Desensitize it', () => {
  it('should desensitize a string to a stable shuffled string', () => {
    expect(desensitize('Abcdefg DDDD 123')).toBe('uxzedfb ezvf 035');
    expect(desensitize('Abcdefg DDDD 123')).toBe('uxzedfb ezvf 035');
  });
  it('should transform Dell Computer to a stable unreadable string', () => {
    expect(desensitize('Dell Computer 戴尔')).toBe('sbpf yczjtvuj 天依');
    expect(desensitize('Dell Computer 戴尔')).toBe('sbpf yczjtvuj 天依');
  });
});
