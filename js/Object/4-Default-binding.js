var teacher = "kyle";

function ask(question) {
    console.log(this.teacher, question)
}

function askAgain(question) {
    "use strict"
    console.log(this.teacher, question);    // not run => error this function in not available varaible teacher, teacher avilable in globale function   
}

ask("what's the non-strict-mode default?"); // kyle what's the none-strict-mode default? 

askAgain("what's the strict-mode default?")  // not run check function strickly