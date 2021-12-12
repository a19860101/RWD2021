// 運算子

// 算術運算子
let x = 10;
let y = 6;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

// 比較運算子
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);//值與資料型態皆須相同
console.log(x != y);

let a = 'asdf';
let b = '10';
console.log(a == b);
console.log(a === b);

// 指定運算子
console.log(x = y);
console.log(x += y); // x = x + y
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x);

// 邏輯運算子
// AND OR NOT
// && || !

// 三元運算子

// let result = a > 0 ? 'success':'error';
let result = a > 0 ? '正數':a < 0 ? '負數':'error';

console.log(result);