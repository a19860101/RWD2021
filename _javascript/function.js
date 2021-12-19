
// 函式陳述式(提升性)
function app(){
    return 'Hello App';
}

function square(x){
    return x * x;
}
console.log(square(24));

function total(price,tax){
    return price * tax;
}
// console.log(total(999,1.5));

function q(){
    return 'qq';
    // console.log('qq');
}
console.log(q())


// 函式表達式
const test = function(){
    console.log('test');
}

// 箭頭函式

// const qqq = ()=>{
//     return 'qqq';
// }

// 只有一個參數十 小括號可省略
// const qqq = x => {
//     return x;
// }

// 當大擴號內只有return時 大擴號與return皆可省略
const qqq = x => x;


console.log(qqq(111));


