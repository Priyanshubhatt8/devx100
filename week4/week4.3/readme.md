# what are database

database is where we store data presistently databse can have any kind of data like video audio images numbers and more.
browsers cant access database directly because they arent made like that there are some reasons that browsers cant access databse directly

1 databases are created using protocol which browsers dont understand
2 and second reason is databse only have 1 id and password if someone have that id password then he can access all data or if someone doesnt have that password he cannot access anything
so thats the main reason that databses are not directly expose too browser because if they are exposed to brosers then any user can access all of the data
so to prevent this we have https server in middle that do auth checks to get the specific data that the users want not all the data
databse dont have granual access as a first class citizen very hard to do user specific access in them
client hits https server and get acess of data

3 there are some databases (firebase)that let you get rid of the http server and try their best to provide granola access

# Database Usually allow access to 4 primitives

1 Create data --- when you signup the express server hit the database to create data
2 Read data -- when ever you want to read data express server hits the database  
3 Update data -- whenever you change you data express server hit the database to update the data
4 Delete data -- whenever you want to delete existing data the express server hit the database to delete the data
popularly knows an crud

So the library which we are using to talk to databse is prisma prisma is basically a orm which communicate with databses we will use this lately

for now we use mongoose in mongoose first you have to define the schema

what is the mean of schema mongoose or anyother databses are schemaless
and schema means what is the structure of your data that iam putting inside databse

in schema means that when i put something in sql database like first name second lastname the i have to put all data in same way
but in mongoose the scenario is different

in mongoose first you have to define the schema this sound counter intuitive since mongodb is schemaless that is true but mongoose make you define schema for things like autocompletions/validating data before it goes in the DB to make sure you are doing things right schemaless Dbs can be very dangerous using schemas in mongo make it slightly less dangerous

three jargons to know in database
1 cluster
2 database
3 table
