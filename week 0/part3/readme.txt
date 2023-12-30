
                  Css
They let you add styles to your website (colors, font sizes, background colors ...)
Used for positioning things on the page

             Common styling attributes
color background border-radius border padding / margin box-shadow


               How to position?

divs always take up all the space available horizontally spans only take up as much space as needed

Can you make divs take only the space they need?

Dumb way
float property

Rigth way
Flexbox property



Note:- For Better Understanding open Slides name as Week_0_slide in Week-0 folder

--------------------
How to add style?
-------------------
<h1 style="color: red; background:green;">Hi there <h1>
above h1 tag have style attributes and we have define some  property there color :red  means the text will turn into red color background :green it will turn the background color too green 
and when we define style tag just after tags is known as inline css


----------------------------------------
There are some common style attributes?
----------------------------------------
1 color
2 background - we have one more background:color but background is moree usefull because we can add images also but in background-color we can only add colors 
3 border-radius - lets say i have a <div> and i want to add border radius then i can add like that what will border radius do it will curve the edges of the container/element or tag 
4 border - means adding border to a div or element it is like a small line and we can also set border according to our need like top right left bottom and we can also adjust the width of border border:2px solid red like this 
5 padding/margin- BASSICALLY IT ADDS SPACE INSIDE THE BORDER  padding means pad the div with extra space like if i have a div containg some content padding property are used to generate space around an elements(div) content 
margin-Margins are used to create space around elements, outside of any defined borders.

6 box-shadow-Add shadows to different <div> elements:The box-shadow property attaches one or more shadows to an element. we can add 3 attributes inside box-shadow:10px 20px 40px black;
10px means in which directions will shadow go like left or right and 20px it will stretch like alot and last 40px it will diffuse more to top and bottom 

----------------------------------------------------
Display:flex (flexbox)?
------------------------------------------------------
on parent makes all div siblings reside in the same line 
like we have a <div> and inside that <div> we have 5 <divs> then then if i add Display flex in main div then the children divs will be shown in row and we can also position them 
like center end start 

