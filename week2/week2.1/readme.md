revision of callback async await promises

We mainly use asynchronous function
1 do a network call
2 sleep wait for some time
3 read a file data base call

So what basically is asynchronous programming ?
in old time when java was only single threaded programming language as you know in javascript thread can do only one task at a time so sometime
thread got stuck in between code started taking so much time for specific function like reading file from computer system or fetching data from api
basically synchornous programming means in javascript our programm runs line by line so suppose i have 5 functions and one of them is fetching data from api
and that function is taking time to fetch data so our thread will stuck there and will dont move further until that data fetch so too solve this problem we have
asynchronous programming in which function which are going externally from ours javascript engine their work will be delegate to browser like we will wait for that function to fetch data
but others function execution will not stop we have four main things 1-callstack 2-webapi 3-callback 4-eventloop queue so whenever our normal function execute it puts under call stack and
will execute and after completeion of that function that function will be popped out from that call stack
and in case of asynchronous function asynchronous function will be put in webapi if that function is fetching something from externally so that function will will fetch data till that
time other function will excecute and then that asynchronous function will be put into callback queue and when thread is not bust event loop pull that callback from callbackqueu
and pull it into callstack

2-Promises?
callbacks => callback hell
promises => promise chaining ,async await

=================================================================  
There are 3 big humps in full stack
1.Async Nature of js
2.React
3.Js to Ts

---

This is the gist of the hump if you undertstand this then you are sorted if not then there is a knowledge gap

1 async, await and promises

                                                            async await syntax


    callback syntax

function kiratasyncfun(callback){

//do some async logic here
callback("hi there")
}

async function main(){
kiratasyncfun(function(value ){
console.log(value);
});
}
main();

================================================================================================================================================================================
Promise then syntax

function asynckirat(){
const a=newPromise(function(resolve){
resolve("hi there ")

    return a;

})

}
function main (){
asynckirat().then(function(value)){
console.log(value)
}
}
main();

==================================================================================================================================================================================

Async/await syntax

function asynckirat(){
const a=newPromise(function(resolve){
resolve("hi there");
})return a ;
}
async function main (){
const value =await asynckirat();
console.log(value)
}
=================================================================================================================================================================================
Promises:

A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation and its resulting value.
Promises have three states: pending (initial state), fulfilled (operation completed successfully), and rejected (operation failed).

Async
The async keyword is used to define an asynchronous function. Async functions always return a Promise.
The await keyword is used inside an async function to pause execution until the Promise is resolved, returning the resolved value.

then:
The then method is used with Promises to handle the result of a resolved Promise.
It takes two optional callbacks as arguments: the first for a successful resolution, and the second for handling a rejection.

try/catch:
The try/catch statement is used for error handling. Code within the try block is executed, and if an exception is thrown, it is caught and handled in the catch block.
It's often used in conjunction with Promises or async/await to handle errors in asynchronous code.

=========================================================================================================================================================================================
What is async? -
Asynchronous
Your javascript thread doesn’t have access to everything immediately
There are some tasks it needs to wait for For example -

1.  Reading a file
2.  Sending a network request
    3 Adeliberate timeout
    ===========================================================================================================================================================================================

Lets see an async function call
const fs=requre("fs");

fs.readFile("read.txt","utf-8",function(err,data){
console.log("file has been read")
console.log(data)
})

let ans=0;
for(let i=0;i<100;i++){
ans=ans+ans
}
console.log(ans)
===============================================================================================================================================================================================

What are promises?
1 just syntatical sugar
2 just a more readabel way to write async function
3 promises handel error and resolve type of operations
================================================================================================================================================================================================
how would you create your own async function?

function myownsettimeout(fn,duration){
setTimeout(fn,duration)

}

myownsettimeout(function(){
console.log("hello there)
},5000)
here we have wrapped our function with setTimeout async function here what will happen if you think that myownsettineout will be sent into webapi no still
setTimeout main async will be set into web api abd myownsettime out will be stored in call stack until its execution
This approach uses a callback You have created a function where other people can send a callback This is good, but could lead to callback hell
Callback hell is a scenario in which multiple asynchronous functions are called in sequence. This results in deeply nested callbacks, which makes the code hard to read, understand, and maintain.

What if I tell you - Create a function that logs something after 1s And then waits for 2 seconds to log another thing
