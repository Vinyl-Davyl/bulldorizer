# bulldorizer

> 🚜 Powerful array manipulation utility for splitting, compacting, and doubling arrays.

[![Build Status](https://api.travis-ci.com/vinyl-davyl/bulldorizer.svg?token=your-travis-token&branch=master)](https://travis-ci.com/vinyl-davyl/bulldorizer) [![npm version](https://badge.fury.io/js/bulldorizer.svg)](https://badge.fury.io/js/bulldorizer) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/vinyl-davyl/bulldorizer/blob/master/LICENSE)

## Install

```sh
$ npm install --save bulldorizer
```

## Usage

```js
import { __chunk, __compact, __doubles } from "bulldorizer";
```

### API

#### Signature: `__chunk(array, size)`

**Params**

- `array` **{Array}**: The array to process.
- `size` **{number}**: The length of each chunk.

**Returns**

- **{Array}**: Returns the new array of chunks.

```js
const arr = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "melon",
  "strawberry",
  "peach",
  "plum",
  "pear",
];

const result = __chunk(arr, 2);
// result: [['apple', 'banana'], [ 'orange', 'grape'], ['kiwi', 'melon'], ['strawberry', 'peach'], ['plum', 'pear']]

const result = __chunk(arr, 3);
// result: [['apple', 'banana', 'orange'], ['grape', 'kiwi', 'melon'], ['strawberry', 'peach', 'plum'], ['pear']]

const result = __chunk(arr, 4);
// result: [['apple', 'banana', 'orange', 'grape'], ['kiwi', 'melon', 'strawberry', 'peach'], ['plum', 'pear']]
```

#### Signature: `__compact(array)`

**Params**

- `array` **{Array}**: The array to compact.

**Returns**

- **{Array}**: Returns the new array of filtered values.

```js
const arr = [1, 3, 0, false, 2, "", 4, undefined, 5, NaN];

const result = __compact(arr);
//result: [1, 3, 2, 4, 5]
```

#### Signature: `__doubles(array)`

**Params**

- `array` **{Array}**: The array of numbers to double.

**Returns**

- **{Array}**: Returns the new array with each number doubled.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = __doubles(arr);
//result: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

## Contributing

We welcome contributions from the community! Please follow these guidelines when contributing to bulldorizer:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Write tests to cover your changes.
4. Make your changes, ensuring the tests pass.
5. Push your changes to your fork and submit a pull request.

Thank you for contributing to bulldorizer!

## License

MIT © [Vinyl Davyl](https://github.com/Vinyl-Davyl)

## About

This package is created and maintained by [Vinyl-Davyl](https://github.com/Vinyl-Davyl). We aim to provide powerful and efficient array manipulation utilities for JavaScript developers. If you have any questions or feedback, feel free to reach out to us on [GitHub](https://github.com/Vinyl-Davyl) or [Twitter](https://x.com/Vinylchi).

---
