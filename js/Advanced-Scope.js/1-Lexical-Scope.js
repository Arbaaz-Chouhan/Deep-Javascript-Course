// // lexical scope => innner function check the value perent function , prent function dos'n not check inner function values 
var global = 'Suzy';

function parent1() {
    var child = 'Kyle';
    inner()

    function inner() {
        var child2 = 'Simson';
        inner2()

        function inner2() {
            var child3 = 'Eina';
            console.log(`${child} ${child2} ${child3} ${global}`)
        }
    }
}
parent1(); // kyle simson Eina Suzy