function ask(question) {
    console.log(this.teacher, question)
}
const obj = new ask('What is new `doing` here');

// The new keyword even can invoke a function with a new empty object.
// The new keyord links that object to another object.

var a = new Object();
a.firtName = "Adnan"
a.lastName = "Chouhan"
a.fn = function () {
    console.log(this.firtName + ' ' + this.lastName)
}
a.fn();


function Person(name, age) {
    // 'this' points to the newly created empty object
    this.name = name;
    this.age = age;
    // console.log(this.name,age); // John 25
}
// Using 'new' keyword to create a new object and link it to the Person constructor
var person1 = new Person("John", 25);

console.log(person1.name); // Output: John
console.log(person1.age);  // Output: 25