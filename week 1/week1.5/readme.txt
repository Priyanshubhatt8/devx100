Offline Lecture 1.5 
========================================================================================================================================
Topic

1.Async functions vs sync functions, real use of callbacks 
2.JS Browser architecture 
3.Promises 
4.Async await
========================================================================================================================================
1.Async functions vs sync functions, real use of callbacks 


****************************************************************************************************************************************
Async functions vs sync functions

What does synchronous mean?
Together, one after the other, sequential Only one thing is happening at a time

What does asynchronous mean?
Opposite of synchronous.
Happens in parts.
Multiple things are context switching with each other.

Lets build some intuition
Human brain and body is single threaded
1. We can only do one thing at a time
2. But we can context switch b/w tasks, or we can delegate tasks to other people

You have 4 tasks -
1. Boil water
2. Cut vegetables
3. Cut maggi packet
4. Get ketchup from the shop nearby



How would you do this? Synchronously or Asynchronously?

Synchronously (One after another)
 Approch of doing taks sequentialy,One after another

          
sequence-     1             2            3                        4
Task -     BoilWater  CutVegetables CutMaggiPacket "GetKetchup from the shop nearby" |   Totaltime
time -        5min      +       2min     +      10min      +             20min                   |  = 37 mins 

Or, you could multi-task
(More technically, context switch and delegate)


Asynchronously (context switch and delegate)
 Approch of doing taks context switch and delegate

context switch and delegate     Task                    ProcessOfDelegate                                             completeSequence
Turn on gas(1s)-              BoilWater    1(after 1sec)->4th task(Delegate task to house help (kamla didi))              (2sec)
                                                                                                                     1sec->after cuting
                                                                                                                     maggiPacket 1 more 
                                                                                                                     sec use in total  (2sec)

Delegate task                GetKetchup           4th task Delegate task to house help (kamla didi)                      (10 min)
                                                                                                                     In this time we are cutting veggie it us 10 min to cut viggie both done in total 10 min 
Cut Maggi packet            CutMaggiPacket          Came back after delegate task And cut CutMaggiPacket                 (2 mins)

Cut vegetables              CutVegetables           After cuting maggiPacket start cuting veggie                         (10 mins)
                                                                                                                 when 8min done in this task kamla bring ketchup and after that we are done in 2 min in total (10 min)
Total Time 
First gas on that take "1sec time" then we delegate task 4 to kamla di and  doing  task simultaneously   cutting maggi in 2min but she is still is shop After cutting maggiPacket started cutting  veggie , On 8 min  of cutting  veggie  She bring ketchup after 2 min Viggie cutting done all task done In 12 min.


Even if you are single threaded (brain can do only one thing at a time), you can do things parallely by Delegating 
You can also context switch between tasks if need be (the net time to do both the things would still be the same) 
Net amount of time take to do a task can be decreased  
by doing these two things (delegating and context switching)

****************************************************************************************************************************************
How does JS do the same? Can JS delegate? Can JS context switch ?  
Yes! Using asynchronous functions

Until now, we’ve only seen synchronous functions

Lets introduce an asynchronous function (setTimeout)

What are common async functions? 
setTimeout 
fs.readFile - to read a file from your filesystem 
Fetch - to fetch some data from an API endpoint 
****************************************************************************************************************************************

========================================================================================================================================
2.JS Browser architecture 
Lets look at the javascript architecture that lets us achieve this asynchronous nature 

In JavaScript, asynchronous code execution is achieved through an architecture called the "Event Loop." The Event Loop has three main components: the Call Stack, the Web APIs, and the Callback Queue.

Call Stack: This is a data structure that stores information about the function calls in the program. It keeps track of the functions that are currently being executed. In JavaScript, due to its single-threaded nature, only one function can be executed at a time. Therefore, the Call Stack is never empty, as it always contains the currently executing function.

Web APIs: These are JavaScript's interface to the browser's capabilities, such as fetching resources from the network or manipulating the DOM. The Web APIs are not a part of the JavaScript language itself but are provided by the browser environment. When a function is called that depends on a Web API, the function is added to the Call Stack and executed.

Callback Queue: This is a data structure that stores the callback functions that have been registered but have not yet been executed. Callback functions are functions that are passed as arguments to other functions and are executed after a certain event or action has occurred. In JavaScript, the Event Loop constantly checks the Call Stack to see if it is empty. If it is, the Event Loop then dequeues the first callback function from the Callback Queue and adds it to the Call Stack to be executed.

When the asynchronous function is called, the function that initiates the asynchronous operation is added to the Call Stack and executed. Once this function completes its execution, it can no longer affect the program's control flow. Instead, it can register a callback function that will be executed later when the asynchronous operation completes. This callback function is then added to the Callback Queue.

The Event Loop continuously checks the Call Stack and the Callback Queue. If the Call Stack is empty, it dequeues the first callback function from the Callback Queue and adds it to the Call Stack to be executed. This way, the program can continue executing other code while waiting for the asynchronous operation to complete.

When the asynchronous operation finally completes, it can trigger the execution of the callback function registered earlier. This callback function is then added to the Callback Queue, and the Event Loop can execute it once the Call Stack is empty.

This architecture allows JavaScript to maintain a responsive user interface while performing complex tasks asynchronously.


========================================================================================================================================
3.Promises 
What even is a promise? 
Whenever u create it, you need to pass in a function as the first argument which has resolve as the  
First argument

 Here’s a simple promise that immediately resolves

let p = new Promise(function(resolve){
      resolve("Hi There")
       console.log(p);
});

console.log("hiiii")

 When you attach a then callback to a Promise, the callback is registered to be executed when the Promise is resolved. 
 However, it doesn't execute immediately; it's scheduled to run in the next iteration of the event loop. 
 JavaScript is single-threaded and uses an event-driven, non-blocking I/O model.

 Here's a step-by-step explanation of what happens:

     The Promise p is created and resolved immediately with the value "Hi There."
     The then callback is attached to the Promise, but it is not executed immediately; it's added to the microtask queue.
     The console.log("hiiii") statement outside the Promise is encountered and executed immediately.
     The event loop moves to the microtask queue and finds the then callback. It executes the callback with the resolved value, logging "Hi There."

 This behavior ensures that synchronous code (like the console.log("hiiii") statement) is executed before microtasks, such as then callbacks.

 If you want to see the "Hi There" log immediately after the Promise is resolved, you can use setTimeout to create a minimal delay and allow the event loop to move to the microtask queue:

 The microtask queue is not part of the Web API; rather, it's a part of the JavaScript runtime environment. 
 It's a queue for tasks that need to be executed after the current script has finished but before the browser renders the next frame.
  Microtasks are used for tasks that are more immediate and higher priority than the regular macro tasks (like rendering updates).

 In the context of JavaScript, tasks are divided into two categories:

     Macro tasks: These are tasks that are handled by the event loop and typically include I/O operations, rendering, and script execution. 
     Examples include setTimeout, setInterval, and I/O operations.

     Micro tasks: These are tasks that are executed at the end of each task in the event loop. 
    Microtasks are usually higher-priority tasks and include things like promise callbacks (then, catch, finally), process.nextTick in Node.js, and mutation observer callbacks.

Promise
 When a Promise is resolved or rejected, the callbacks registered with then, catch, or finally are placed in the microtask queue.
  The microtask queue is processed after the current script has finished running but before the next frame is rendered. 
  This ensures that microtasks are executed promptly.

event-loop
 Here's a simplified view of the event loop:

     Execute the current script until the call stack is empty.
     Process microtasks from the microtask queue.
     Render changes to the DOM (if any).
     Check for I/O events and execute corresponding callbacks (macro tasks).
     Repeat.

 This separation into microtasks and macro tasks helps maintain a smooth user experience and ensures that higher-priority tasks,
  like promise callbacks, are handled promptly.


========================================================================================================================================
4.Async await

Async await is a syntax feature in JavaScript that allows you to write asynchronous code in a way that resembles synchronous or blocking code. This syntax feature is based on Promises, but it provides a more convenient way to handle asynchronous operations.

Here's a brief explanation of the code you provided:

function kiratsAsyncFunction() {
 let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("hi there!")
 });
 return p;
}
In this function, we create a new Promise (p) that will eventually resolve to the string "hi there!". The resolve function is used to indicate that the Promise has been fulfilled.

Now, let's look at the main function:

async function main() {
 const value = await kiratsAsyncFunction();
 console.log(value);
}
In this function, we use the await keyword before calling the kiratsAsyncFunction(). The await keyword tells JavaScript to wait until the Promise returned by kiratsAsyncFunction() is resolved, and then assign the resolved value to the value variable.

Finally, the main function is called:


main();
When main is called, it starts executing. It encounters the await keyword, which makes it wait until the Promise returned by kiratsAsyncFunction() is resolved. Once the Promise is resolved, the value of the resolved Promise is assigned to the value variable, and then the console.log(value) statement is executed, which logs the value to the console.

In summary, the async await syntax in JavaScript provides a convenient way to write asynchronous code. It is built on top of Promises, and it makes the code look more like synchronous or blocking code, which can be easier to understand and work with.
