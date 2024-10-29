// Boxing ==>

var a = new String("b");
a.name = "Adnan";
a.lastName = "chouhan";
a.age = 20;
console.log(a);    //[String : "b"] {name :Adnan, lastName : "chouhan",age : 20};
console.log(typeof (a));   // object

var b = new Number(34);
b.age = 20;
console.log(b);   //[Number : 34] {age : 20}

var a = new Boolean(true);
a.name = false;
console.log(a);   //[Boolean : true] {name : false};
