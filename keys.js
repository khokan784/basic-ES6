const glass = {name: 'glass', color: 'black', price: 500, isClean: true}
const keys = Object.keys(glass);
// console.log(keys);
const values = Object.values(glass);
// console.log(values)
const pair = Object.entries(glass)
// console.log(pair);

// console.log(glass)
delete glass.isClean;
// console.log(glass)
const {isClean, ...shortGlass} = glass;
// console.log(shortGlass);
Object.freeze(glass);
glass.source = 'bangladesh';
console.log(glass);