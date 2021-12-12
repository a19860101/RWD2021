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


