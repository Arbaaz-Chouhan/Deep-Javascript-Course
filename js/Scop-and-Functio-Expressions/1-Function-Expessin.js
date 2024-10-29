// function declaration() { } // Function Declaration.

// const expression = function() { // Function Expression.

// }

// const anonymous = function fn() { // anonymous function expression.

// }


function declaration(a, b) {
    return a + b;
}

console.log(declaration(10, 20)); //this is declaration function


const expression = function fn(a, b) {
    return a - b;

}

console.log(expression(30, 10)); // this is expression function 


const anonymous = function (a, b) {
    return a * b;

}

console.log(anonymous(10, 10)); //this is anonymous