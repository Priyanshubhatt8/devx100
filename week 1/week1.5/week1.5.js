// function addsum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function displayresult() {
//     console.log(addsum(100));

// }
// Synchronous example

// function syncsleep() {
//     let a = 1;
//     for (let i = 0; i < 1000000000000; i++) {
//         // console.log(ans)
//         a++;
//     }
// }
// syncsleep();
// setTimeout(displayresult, 1000);
// displayresult(100);
// console.log("hello world")

// ASYNC FUNCTION TYPE 2 FS.READFILE
// this fs full form of fs is filesystem and require means we are requireing a library nodejs library
// utf-8 a parameter it is a encoding like in which way we want to read our file like we want too read our file in byteformat in text or in what
// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", function (err, data) {
//     if (err) {
//         console.log("file not read", err)

//     }
//     else {
//         console.log(data)
//     }

// })
// console.log("hello there")
// here above this console.log("hello world ")will print first because fs.readfile is an asynchronous function and the tast of reading that file will be delegated to another thread
// let a = 0;
// for (let i = 0; i < 1000000; i++) {
//     a++;
// }

// console.log("hello there 2 ")
// here what will happen that first that above hello there will print then hello there 2 will print and then when the thread goes to fs async function and function done but it will still wait
// for that extra forloop because that forloop will take time to print because it have larger value


// function ak() {
//     setTimeout(() => {
//         console.log("akash");
//     }, 5000);
// }

// async function sum() {

// }

// function a() {
//     console.log("akash 3");
// }

// ak();
// sum();
// a();


// vvvvvvvvvvimmmmppportant
// const fs = require('fs').promises;

// function ak() {
//     setTimeout(() => {
//         console.log("akash");
//     }, 100);
// }

// async function sum() {

//     let a=10;
//     let b=20;
//     let c=a+b
//     console.log(c)


//         const fileContent = await fs.readFile('example.txt', 'utf-8');

//         console.log('File Content:', fileContent);


//     }
// function a() {
// //     let a=0
// // for(let i=0;i<10;i++){
// // console.log(a=a+a)
// console.log("akash 3");
// }


// ak();
// sum();
// a();


// function akh(num1, num2, callback) {
//     const ans = callback(num1, num2)
//     return ans
// }

// function add(a, b) {

//     const and = a + b;
//     return and;
// }

// function mul(num1, num2) {
//     num1 * num2;

// }

// const answers = akh(20, 30, add);
// console.log(answers);


// function simplefunc(num1, num2) {

//     const ans = num1 + num2;
//     setTimeout(() => {

//         console.log(ans)
//     }, 3000)

// }

// async function advance(primary, secondary) {
//     await Promise.resolve();
//     if (primary >= secondary) {
//         console.log("hi you are bigger")
//     } else {
//         console.log("you are smaller ")
//     }

// }

// function normal() {
//     console.log("hello world")
// }




// normal();
// simplefunc(10, 20);
// advance(0, 30);

const fs = require("fs");


function read() {
    return new Promise(function (resolve) {
        fs.readFile('readme.txt', 'utf-8', function (err, data) {
            resolve(data)
        })
    })
}
function ndone(data) {
    console.log(data)
}
read().then(ndone)


