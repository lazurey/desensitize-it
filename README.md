# Desensitize it

[![Build Status](https://travis-ci.org/lazurey/desensitize-it.svg?branch=master)](https://travis-ci.org/lazurey/desensitize-it)
[![npm version](https://badge.fury.io/js/desensitize-it.svg)](https://badge.fury.io/js/desensitize-it)

Help desensitize strings to a repeatable but un-readable string.

Better used for **non-confidential** case.

## Examples

```javascript
expect(desensitize('Hello World!')).toBe('Wvncp Najvb/');
expect(desensitize('Please help me desensitize it!')).toBe('Nkuifd Pyqu Wm Djhtnysxdtf Wu:');
expect(desensitize('This is a sensitive data: 3306')).toBe('Aimn Lo U Qwfoymihe Rlzg- 6431');
expect(desensitize('这是一个敏感数据：666')).toBe('海生尽从不尽和束-476');
expect(desensitize('碧云天，黄叶地，秋色连波，波上寒烟翠。')).toBe('九坐催*雕庙献:年九韵身+两梦学上手.');
```

## How to use

```typescript
import { desensitize } from 'desensitize-it';

desensitize('A string to be desensitized');
```
