
// 函式陳述式(提升性)
function app(){
    return 'Hello App';
}

function square(x){
    return x * x;
}

function total(price,tax){
    return price * tax;
}
console.log(total(999,1.5));
console.log(square(24));
// 函式表達式
const test = function(){
    console.log('test');
}


