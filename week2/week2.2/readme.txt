---------------------------
Node js                   |
1-What is ECMA script?    |
2-what is Javascript?     |
3 what is Node.js?        |
4-What is Bun?            |
---------------------------

Ecma Script?
------------
Ecma script is like a rules and guidelines for designing engine for Javascript like after every year or 2 year we get new features in Javascript 
some people write the code by following Ecma rules eg data var let const function
---------------------------------------------------------------------------------------------------------------------------------------------------
Javascript?
Java script is a scripting language that confirms to the exma script specification it is most widely used and implementaion on ecma script
there are some additional features of Javascript which is not provided by ecma script like DOM fs.readfile setTime out 

there are common js browser engine most popular one is V8 engine which is developed by google chrome and spidermonkey which is developed by firefox  V8 engine is written in c++
and engine is mainly used to convert high level language to native machine languauge
-----------------------------------------------------------------------=-------------------------------------------------------------------------------------------------------------
Node js?
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Engine: V8
Focus: General-purpose JavaScript runtime, often used for web servers and backend development
Startup time: Relatively slower
Memory usage: Can be higher for large applications
====================================================================================================
so Javascript was not really ment to run on backend because it just runs on browser like when we open browser Javascript will execute in 2012 or 2013 some smart people 
took out v8 engine added some backend things and created a new run time environment node js node js is not a language not a library not a framework it is a run time environment
for Javascript means when node js come we can run Javascript in our local computer  node js is written of cpp 

and these days we have competiter of nodejs that is bun js bun js is the competiter of node js which is written is zig like bun js is faster than node js 
=======================================================================================================================================================================
Engine: JavaScriptCore (JSC)
Focus: Optimized for speed and efficiency, often used for serverless functions and edge computing
Startup time: Significantly faster than Node.js
Memory usage: Lower, especially for smaller applications
====================================================================================================================================================================================
We will be focusing on Node.js                           |
Specifically, how to write Backend applications using    |
Javascript                                               |
=========================================================
what can you do with node js ?
1.create clis
2.create a video player 
3.create a video game
4.create an http server

1 clis command line interface runs inside our terminal and that is made with the help of node js as we can see cmd is not running in our browser
2 create a video player this is not main use case like there can be cpp code here
and in video game also 
3 but our main use case is creating an http server
95 % of times we use node js for creating a http server

========================================================================================================================================================================================
Q- what is an http server?
Ans- http hyper text transfer protocol a protocl which define machine to communicate 
Specifically for website most common way for our front end to communicate with backend

What exactally is front end and backend ?
front is basically how our website is designed it is visible to users ui we use html/css/js/react to create front end 
and backend suppose i open chat gpt the buttons input tag icons are part of front end but when i type something in chat gpt and enter button then the result which chat gpt give 
is coming from a openai server which means that there is a server somewhere which is sending us that result 
The back end, is responsible for handling the server-side logic, database interactions, and any other operations that occur behind the scenes. In your example with a chat application powered by GPT, when you type something and press the enter button, the input is sent to a server (backend) that processes the request, interacts with the OpenAI GPT model, and returns the generated response. This response is then displayed in the user interface on the front end.

suppose i search something in google and then enter search button so the request goes into server of google which is very big data center and in response i will get the result and will be displayed to user interface 
 and that server is located in us and httpp is the protocol that when i search something and so http will first communicate with the server then i will get the result so frontend and backend talk through wires and routers there are wires big big wires that have been setup in the oceans and they transfer data at the speed of light

What is https server?
the thing that is exposes like machine model even tho it is expose in the internet but still servers have authentication chatgpt https server is some code that follow http protocol 
and is able to communicate with clients (browser/mobile/app)think of it to be similar to the call app in your phone who lets you communicate with your friends so we can locally make a http server which will only be accesible to limited area like range of my router and for public server we use some public ip 
======================================================================================================================================================================================
Http protocol?
so in the end there is a end user which request something from server and then server does somecomputation and send back the response 
1.Think of them as functions, where  
   Arguments are something the client sends 
2. Rather than calling a function using its name, the client uses a URL 
3. Rather than the function body, the server does something with the request 
4. Rather than the function returning a value, the server responds with some data 
========================================================================================================================================================================================
When client is sending request to an http server there are some things that he have to know?things that client need to worry about 

1 Protocol-http/https-this is what protocol they are exposed on like there are sort of some more protocol other than http like https https is http but more secure version of http we need to know are we sending http request or https request 
2 address-url/port/ip - we need to know the address or url of the backend server url(Uniform Resource Locator) when i search google co the result comes up in url is google.com so that is url 
3 route- means whatever we see after website returns means i search something in google like where is india then after domain name i will get something that is known as route https://www.google.com/search?q=what+is+my+name&sca_esv=594833718&sxsrf=AM9HkKmWdMYpiN5N3AnATiL5czAQVGOwUw%3A1704086341208&source=hp&ei=RUuSZYDsCrbm1e8P7dGroAc&iflsig=AO6bgOgAAAAAZZJZVRKha7cDjudiBrCN9-SGkzx9pw0C&ved=0ahUKEwjAoqGouLuDAxU2c_UHHe3oCnQQ4dUDCAs&uact=5&oq=what+is+my+name&gs_lp=Egdnd3Mtd2l6Ig93aGF0IGlzIG15IG5hbWUyCxAuGIAEGIoFGJECMgoQABiABBgUGIcCMgoQABiABBgUGIcCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAuGIAEMgUQABiABEi5J1CLB1i2JnAFeACQAQCYAfgBoAHvFaoBBjAuMTcuMbgBA8gBAPgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIREAAYgAQYigUYkQIYsQMYgwHCAgsQABiABBiKBRiRAsICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAhEQLhiABBixAxiDARjHARjRA8ICChAjGIAEGIoFGCfCAg4QABiABBiKBRiRAhixA8ICDhAAGIAEGIoFGLEDGIMBwgIREC4YgAQYigUYsQMYgwEY1ALCAgcQIxixAhgnwgINEC4YgAQYxwEY0QMYCsICBxAAGIAEGArCAgoQABiABBixAxgKwgILEAAYgAQYigUYsQM&sclient=gws-wiz
after google.com whatever is printing that is route route specify what exactly are you trying to do 

4 headers body query params - in headers we send some authentication things like iam logined too facebook like i am logined to website so backennd of facebook somehow know that 
iam login and how it knows that with the help of cookie whenever we login this header gets stored in our browser 

5 body- this is the most important bit like it include whatever iam asking like suppose iam asking what is 2+2 in chatgpt then what is 2+2 will include in body 
and usually is json form 

6 method- this specify what kind of request are we sending like get post delete put get means we are getting something post means we are posting something 

when ever we are sending request to the server  we need to specify these things 
======================================================================================================================================================================================

When server receive request from client there are some things that server need to worry about ?
server have to respond with these things like when client send request to the server tab server have to respond with something this are the things that server will response with 

1 response header 
2 response body - here we will get response like here we will get the ans of our ques data 
3 status code
when we write our http server we will understand these things 
========================================================================================================================================================================================
and in server side we have
1 response header 
2  response body 
3 status code

so here in response body here server will send the responed data that client has request for like in above example client asked for what is 2+2 so in server response body the data of response will be aded like 2+2 is equal to 4 
and in status code it is like we have get the status like when we gets error we gets 404 thats are the  status codes so here we will get the status code 200 
and in response header 

The separation of headers, body, and method in HTTP requests and responses follows a design principle known as the separation of concerns. Each part serves a distinct purpose, contributing to the clarity, extensibility, and efficiency of the HTTP protocol same as goes on server side 
its say like lets keep all the protocols here  and lets keep all the data in body part lets keep all the method in method part so to make everything separation
==================================================================================================================================================================================
things that happen when you fire the request 
like when i search something on the google like i search facebook.com then first that browser will parse the url  and does a dns lookup (convert facebook.com to an ip )establish a connection with the ip 
 
 what is dns resolution
 urls are just like contact in your phone 
 in the end they map to the ip if you ever buy a url of your own 
 you will need to point it to the ip of your server 
 like when i go to app.100xdev url have an ip meaans this url is pointing to an ip 
=========================================================================================================================================================================================

 things that happen on your server after the  
request is received
1. You get the inputs (route, body, headers) 
2. You do some logic on the input, calculate the output 
3. You return the output body, headers and status code

    After receiving the request, your server performs a variety of operations to handle it properly. This includes setting up a socket, assigning memory, creating threads, etc.

    When your server receives an HTTP request, it checks the HTTP method (GET, POST, PUT, DELETE, etc.) and the URL path to determine the appropriate response.

        For GET requests, your server typically fetches the specified resource and includes it in the response body.

        For POST requests, your server often creates a new resource based on the data provided in the request body.

        For PUT requests, your server updates an existing resource based on the data provided in the request body.

        For DELETE requests, your server deletes the specified resource.

    Once your server has determined the appropriate response based on the request inputs, it returns an HTTP response. This response consists of three parts: the response status line, response headers, and the response body.

        The response status line includes the HTTP version, status code, and a reason phrase. The status code is a three-digit number that indicates the outcome of the request. For example, a 200 status code means the request was successful, while a 404 status code means the requested resource was not found.

        The response headers provide additional information about the response. For example, the Content-Type header specifies the MIME type of the response body, such as "text/html" for HTML content.

        The response body contains the actual data that is returned to the client. For example, for a GET request that retrieves a web page, the response body contains the HTML content of the web page.

By returning this comprehensive response, your server communicates the result of the client's request, including any relevant data or error messages, to the client. The client can then use this information to determine the next steps in its interaction with your server.
========================================================================================================================================================================================
What are the common methods you can send to your BE server? 
1. GET 
2. POST 
3. PUT 
4. DELETE
=========================================================================================================================================================================================
What are the common status codes the backend responds with? 
1. 200 - Everything is ok 
2. 404 - Page/route not found 
3. 403 - Authentication issues 
4. 500 - Internal server error
=======================================================================================================================================================================================
HTTP Protocol
Why do we need status codes? Why can’t we just return in the body something like success: true/false 
Why do we need so many types of request methods? Why can’t just one work? 
Why do we need body/headers/query params, why can’t just one work? 
These are standard practises, you don’t need all of it, but it is what is mentioned in the spec and hence is good to follow
=======================================================================================================================================================================================
===================================================================================================================================================================================
Question at this point -  
How do I create a HTTP server of my own? 
How to I expose it over the internet like chatgpt.com
======================================================================================================================================
Do you remember the fs library? 
We used to to read from a file
======================================================================================================================================
Similarly, there are many libraries that let you create HTTP Servers 
The most famous one is express 
A great exercise to do is to create an HTTP server from scratch in C/C++ 
It is out of scope for this course, but if you’re looking for a challenge
we can write http server in any language like c cpp java we are using node js library called express

=======================================================================================================================================
const express = require('express');

const port=3000;
// it is like fs.readfile("path",utf-9,())
// so here whenever file is done reading our function execute 


app.get('/',function(req,res){
    res.send("hello world")//here also when someone try too hit my backend server control will reach here
})

app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
})

======================================================================================================================================================================================

    const app = express();

        express() is a function provided by the Express library that creates a new Express application.
        The result of calling express() is stored in the variable app. This variable now holds your Express application.

    Why Create an Instance:
        In the world of web development, an "application" typically refers to your web server, which handles incoming requests and sends back responses.
        By creating an instance of the Express application, you are essentially setting up the infrastructure for your server. This instance (app) will have methods and properties that allow you to define how your server responds to different types of requests.

    Use of app:
        After creating the app instance, you can use it to define routes, handle requests, and perform various other tasks related to building a web application.

In short, const app = express(); is like saying, "I'm creating a new web server using Express, and I'm going to call it app. Now, let's use app to set up how the server should behave." It's the starting point for building your web application using the Express framework
=========================================================================================================================================================================================
app.get('/', function (req, res) {
    res.send("hello world");
});

This code is defining a route for the HTTP GET method at the path '/' (which represents the root URL). Here's what it does:

    app.get('/'...): This line specifies that when a GET request is made to the root URL ('/'), the following function should be executed.

    function (req, res) { ... }: This is the callback function that gets executed when a request is made to the specified route. It takes two parameters:
        req (request): An object containing information about the incoming request, such as headers, parameters, and query strings.
        res (response): An object representing the server's response to the client.

    res.send("hello world");: This line sends the string "hello world" as the response to the client. In other words, when someone visits the root URL of your server, the server will respond with "hello world."

So, if you run this code and start your server, anyone who accesses http://localhost:3000/ (assuming your server is running on port 3000) in a web browser or using a tool like curl will see the response "hello world" in their browser or terminal.
=====================================================================================================================================================================================
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});

This code does the following:

    app.listen(port, ...):
        app.listen is a method provided by Express.js to start the server and make it listen for incoming requests.
        port is the port number on which the server will listen for incoming connections. In your example, you have defined const port = 3000;, so the server will listen on port 3000.

    function () { ... }:
        This is a callback function that will be executed once the server has successfully started.
        Inside the callback function, you have a console.log statement that prints a message indicating that the server is now listening on the specified port.

    Logging the Server Start:
        When you run your Node.js script containing this code, the server will start listening on the specified port (in this case, port 3000).
        The callback function will be executed, and the console.log statement will print a message to the console, indicating that the server has started and is listening on the specified port.

In summary, this code establishes the connection between your Express application and the specified port, and it provides a log message to indicate that the server has started successfully. Once you see the log message, you can visit http://localhost:3000/ in a web browser or make requests to your server using tools like curl or Postman.
=========================================================================================================================================================================================
In the context of Express.js, the app.get() function is a method used to define a route for handling HTTP GET requests. Let's break down the specific line of code:

javascript

app.get('/', function (req, res) {
    res.send("hello world");
});

    app.get('/'):
        This line specifies that you are defining a route for HTTP GET requests to the root URL ('/').
        In Express, the first argument of the app.get() function is the route path. In this case, '/' represents the root URL of your application.

    Callback Function:
        The second argument of app.get() is a callback function that will be executed when a GET request is made to the specified route.
        The callback function takes two parameters:
            req (request): An object containing information about the incoming request.
            res (response): An object representing the server's response to the client.

    Handling the Request:
        Inside the callback function, res.send("hello world"); sends the string "hello world" as the response to the client when a GET request is made to the root URL.

In summary, app.get('/') sets up a route for handling GET requests to the root URL of your Express application. The associated callback function defines the behavior of the server when such a request is received, in this case, responding with "hello world."
=======================================================================================================================================================================================

and to use post method we use 
const express = require('express');

const app = express();
const port = 4000;
// it is like fs.readfile("path",utf-9,())
// so here whenever file is done reading our function execute 

app.post('/conversation', function (req, res) { //   {/} this is a request
    console.log(req.headers)    here we will get header 
    res.send({
        msg: "2+2=4"
    }) //here also when someone try too hit my backend server control will reach here
    // in res.send we can only pass html, json, string, bufferarray, status code  
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})
================================================================================================================================================


