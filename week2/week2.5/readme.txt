Express with examples
Lets take the example of an analogy 
=========================================================================
Going to the doctor
Doctors have a skill 
They have acquired that skill over years 
They provide service to other people who want to use their skill
==========================================================================
to expose this life skill, they open a clinic 
People who want to use their skill line up in a waiting room 
One by one, the doctor meets with them 
The doctor is single threaded

How do people reach the doctors? 
They get their address and navigate to it

Once they reach there, they wait in the waiting area 
Until their time comes
Doctor tends to them one by one

Doctor can tell them to get a medicine in the middle 
and meanwhile tend to other people

You Come back and wait in the waiting room again

Your logic is like a doctor
Doctor logic
function calculatesum(n){
    let ans=0;
    for (let i=0;i<n;i++){
        ans=ans+i;
    }return 0;

}

const ans=calculatesum(20);   
console.log(ans ) Your relative using you like a patient Relative doesn’t need to find your address, They stay in the same house

But what if you want to expose this logic to the world?
This is where HTTP comes into the picture 
It lets you create a ~hostpital where people can  
Come and find you

Question - How do I expose my doctor functionality 
To other people? 
How can they find me? 
Ans  - By creating an HTTP Serve


Doctor logic
Question - How do I create an HTTP Server? 
Ans - Express


now we are creating our http server
const express= require('express')
const app= express();
const port=3000;

function calculatesum(n){
    let ans =0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }return ans;
}

app.get('/',function(req,res){Exposing the doctors one functionality (kidney surgery, brain surgery)Doctor could have multiple rooms inside their hospital, this is one of them
   const inputvalue=req.query.n;
   const ans= calculatesum(inputvalue);
   res.send(ans)
})

app.listen(port,function(){  # Deciding the address of the clinic
    console.log(`server is running on this port ${port}`)
})





Request methods 
1. GET - Going for a consultation to get a check up 
2. POST - Going to get a new kidney inserted 
3. PUT - Going to get a kidney replaced 
4. DELETE - Going to get a kidney removed

Status codes 
1. 200 - Everything went fine 
2. 404 - Doctor is not in the hospital 
3. 500 - Mid surgery light went away 
4. 411 - Inputs were incorrect, wrong person came to surgery 
5. 403 => you were not allowed in the hospital


learn by doing, lets create an in memory hospital
You need to create 4 routes (4 things that the hospital can do) 
1. GET - User can check how many kidneys they have and their health 
2. POST - User can add a new kidney 
3. PUT - User can replace a kidney, make it healthy 
4. DELETE - User can remove a kidney














Certainly! Let's consider a real-life scenario where a website wants to display personalized information based on a user's preferences. For simplicity, let's say the website wants to display a personalized greeting.

    URL Example:
        Imagine a website with a URL like http://example.com/greet?name=John.

    Express.js Server Code:
        Your Express.js server might have a route like this:

    javascript

    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/greet', function (req, res) {
        const name = req.query.name;
        const greeting = `Hello, ${name}! Welcome to our website.`;
        res.send(greeting);
    });

    app.listen(port, function () {
        console.log(`Server is running on port ${port}`);
    });

    How It Works:
        When a user visits http://example.com/greet?name=John, the server extracts the value associated with the key "name" from the query string.
        In this case, req.query.name gets the value "John."
        The server then generates a personalized greeting using the provided name and sends it back as the HTTP response.

    Response to User:
        If a user named John visits the URL, the server responds with: "Hello, John! Welcome to our website."

In this example, the server dynamically generates content based on the information provided in the URL query string. This is a simplified illustration, but in practical applications, such input from the URL can be used for more complex operations and personalization on a website or web application.