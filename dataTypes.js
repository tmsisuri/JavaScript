//data types --> primitive and object
//primitive --> number, string, boolean, null, undefined, symbol

let num1 = 5             //number
let user = "Isuri"      //string

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

let num8 = 5
console.log(num8/"asj") //output is NAN(Not A Number)
console.log(typeof (num8/"asj")) //NAN is a number type

let firstNAme = "Navin"
let lastName = "Reddy"
console.log(firstNAme + " " + lastName)

//to print " in the string we can use \"  \" 
let user1 = "navin Reddy \" Telusko\""
console.log(user1)

//go to the new line
let user2 = "navin \n Reddy"
console.log(user2)
//add a tab
let user3 = "navin \t Reddy"
console.log(user3)
//add a vertical tab
let user4 = "navin \v Reddy"
console.log(user4)
//delete a character
let user5 = "navin\bReddy"
console.log(user5)

let bool1 = 5>6
console.log(bool1)
console.log(typeof bool1)

let name1 = null
console.log(name1)
console.log(typeof name1)

let name2
console.log(name2)
console.log(typeof name2)
