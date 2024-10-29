//Global-Scope

var a = "Name";
function fn() {
    var b = 'Adnan';
    console.log(a);
    console.log(b);
}
fn();

// Module-Scope

{
    let a = "Arbaaz";
    console.log(a);
}

// Block-scope

function myFunction() {
    if (true) {
        let x = 10; // x block scope mein hai
        console.log(x); // yeh sahi tareeke se kaam karega
    }
    console.log(x); // yeh error dega, kyun ki x block scope ke bahar hai
}



// // Function-Scope

function fn() {
    var a = 'Chouhan';
    console.log(a);
}
fn();

// // Laxical-Scope

var m = 'Arbaaz ';
function fn() {
    var k = 'is '
    fn1()
    function fn1() {
        var t = 'good '
        fn4()
        function fn4() {
            var l = 'boy'

            console.log(m + k + t + l)
        }
    }
}
fn()