# mgf-generator

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Generate an MGF out of a JSON file. This package is complementary to [`mgf-parser`](https://github.com/cheminfo/mgf-parser).

## Installation

`$ npm i mgf-generator`

## Usage

```js
import { readFileSync } from 'fs';
import { join } from 'path';

import generateMGF from 'mgf-generator';

let parsedData = readFileSync(join(__dirname, './data/test.json'), 'utf8');

parsedData = JSON.parse(parsedData);

let result = generateMGF(parsedData);

// result is a string in MGF format
```

## [API Documentation](https://cheminfo.github.io/mgf-generator/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/mgf-generator.svg
[npm-url]: https://www.npmjs.com/package/mgf-generator
[ci-image]: https://github.com/cheminfo/mgf-generator/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/cheminfo/mgf-generator/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/mgf-generator.svg
[download-url]: https://www.npmjs.com/package/mgf-generator
