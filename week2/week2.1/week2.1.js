// function square(n) {
//     return n * n;
// }

// function cube(m) {
//     return m * m * m;
// }

// function sumofsomething(a, b, callback) {
//     let square = callback(a);
//     let square2 = callback(b);
//     return square + square2;
// }

// let ans = sumofsomething(2, 3, cube)

// console.log(ans)

// function one() {
//     console.log("hi there")
// }
// function two() {
//     setTimeout(function () {

//         console.log("iam late 5 second")
//     }, 5000)

// }
// function three() {
//     console.log("yo iam third function")
// }

// async function four() {
//     let ans = 0
//     for (let i = 0; i < 5000; i++) {
//         ans = ans + 1;
//         await new Promise(resolve => setTimeout(resolve, 0));

//         console.log(ans);
//         await console.log(ans)
//     }
//     console.log("hello iam async fun")
// }

// four();
// two();
// one();
// three()

// function mytimeset(duration) {
//     const a = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, duration);

//         return a;
//     })
// }

// const ap = mytimeset(1000);
// ap.then(function () {
//     console.log("hello there")
// })

// function kiratasyncfun(callback) {
//     //do some async logic here 
//     callback("hi there")
// }

// async function main() {
//     kiratasyncfun(function (value) {
//         console.log(value);
//     });
// }
// main();

function main() {
    const ok = new Promise(function (resolve, n) {
        n = 10;
        resolve(n)
    }); return ok;
}