var workshop = {
    teacher: 'Kyle',
    ask(question) {
        setTimeout(() => { // An arrow function does not define this keyword at all.
            console.log(this.teacher, question) // When the arrow function is invoked in (this) keyword it will be refers to that own object workshop. It will be go lexically and set the this keyword in ask function as a parameter.
        }, 3000);
    },
};

workshop.ask('This is working'); // kyle This is working

// The (This) keyword it wiil go up one level to reslove the this.

var workshop2 = {
    teacher: 'Suzy',
    ask: (question) => {
        console.log(this.teacher, question)
    },
};

workshop2.ask('It is Does Not Working'); // not run

let workshop3 = {
    name: "Adnan-chohan",
    ask(question) {
        setTimeout(() => {
            console.log(question, this.name);
        }, 5000)
    },
}

workshop3.ask("who is this"); // who is this Adnan-chouhan


