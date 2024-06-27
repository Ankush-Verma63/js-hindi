let score = "33abs"

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score) // method to convert data type
console.log(typeof valueInNumber); // number
console.log( valueInNumber) /// NaN => not a number

// value of score converted into
// '33' => 33
// '33abc' => NaN
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1/any value => true; 0/"" => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)