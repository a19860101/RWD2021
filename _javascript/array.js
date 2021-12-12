// const a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banane';
// a[2] = 'Cat';
// const a = new Array('Apple','Banane','Cat');
const a = ['Apple','Banane','Cat','Dog','Egg','Fork'];
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// console.log(a.length);

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
//for...in
// for(let data in a){
//     console.log(a[data])
// }

//for...of
// for(let data of a){
//     console.log(data);
// }

a.push('test');
a.pop();
a.unshift('first');
a.shift();

// 陣列->字串
// console.log(a.toString());
// console.log(a.join('__'));

//字串->陣列
//split()
let s = 'hello,hello__world__javascript!!!';
console.log(s.split('__'));

//splice() 拼接 會改變原始陣列
// 通常用在刪除陣列資料
// a.splice(2,1,'test','test2','test3');
// a.splice(4,1);
// console.log(a);

//slice() 切片 不會改變原始陣列
// 通常用在資料分頁
let a_slice = a.slice(1,3);
console.log(a_slice);




