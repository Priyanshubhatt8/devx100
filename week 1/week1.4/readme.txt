 Week-1.4 
 ====================================================================================================================================
           Topic
 1.loop
 2.function 
 3.callback           
======================================================================================================================================
Loop
In the world of programming, loops are a tool used to repeatedly execute a block of code. The repetition is controlled by a condition or a predetermined number of times.

There are three types of loops in JavaScript:

For Loop: The For loop is used for definite iteration, meaning the number of iterations is known before the loop starts. Here's an example:

for(let i=0; i<5; i++){
 console.log(i);
}

While Loop: The While loop is used for indefinite iteration, meaning the number of iterations is not known before the loop starts. The loop will continue to execute as long as the specified condition is true. Here's an example:

let i=0;
while(i<5){
 console.log(i);
 i++;
}

Do-While Loop: The Do-While loop is similar to the While loop, but it guarantees that the loop will be executed at least once. This is because the condition is checked after the code inside the loop is executed. Here's an example:

let i=0;
do{
 console.log(i);
 i++;
}while(i<5);
========================================================================================================================================
Function

What is a function?
A function in JavaScript is a set of statements that performs a task or
calculates a value
It should take some input and return an output where there is some obvious
relationship between the input and the output.



Functions are blocks of code that can be defined and called by a name. Functions can take parameters (values given to the function) and return a value.

Functions are defined using the function keyword, followed by the name of the function, and a pair of parentheses containing any parameters.

Syntax
function functionName(parameters) {
 // code to be executed
}
Parameters are optional and allow you to pass values into the function when it is called.

Functions can return a value using the return keyword. This ends the execution of the function and sends the return value back to the code that called the function.

To call a function, you use its name followed by a pair of parentheses. Any values passed to the function during the call are considered as arguments.

function Name(arguments);
Example of function:


function greet(name) {
 return `Hello, ${name}!`;
}

let greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!

Why do we need functions?
You are repeating yourself if you dont use function So Dont reapet yourslef(DRY code is problem that why we use function)
========================================================================================================================================
Callback function

Step 1 - Can you call one function inside another function?
Ans      Yes

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

In JavaScript, functions are first-class objects, which means they can have properties and methods, and can be passed as arguments and returned from other functions. This property of JavaScript allows callback functions to be used in the language.

Here is an example of a callback function in JavaScript:
function greet(name, callback){
 console.log('Hello, ' + name);
 callback();
}

function sayGoodbye(){
 console.log('Goodbye!');
}

greet('John', sayGoodbye);
In this example, sayGoodbye is the callback function. It is passed as an argument to the greet function. Inside the greet function, the callback() function is called. This will execute the sayGoodbye function and print 'Goodbye!' to the console.

It is important to note that callback functions are not always necessary and can lead to "callback hell" if not used correctly. In modern JavaScript, there are alternative ways to handle asynchronous code execution, such as Promises and async/await.

========================================================================================================================================
Anonymous function

An anonymous function, also known as a lambda function, is a function that is defined without a name. Instead, the function is defined as part of an expression.

In the example provided, the anonymous function is used as the argument for the callback parameter of the sumOfSomething function.

The anonymous function is defined using the function keyword, followed by a set of parentheses containing the function's parameters, and then the function body, enclosed in curly braces.

In this case, the anonymous function takes a single parameter, n, and returns the result of the expression n * n * n. This function is essentially the same as the cube function, but defined in a more concise way.

By using an anonymous function in this way, we can easily define and pass a function as an argument without having to declare a separate named function. This can be useful for keeping our code concise and organized.
