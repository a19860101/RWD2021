//物件

// const o = new Object();
// o.name = 'john';
// o.mail = 'asdf@gmail.com';

const o = {
    name: 'john',
    mail: 'asdf@gmail.com'
}
console.log(o);
console.log(o.name);
console.log(o.mail);

const drinks = [
    {
        name:'紅茶',
        price:30
    },
    {
        name:'綠茶',
        price:30
    },
    {
        name:'奶茶',
        price:35
    },
    {
        name:'冰淇淋紅茶',
        price:300
    },
    {
        name:'梅子綠茶',
        price:130
    }
];

// drinks.forEach(function(drink){
//     console.log(drink.price);
// })

const drink_name = drinks.map(function(drink){
    return drink.name;
})
console.log(drink_name);
const drink_price =drinks.map(function(drink){
    return drink.price;
})
console.log(drink_price);

// const drink_filter = drinks.filter(function(drink){
//     return drink.price < 100;
// });
// const cheap = drink_filter.map(function(drink){
//     return drink.name;
// })
// console.log(cheap)



const drink_ = drinks.filter(function(drink){
    return drink.name != '奶茶';
})
console.log(drink_);


const cheap = drinks.filter(function(drink){
    return drink.price < 100;
}).map(function(drink){
    return drink.name;
})
console.log(cheap);

const total = drink_price.reduce(function(a,b){
    return a + b;
})
console.log(total);

// Array.from();

//解構賦值

const {mail,name} = o;
console.log(mail,name);

drinks.forEach(function({name:n,price:p}){
    console.log(n,p)
})


const ary = ['王力宏','蜘蛛人','HELLO'];
const [ary1,,ary2] = ary;

console.log(ary1)

