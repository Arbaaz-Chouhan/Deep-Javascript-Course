var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
};

myTeacher();  // kyle 
teacher = "Suzy";
myTeacher();  // When we exicute a function it checks what's the var value at the moment and the value is suzy so he returned suzy.

var name = "Arbaaz";
function Name() {
  console.log(name);
}

name = "Adnan Chouhan"
Name(); //Adnan Chouhan

// Example in let varable

let Num = 2;

function multipliction() {
  console.log(Num * 10);
}

Num = 10;  // 10
multipliction(); // 100