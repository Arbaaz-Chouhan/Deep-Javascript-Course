
function mulFn() {
    var mul = 9;
    function fn(val) {
        mul *= val;
        return mul;
    };
    return fn;
}

var mul = mulFn();
console.log(mul(13)); // Output will be 117 (9 * 13)


var mul = mulFn();
console.log(mul(13)); // function anonymous

function mulFn2() {
    var mul = 9;
    function fn(val) {
        mul = mul * val;
        return mul;
    };
    mul = 10; // Its worked bcz when we exicute the function then he will be check whats the value of var at that moment and at that moment the value is 10;
    return fn;
}

var mul2 = mulFn2();
console.log(mul2(13)); // function anonymous


function fullName(fName) {
    fName = "Arbaaz";
    function lastName(lname) {
        fName = fName + " " + lname;
        return fName;
    };
    return lastName;
}

var fullNameUser = fullName();
console.log(fullNameUser("Chouhan"));

function multiplictionNum1(num1) {
    num1 = 10;
    return function multiplictionNum2(num2) {
        num1 = num1 * num2;
        return num1;
    }
}
const multipliction = multiplictionNum1();
console.log(multipliction(10));


function fn(fullName) {
    fullName = "Arbaaz Chouhan"
    return function fn1(brother) {
        fullName = fullName + brother
        return fullName;
    };
}

const bro = fn();
console.log(bro("Arbaaz-Chouhan"));


function outerFunction() {
    let outerVar = 'I am outer';

    function innerFunction() {
        console.log(outerVar); // Inner function can access outerVar
    }

    return innerFunction;
}

var closureExample = outerFunction();
closureExample(); // Output: I am outer

