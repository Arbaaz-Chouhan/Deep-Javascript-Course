// IIFE is an expression. (IMMEDIATE INVOKED FUNCTION EXPRESSIION), When we need Immediately a scope or function expression we can be used IIFE.

(function () { // It's an function expression bcz he starting with the parent hes is not with function keyword.
    console.log('This is initial str');
})();

// Another instance.

var teacher = 'Kyle';
(function anotherTeacher() {
    var teacher = 'suzy';
    console.log(teacher)
})();  // suzy

// with unary operator.

const IIFEfunc = -function (a, b) {
    return a;
}(5);
console.log(IIFEfunc); //-5

const IIFEfunc2 = !function (a, b) {
    return a;
}(5);
console.log(IIFEfunc); -5

console.log(+true)    // 1
console.log(+false)   // 0
console.log(-null)    // -0
console.log(-[undefined])  // -0

// Also we can use try and catch for error handeling. 

var teacher;
try {
    teacher = fetchTeacher(1);
}
catch (err) {
    teacher = 'jemes'
}
console.log(teacher)  // jemes

// IIFE with try and catch

var teacher = (function getTeacher(a) {
    try {
        return fetchTeacher(1);


    }
    catch (err) {

        return `Sams ${a}`
    }
})(5);
console.log(teacher); // smas 5

(function () {
    console.log('my name is Adnan chouhan')
})(); // anonymous function expression



var teacher = 'Kyle';
(function anotherTeacher() {
    var teacher = 'suzy';
    console.log(teacher)
})();  // anonymous name function expression
