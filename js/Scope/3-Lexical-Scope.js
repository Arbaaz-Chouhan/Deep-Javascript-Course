var a = 'Hello guys ';
// This is lexical scope it's goes to down words to up words and inner function can be check parent function values.
//  but parent function can n't be check inner function values.

function first() {
    var b = 'How are you ';
    second();

    function second() {
        var c = 'MySelf ';
        three();

        function three() {
            var d = 'Arbaaz ';
            four();

            function four() {
                var e = 'Chouhan ';
                console.log(a + b + c + d + e)

            }
        }
    }
}
first(); // execution of function first().


var a = 'Hello'

function fn() {
    var b = 'my'
    fn1()
    function fn1() {
        var c = 'is'
        fn2()
        function fn2() {
            var d = "Arbaaz"
            fn3()
            function fn3() {
                var e = "ch"
                fn4()
                function fn4() {
                    var f = "ouhan"
                    console.log(a + " " + b + " " + c + " " + d + " " + e + f)
                }
            }
        }
    }
}
fn();


