// const Big = require('big.js');

// const parse = function (jsonStr)  {
//     return JSON.parse(jsonStr, (k, v) => {
//         if(typeof v === 'number' && !Number.isSafeInteger(v)) {
//             console.log(`[${k}]  `,'v: ', v, '---- big: ', new Big(v));
//             const nv = new Big(v);
//             return nv.toString();
//         }
//         return v;
//     });
// }

// let jsonStr = '{"name":"jobin","result":true,"arr":[1,2,3,18014398509481983],"bn":18014398509481981,"num":123,"obj":{"numbr":123,"bn":18014398509481984}}'; 
// console.log(parse(jsonStr).arr);
// // console.log(parse(jsonStr).bn);
// let bn = new Big(18014398509481981);
// console.log(bn);


// module.exports = {
//     parse,
// }
const parse = require('./src/parse');

let jsonStr = '{"name":"jobin","result":true,"arr":[1,2,3,18014398509481983],"bn":18014398509481981,"num":123,"obj":{"numbr":123,"bn":18014398509481984, "arr": [4, {"a": 18014398509481984}]}}'; 

let big = parse(jsonStr, {
    type: 'string',
});

console.log('origin: ', jsonStr);
console.log('big: ', big);
console.log('deep: ', big.obj.arr);