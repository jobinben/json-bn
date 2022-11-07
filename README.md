<div style="display:flex; flex-direction: row; align-items: center;">
    <a href="https://imgse.com/i/xEHmSU"><img src="https://s1.ax1x.com/2022/09/25/xEHmSU.png" alt="xEHmSU.png" border="0" /></a>
    <strong style="font-size:36px; margin-left:20px;">json-bn</strong>
</div>


[![Build Status](https://www.travis-ci.com/jobinben/json-bn.svg?branch=main)](https://www.travis-ci.com/jobinben/json-bn) ![npm](https://img.shields.io/npm/v/json-bn?color=1&logo=json-bn) ![NPM](https://img.shields.io/npm/l/json-bn) ![npm](https://img.shields.io/npm/dm/json-bn)

json-bn is a library to solve the problem of big number double precision loss when parsing JSON string. It can also convert big numbers to the type you want according to your configuration, such as bigint, string, etc.

While most JSON parsers assume numeric values have same precision restrictions as IEEE 754 double, JSON specification _does not_ say anything about number precision. 

Install
```
npm i json-bn
```

ESM: 
```
node >= 13.2.0 // Because node supports EMS import after version 13.2.0 
```

CJS:
```
node >= 0
```

example 1:

```js
const { parse } = require('json-bn');

const jsonStr = '{"bn":18014398509481981,"small":123,"deci":1234567890.0123456}';

console.log('Input:', jsonStr);

console.log('origin JSON.parse:');
const origin = JSON.parse(jsonStr);
console.log('JSON.parse(jsonStr).bn : ', origin.bn.toString());


console.log('\n\nuse json-bn parse:');
const jsonBn = parse(jsonStr);
console.log('parse(jsonStr).bn : ', jsonBn.bn.toString());
```

Output:

```
Input: {"bn":18014398509481981,"small":123,"deci":1234567890.0123456}
origin JSON.parse:
JSON.parse(jsonStr).bn :  18014398509481980


use json-bn parse:
parse(jsonStr).bn :  18014398509481981
```

example 2:
```js
const { parse } = require('json-bn');

const jsonStr = '{"bn":18014398509481981,"small":123,"deci":1234567890.0123456}';

console.log('Input:', jsonStr);

console.log('\nuse json-bn parse:');
const jsonBn = parse(jsonStr, {
    useType: 'bigint', // Three types are support: 'string', 'bigint', 'array';
});
console.log('parse(jsonStr).bn : ', jsonBn.bn);
console.log('parse(jsonStr).bn.toString() : ', jsonBn.bn.toString());
```

output:
```
Input: {"bn":18014398509481981,"small":123,"deci":1234567890.0123456}

use json-bn parse:
parse(jsonStr).bn :  18014398509481981n
parse(jsonStr).bn.toString() :  18014398509481981
```

example 3: `ESM is supported, but the node version must be above 13.2.0`
```js
import { parse } from 'json-bn';

const jsonStr = '{"bn":18014398509481981,"small":123,"deci":1234567890.0123456}';

console.log('Running node version: ', process.version);
console.log('Input:', jsonStr);

console.log('\nuse json-bn parse:');
const jsonBn = parse(jsonStr, {
    useType: 'string', // Three types are support: 'string', 'bigint', 'array';
});
console.log('parse(jsonStr).bn : ', jsonBn.bn);

```

output:
```
Running node version:  v14.18.3
Input: {"bn":18014398509481981,"small":123,"deci":1234567890.0123456}

use json-bn parse:
parse(jsonStr).bn :  18014398509481981
```
