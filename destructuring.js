const actor = {
    name: 'khan', 
    age: 26, 
    phone: '01515226752', 
    money: 132584485
}
const {phone, age} = actor;
console.log(phone)
console.log(age)




function doubleThem(a, b){
    return [a*2, b*2];
}
const [first, second] = doubleThem(6, 9)
console.log(first, second)