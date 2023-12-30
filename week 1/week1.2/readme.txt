Week 1.2
Javascript foundation
---------
Topics  |
---------
----------------------------------------------------------------------------------------
1 - Why languages?                                                                     |
2 - Interpreted vs compile languages                                                   |
3 - why js is >> other languages in some case                                          |
4 - strict vs dynamic languages                                                        |
5 - single threaded nature of js                                                       |
6 - simple primitives of js (number,strring boolean)                                   |
7 - complex primitives of js (array ,objects )                                         |
8 - functions in Javascript                                                            |
9 - practice problem solving                                                           |
10 - callback functions, event loop ,callback queue ,asynchronous programming          |
11 - callback hell and promises                                                        |
----------------------------------------------------------------------------------------

======================================================================================================================================================================================
======================================================================================================================================================================================
1- Why languages?

There are so many languages like c cpp python java Javascript and more
computer have ram and ssd 

Ram is used When You run application or performing task.
SSD/HDD is used to store application ,file,Document,etc.

what are these?
whenever we have application localy like vlc player or whats app any application that we are Stored on our machine resides inside SSD/Hdd 
but when we run something like movie like zoom meeting then it is reside in RAM

there are so many languages like c cpp python java Javascript and more
computer have ram and ssd 

what are these?
whenever we have application locally like vlc player or whats app any application that we are Storing on our machine resides inside ssd/hdd
and ssd is of 500 gb or 1 tb but when we run something like movie like zoom meeting then it is reside in RAM 
and if something is not currently running then it will present in SSD 
what exactly going into ram or ssd ssd and ram is hardware at very lowest level our machine only understand 01 so inside our ram only understand 01 
so ram or ssd also cannot understand programming language after running programm only 01 will go inside ram 
using compiler we translate high level language to low level language so high level language is that human can understand or read and low level language is that our computer understand 
so to convert high level to low level compiler convert hll to lll 
thats why we need language because humans cant write code in 01 and understand so we use programming language to write logics and then compiler convert that logic into binary code (0,1)
so that our system can understand 
-======================================================================================================================================================================================
But why are there so many languages?

because some things can only be done in specific languages  
people have various optimization some use case can only be build in certain language 
example for website html js css 
languages are used to write applications 
=========================================================================================================================================================================================

=========================================================================================================================================================================================
2-Interpreted vs compile languages?

Compiled languages   
1 first need to compile then need to run 
2 usually dont compile if there is an error in the code 
3 example - cpp, java ,rust ,golang 


interpreted lamguages
1 usually go line by line 
2 can run partially if the error comes later 
3 example javascript, python 

-======================================================================================================================================================================================
3- Why js is better then other languages?

browsers can only understand Html/css/javascript(Not technically true)we can use cpp python but most primary language is js 
thanks to node js ,javascript can also be used for "backend development"
=======================================================================================================================================================================================

4- Static vs dynamix lamguages?

cpp
#include<iostream>
using namespace std;
int main(){
    int number=5; //here we have assigned number to a variable 
    number="hello";//but here we are assigned that variable a string so it will give error because it is static type language
    cout<<number;
    return 0;
}
=======================================================================================================================================================================================

javascript

let number=5; //variable initally hold number 
number="hello";//variable now hold a string 
console.log(number);//output hello  here it will not give error because it is dynamic type languague 

=======================================================================================================================================================================================

5- Single threaded nature of js ?

multi threaded language example = cpp, java, rust 

but what does thread means what does single thread and multi thread is ?
when ever we buy new machine we look at the specifications cores  what are these core core means 1 single core can run certain code at a single time which basically means 
if i have a javascript file that javascript file is running on one sort of core  and if i start another javascript file that can run on another core a single core cant run 
two things at a same time the more the number of cores we have the more the number of processec we can run 

single threaded nature of javascript means 
this lamguage javascript is always restricted to a single core if we have 10 lines of code they will always run one after the another you can never splits your programming of sort 
into like two different cores so that you can decrease the time that it takes for a program to run by a half other language like cpp java lets you split your load across cores somehow 
and that way your process become more optimal javascript is single thread which means it will only use one core of your machine at a time this is why it is consider to be bad language 
for scalable system there is a way to make it use all cores of your machine (with cluster module )
more practically js runs line by line and only one line runs at a time 
========================================================================================================================================================================================

6 -Simple primitives of javascript (Number,string,boolean)?

variable(let, var,const)
datatypes- strings,number, and boolean 
conditional- if/else
loops-for loop
These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods.

variable ->  there are three ways to define variables in javascript (Let,var,const)
const means you cannon change value after assigned
we only use let or const var is not prefered 
const is introduce for safe value define

=================================================================================================================================================================================
datatypes ->data type is a which type of variable we are storing like int string boolean array object thats all 
=================================================================================================================================================================================

==================================================================================================================================================================================
if else statement -->Conditional statements are used to perform different actions based on different conditions.
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
===================================================================================================================================================================================

loops - for loop 
Loops are handy, if you want to run the same code over and over again, each time with a different value.
for(let i=0;i<10;i++){
    console.log(i)
}syntax of for loop 
====================================================================================================================================================================================

7- complex primitives data types
1: Arrays
2: object 

array is use to store same type of data array is basically a datatypes which store the collection like i want to store age of 100 people 
if i do it like 
defining variable for every person then the code will become lenghty and poor instead of doing this i can use array array will store the 100 people age
without defining variable again and again 
===================================================================================================================================================================================
*practice question on array 
1-write a program that prints all the even number in array 
2-write a program to print biggest number in array 
3-write a program that prints all the male peoples first name given a complex object 
4-write a program that reverse all the elements of an array 
====================================================================================================================================================================================
objects
JavaScript variables can also contain many values.
Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).
It is a common practice to declare objects with the const keyword.

Object Methods
Methods are actions that can be performed on objects.
Object properties can be both primitive values, other objects, and functions.
An object method is an object property containing a function definition.


we can define objects in many ways

1st way                 
========================= 
const person = {        |  
  firstName: "John",    |
  lastName: "Doe",      |
  age: 50,              |
  eyeColor: "blue"      |
};                      |
=========================


2nd way 
============================
const person = {};         |
person.firstName = "John"; |
person.lastName = "Doe";   |
person.age = 50;           |
person.eyeColor = "blue";  |
============================

3rd way
=============================
const person = new Object();|
person.firstName = "John";  |
person.lastName = "Doe";    |
person.age = 50;            |
person.eyeColor = "blue";   |
=============================

4th way
============================================================================
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};|
============================================================================
======================================================================================================
JavaScript Objects are Mutable                                                                       |
Objects are mutable: They are addressed by reference, not by value.                                  |
If person is an object, the following statement will not create a copy of person:                    |
const x = person;  // Will not create a copy of person.                                              |
The object x is not a copy of person. It is person. Both x and person are the same object.           |
Any changes to x will also change person, because x and person are the same object.                  |
Example                                                                                              |
const person = {                                                                                     |
  firstName:"John",                                                                                  |
  lastName:"Doe",                                                                                    |
  age:50, eyeColor:"blue"
}                                                                                                    |

const x = person;
x.age = 10;      // Will change both x.age and person.age
=========================================================================================================

=========================================================================================================
8- functions in javascript 
1 abstract out logic in your program
2 take argument as input 
3 return a value as an output
4 you can think of them as an independent program that is supposed to do something 
  given an input 
5 function can take other functions as input -this will confuse you (callback )

==============================================================================================================
practice question on functions?
1 write a function that find the sum of two numbers ?
2 write another function that display result in preety format ?
3 write another funciton that takes this sum and prints it in passive tense?
===================================================================================================================
more about funcutiion?
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

syntax of a funciton
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:
When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)


Function Return
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":

Why Functions?
With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.

===================================================================================================================================================================================

10 - callback functions, event loop ,callback queue ,asynchronous programming?

callback function  is basically when we pass function as argument to another function
callback example 
function sum(num1, num2, callbackfunc) {
    const sum = num1 + num2;
    
}

function displayresult(data) {
    console.log("The sum is ", data)
}

sum(1, 4, displayresult)

here we have a function sum and inside that function we have parameter num1 and num2 and a callbackfunc

and we have another function which is displayresult and inside that we have parameter data 

and we are calling sum(1,4,displayresult) so what will happen here when we call sum 1 will go to num1 and 2 4 will go to num2 and displayresult which is a function will also 
be passed as a argument in sum funciton so this is callback function we are passing a function inside a function and it will print result of 1 and 3

example

function arithmeticop(a, b, callback) {
    const ans = callback(a, b);
    return ans
}

function sum(a, b) {
    const ans = a + b;
    return ans;

}


const ansers = arithmeticop(30, 50, sum)
console.log(ansers) 



funciton greet(){
  console.log("hi guys welcome ");
}
setTimeout is a function which is provided by javascript like setTimeout(greet,1000);
so what will happen here our greet function which is passout to setTimeout function as an argument what will happen our function will run after 1second we can also increase the time 
so we are passing function as an argument into settimeout function so this is callback 

in setInterval function it prints everytime after 1 seconds

function greet(){
  console.log("hi boys my name is priyanshu bhatt ")
}
setInterval(greet,2000)
here it will print greet after every 2 second 
==================================================================================================================================================================================


================