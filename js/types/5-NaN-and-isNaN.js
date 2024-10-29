// NaN & isNaN ==>
// NaN => Not a Number
// isNaN => Number ho ture Number nhi hay to false return kerta hay


let a = "Arbaaz chouhan";
let b = a++;
console.log(b); /// NaN

let c = isNaN("Arbaaz");
console.log(c); // true


console.log(isNaN("hello"));  // true
console.log(isNaN(11));  // false
console.log(isNaN("1234567"));  // false
console.log(isNaN(1234567)); // false
console.log(isNaN("12oo34567")); // true
