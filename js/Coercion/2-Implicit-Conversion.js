// Exmple 1 : Impilicit Conversion to String 
// numeric string used with + gives string type

let result;
result = "3" + 1;
console.log(result);

result = "3" + true;
console.log(result);


result = "3" + undefined;
console.log(result);


// Example 2: Implicit Conversion to Number
// numeric string used with - , / , * results number type
let res;
res = "4" + "4";
console.log(res);  // 44
console.log(typeof (res));

res = '4' * '2';
console.log(res); // 8
console.log(typeof (res));

res = '4' - 2;
console.log(res); // 2
console.log(typeof (res));

res = '4' * 2;
console.log(res); // 8

res = '4' / 2;
console.log(res); // 2


// Example 3: Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

let re;

re = 'hello' - 'world';
console.log(re); // NaN

re = '4' - 'hello';
console.log(re); // NaN


// // Example 4: Implicit Boolean Conversion to Number
// // if boolean is used, true is 1, false is 0

let bool;

bool = '4' - true;
console.log(bool); // 3

bool = 4 + true;
console.log(bool); // 5

bool = 4 + false;
console.log(bool); // 4


// Example 5: null Conversion to Number
// null is 0 when used with number
let nl;

nl = 4 + null;
console.log(nl);  // 4

nl = 4 - null;
console.log(nl);  // 4


// Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

let un;

un = 4 + undefined;
console.log(un);  // NaN

un = 4 - undefined;
console.log(un);  // NaN

un = true + undefined;
console.log(un);  // NaN

un = null + undefined;
console.log(un);  // NaN

un = 4 + null;
console.log(un);  // 4

un = null + null;
console.log(un);  // 0



