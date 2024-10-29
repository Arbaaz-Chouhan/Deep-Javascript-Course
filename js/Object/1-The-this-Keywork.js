var teacher = "adnan";

function ask(question) {
    console.log(this.teacher, question);  // In (this) keyword its not matter where i call it from its matter how i call it.
};

function otherClass() {
    var myContext = {
        teacher: "suzy"
    };  // Explicit Binding because of call method.
    ask.call(myContext, "Why"); // In Mycontxt there is a variable and thats gonna be add into ask function bcz i sent it in ask function using call.   
};
otherClass(); // suzy why


function fn() {
    console.log(this)
}
fn();
var a = {
    name: 'Arbaaz',
    lastname: "Chouhan",

    fun: function () {
        // console.log(this);
        console.log(this.name + ' ' + this.lastname);
    }
}
a.fun(); // Arbaaz chouhan


var student = {
    id: 1,
    name: "Arbaaz chouhan",
    subject: "B.Com",
    college: "M.U.A.J University",
    address: "5v the road",

    fu: function () {
        console.log(this);
        console.log(this.id + " " + this.name + " " + this.subject + " " + this.college + " " + this.address);
    }
};

student.fu(); // done 
