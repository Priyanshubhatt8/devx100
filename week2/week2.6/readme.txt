//map 
  //1. map with array & function(it create new array to store new value of each element)
  //2. map with array without function(this replace old value with new value in orignal array)
  //3. map with object
  //4. last one is map object 

// Define an array
const arr = [1, 2, 3, 4, 5];
// Use the map function to create a new array
var squaredArr = arr.map(function(element) {
    return element * element;
});

// Log the new array to the console
console.log(squaredArr); // Output: [1, 4, 9, 16, 25]

//1. Define an array called arr with numbers from 1 to 5.
/*
2. Use the map method on the arr array to create a new array called squaredArr.
The map method applies a function to each element in the original array, and the resulting array is stored in squaredArr.
*/
/*
3. Inside the function, return the square of the element that is currently being processed. 
This creates a new array where each element is the square of the corresponding element in the original array.
*/
//4. Log the new array squaredArr to the console. The output will be [1, 4, 9, 16, 25], which is an arr



// If you want to modify the original array, 
// you can do so by assigning the result of the map function back to the original array:
arr = arr.map(element => element * element);

console.log(arr); // Output: [1, 4, 9, 16, 25]
// In this case, the map function is still applied to the arr array and returns a new array with the squared values.
//  By assigning the result of the map function back to the arr variable, the original array is replaced with the new array.

// yes, the map method in JavaScript can be used with various data structures, not just arrays.

// Arrays: As shown in the previous example, you can use map with arrays to transform the elements of an array.

// Objects: If you want to transform the values of an object, you can use Object.entries to convert the object into an array of key-value pairs.
// Then, you can use map to transform the values, and finally, use Object.fromEntries to convert the array back into an object.

// Here's an example:

const obj = { a: 1, b: 2, c: 3 };

const entries = Object.entries(obj);
const squaredEntries = entries.map(([key, value]) => [key, value * value]);
const squaredObj = Object.fromEntries(squaredEntries);

console.log(squaredObj); // Output: { a: 1, b: 4, c: 9 }
// In this example, we used map with an array of key-value pairs to square the values of an object.


const originalMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
   ]);
   
   
   const newMap = new Map(
    Array.from(originalMap.entries()).map(([key, value]) => {
       return [key, value * 2]; // Replace this line with your transformation logic
    })
   );
   
   console.log(newMap); // Output: Map(3) { 'a' => 2, 'b' => 4, 'c' => 6 }

//  In conclusion, Array.from() is used here to convert the Iterator object returned by entries() into an array of key-value pairs.

// Note:-1.simple map is used by key & value pair also with map object each map object have key&value pair.
    //   2.map use with array,object,mapObject
        //  For Array   arr.map
        // for object   obj.entries this convert object in array
        //for map object  Array.form(obj.entries()) this convert mapObject in array



    