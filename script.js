//function are used to avoid the repeation of loops or statement .

//  basic example
// let a=8;
// let b=9;
// function add(){  //function defination
//   console.log(a+b);
// }
// add();//function execuation

//second example
// function addnumber(a,b){//the value the which use function recives that is.=>>>>>>> "parameter".
//     console.log(a+b);
// }
// addnumber(2,5);
// addnumber(22,5);
// addnumber(12,58);
// addnumber(3,75);// the value which we pass to variable  that is  =>>>>>>>>>>>> "arguments".

//.......................................function.....................................................

// functions are reusable in blocks of code

//if we block of code we need to be reusable then we use "function".

//to run the block of code inside the function , i need  to execute the function

// function add(a,b){
//     console.log(a+b);
// }
// add(4,5);

//........................normal function ......................................................
 //normal function are hoisted 

// function f1(){     
//     console.log("this is normal function");
// }
// f1();


//...........anonymous function...................
 //the function who does not having thier name , it assign to a variable
 //anonymous and arrow function are not hoisted
 //

// var f2 = function() {   //assign function to variable f2
//   console.log("anonymous function");
// }
// f2();

//.................................arrow function...................
 //it behav like anonymous function

//  var add = (a,b)=>{
//      return a+b;
//  }
//  console.log(add(4,6));

 // if we have only one return then not use to  this { } just write the a+b. thats call implicit function 
 //like...
//  var add = (a,b)=> a+b
//     console.log(add(4,6));

 //in case of only one parameter , the paranthesis can also remove .... like,
//  var add = a =>a*2


// ......hw.......
// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         var x = 30
//         console.log(x, 'b') //30
//     }
//     b()
//     console.log(x, 'a') //20
// }
// console.log(x, 'global') //10
// a()
//drow diagram


