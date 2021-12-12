const drinks = [
    '紅茶',
    '綠茶',
    '奶茶',
    '冰淇淋紅茶'
];

//forEach

drinks.forEach(function(data,idx){
    console.log(data,idx);
});

// map
let drinks_map = drinks.map(function(data){
    return data === '紅茶';
})
console.log(drinks_map);
console.log(drinks);
// find
// findIndex
// filter
// reduce
