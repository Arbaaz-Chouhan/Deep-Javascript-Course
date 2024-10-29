function ask(question) {
    console.log(this.teacher,question) // Binding Means Use a function in an object & use an object in a function.
}

var workshop1 = {
    teacher : 'Kyle',
   ask,
};

var workshop2 = {
    teacher : 'Suzy',
    ask,
};

workshop1.ask("This Is Implicit Binding") // Implicit Binding;
workshop2.ask("This Is Implicit Binding") // use logic not a pre-Define function 

ask.call(workshop1,'This is Explicit Binding') // Explicit Binding;
ask.call(workshop2,'This is Explicit Binding') // use pre-Define function


function myFunc() {
    console.log(this.name)
}

const obj = {
    name : 'Kyle',
    myFunc,
}

obj.myFunc() // Implicit Binding;


function myFunc2() {
    console.log(obj2.name)
}

const obj2 = {
    name : 'Simpson',
    myFunc2,
}

myFunc2.call(obj2); // Emplicit Binding;


function fn1(){
    console.log(obj1.name , obj1.lname)
}

const obj1 = {
    name : 'Arbaaz',
    lname : 'chouhan',
    fn1,
}
obj1.fn1(); // implicit


function fn3(){
    console.log(ex.name ,ex.lname)
}
const ex = {
    name : 'Arbaaz',
    lname : 'chouhan',
    fn3,
}
fn3.call(ex)// Explicit


function student(SchoolName){
console.log(this.name,this.subject,SchoolName);
}

const detail = {
    name : "Arbaaz-chouhan",
    subject : "BCA",
    student,
}

detail.student("Maulna Azad School"); // Implicite Binding;
student.call(detail,"Maulna Azad School"); // this is Explicite Binding;