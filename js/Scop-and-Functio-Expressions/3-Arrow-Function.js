// This is Arrow Function 
let arrowFun = (a, b) => (a * b);
console.log(arrowFun(2, 5));  // 10

// This is Arrow Function in use Array in map method
let arr = [1, 2, 3, 4, 5];
let arrowMap = arr.map(index => index * 2);
console.log(arrowMap);  // [2,4,6,8,10]