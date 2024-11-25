//data types --> primitive and object
//primitive --> number, string, boolean, null, undefined, symbol

let num1 = 5             //number
let user = "Isuri"      //string
let bool = "true"       //boolean

//to find the data type
console.log(typeof num1)
console.log(typeof user)
console.log(typeof bool)

//to get hexadecimal value --> zero x and hexadecimal number
let num2 =0xff
console.log(num2)

let num3 = 1.5e12   //(1.5e12 = 1.5*10^12)
console.log(num3)

//for number with multiple zero we can use underscore
let num4 = 100_000_00_000
console.log(num4)

//we can get infinity in javascript
//infinity is a type of number
let num5 = 5/0
console.log(num5)

let num6 = -5/0
console.log(num6)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE*10)

//to get the bigger value we can use bigint
//to use bigint, add 'n' in the end of the number
let num7 = 150505050505050505050505n
console.log(num7)

//we can't perform operation between bigint and normal numbers
//to that we shoud use type conversion(normal numbers to bigint or bigint to normal numbers)
console.log(num7 + 2n)
