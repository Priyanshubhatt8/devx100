// data types
// var a = 1;
// let a = 1;
// const a = 1; it will throw error here
// a = 2;
// console.log(a);

// let firstname = "priyanshu";
// let age = 18;;
// console.log("this person name is " + firstname + "and their age is " + age + "and priyanshu is marries?" + ismarried);

// let age = 18;
// let married = false;
// let ismarried = false
// let name = "priyanshu ";


/*
// if-elseif Statement
// if (age > 18) {
//     console.log("you can marry ")
// }
// else if (age == 18) {
//     console.log("you are adult but you have to study ")
// }
// else if (age < 18) {
//     console.log("you are small kid")
// }
// else {
//     console.log("you are not human human have age ")
// }
*/


/*
// Loops in java script
 var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function ak (element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);
*/



/*
// ARRAY
// let person1 = "priyanshu";
// let person2 = "akash";
// let person3 = "shubham";

// let personsarray = ["priyanshu", "akash", "shubham"]; //so indexing in programming language start from 0

// console.log(person1)
// console.log(personsarray[0]);//both will work same but in array it is good way of storing large amount of data

// // we can also store int in array
// let age = [19, 20, 21]
*/



/*
//Objects
var marks={
    ravi: 89,
    akash: 50,
    shubham:78
}
console.log(marks);

const objnew = new Object();
objnew.firstName = "John";
objnew.lastName = "Doe";
objnew.age = 50;
objnew.eyeColor = "blue";

// If person is an object, the following statement will not create a copy of person:
// const x = person;  // Will not create a copy of person.
// The object x is not a copy of person. It is person. Both x and person are the same object.
// Any changes to x will also change person, because x and person are the same object.
// Example

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  }

  const x = person;
  x.age = 10;      // Will change both x.age and person.age

*/


//function


//Simple function
// function clicked(){
//     console.log('The button was clicked')
// }

// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ=(a,b)=>{
//     return a+b;
// }

/*

//callback
  //a function passed as  an argument to another function

  //ensure that function is not going to run before task is compeleted
  //help us devlops asnchronous code



  function sum(x,y,call){
    let result=x+y;
    call(result);
  }


  function displayconsole(output){
    console.log(output);
  }


  sum(2,3,displayconsole)
*/

//async
// async function clicked(){
//      await console.log('The button was clicked')
// }

// in synchronous we really dont need a callback we mainly use callback in asynchrounous function 

const fs = require('fs');

async function readfilee(cb) {
  fs.readFile('readme.tdxt', 'utf-8', function (err, data) {
    cb(data)
  })

}
function ondone(data) {
  console.log(data)
}
readfilee(ondone)