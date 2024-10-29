"use strict"
// use strick check to function strictly  

function sum(a, b) {
  add = a + b;     // not run this code  Error => add is not defind
  console.log(add); // check the code strictly
}
sum(10, 10);


function diclaration(a, a) {   // Uncaught SyntaxError: Duplicate parameter name not allowed in this context 
  var addTwoNum = a - 20;
  console.log(addTwoNum);
}

diclaration(50, 50);