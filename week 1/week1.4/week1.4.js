/*
loop

//Find the sum of 0 to 100


// Dumb Way
//  let ans=1+2+3+4+5+6+7+8+9+10+11+12+13+14+15; So on

// Better Way- loop

let ans=0;
 for(let i=1;i<=100;i++){
    ans=ans+i;
 }
 console.log(ans)

 /

/

//Function 
function find(n){
 let ans=0;
   for(let i=1;i<=100;i++){
        ans=ans+i;
   }
   console.log(ans)
}

find(100)

// The function find takes a single parameter called n. Inside the function, a for loop runs from 1 to 100.
//  Each iteration of the loop adds the current value of i to the variable ans. 
// Finally, the function prints the value of ans, which is the sum of all numbers from 1 to 100.

// The find function is called with the argument 100. 
// When the function is called, it runs the code inside it and then stops. 
// The output of the function call is the number 5050.

/


//callback
function square(n) {
    return n n
  }
  function cube(n) {
    return n * n * n
  }


  function sumOfSomething(a, b, callback) {
    console.log(a);
    console.log(callback);
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2;
  }

  const ans = sumOfSomething(2, 2,cube)
  console.log(ans)

// "sumOfSomething" is called with three arguments: 2, 2, and "cube".
// Inside "sumOfSomething", a is 2, b is 2, and callback is the "cube" function.
// callback(a) is called, which is equivalent to cube(a). This results in 8 (2 * 2 * 2).
// callback(b) is called, which is equivalent to cube(b). This results in 8 (2 * 2 * 2).
// The function then returns the sum of these two results, which is 16.



/*
//Anonymous functions
function sumOfSomething(a, b, callback) {
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2;
  }

  const ans = sumOfSomething(2, 2, function (n) {
      return n * n * n
  })
  console.log(ans)

  */