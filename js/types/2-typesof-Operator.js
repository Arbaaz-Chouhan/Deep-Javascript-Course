// Primitive data type ==>
var a;
console.log(typeof(a));  // undifind

var b = "1";
console.log(typeof(b));  // string

var c = 2;
console.log(typeof(c));  // number

var d = true;
console.log(typeof(d));  //boolean

var e = {};
console.log(typeof(e));  //object

var f = Symbol();
console.log(typeof(f));  // symbol

var g = 45n;
console.log(typeof(g));  // bigint

var h = null;
console.log(typeof(h)); // object


// Non Primitive data type ==>
var i = null;
console.log(typeof(i));  // object

var j = function(){};
console.log(typeof(j));  // function

var k = [1,2,3];
console.log(typeof(k));  // object


