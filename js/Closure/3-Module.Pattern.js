var  teacher = "kyle";

  function workSope(){

    function ask(question){
        console.log(teacher,question);
    }

    return ask;

}

let ask = workSope();
ask("It 's a module, right ?")


