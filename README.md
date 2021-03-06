# NodeJS Candidate Test

## Basic knowledge questions

- What are Promises in Node.js?

Promises allow us to control asynchronous functions in node.js, just to avoid problems when we call functions in time. 
Same as with callbacks, we need to be careful in placing or in nesting promises, to avoid situation similar to callbacks hell

- What is callback hell?

Callback hell is a problematic situation for programmers, wherein callbacks are nested or scattered in code or between files.

- What tools can be used to assure consistent style?

 In Node.js or in JavaScript we will use ESLint, which finds parts of code we need to correct or ESLint will correct mistakes by itself.
  
- What is REPL? What purpose it is used for?

REPL is the type of program, which lets us work with code easily. 
We can start, check or control what happens in our app. Libraries could be installed using REPL. Node.js is the REPL itself.

- What is the difference between Asynchronous and Non-blocking?

I think in practice it’s a pretty similar thing, but Asynchronous is a feature of the Node.js, which changes Synchronous JavaScript, 
whereas non-blocking is the term of posspibility, where more than one callback can work at the same time. 

- List types of Http requests supported by Node.js?

In node.js we  have few types of requests . 
First of all there are two main request: GET and POST.
The last ones are  PATCH, DELATE and PUT.

- Is Node.js entirely based on a single-thread?

Node.js likely the javascript can be called single-threaded, but in fact both of them are multi-threaded using only two threads. 
Important thing is node.js doesn’t support multi-threating . 
To solve, let’s call it a problem, we can make some background processes, but this solution is using a lot of memory. 
Second solution is to use something like the worker_threads module.

- What is your favourite HTTP framework and why?

Right now i'm very interested in Express, because it’s the part of the MERN stack, which seems convenient and it’s based on JavaScript

- What is difference between JavaScript and Node.js?

First and the most important thing JavaScript is the programming language, but Node.js is more like an environment based on Javascript.
 Moreover node works only at V8 engine, whereas javascript additionally starts in engines as Spider Monkey or Chromium 
 
- What is TypeScript? Do you use it? Why / why not?

Typescript is the programming language, which is very similar to javascript, if we will copy the content of a .js file to a .ts file. 
We have a big chance that the script will start perfectly.
I didn’t use TypeScript because I'm still gaining experience in Javascript. 
I think Typescript will be a very good expansion of my knowledge in the future, for the reason that it seems very useful, when we use a lot of code.

- What are the key differences between regular and arrow functions?

Arrow function has shorter code than regular function, second thing in the arrow function we don’t use the method name, 
but we add => between the brackets

- What is destructuring?

Destructuring is the expression, which allows us to put values from the arrays or objects to different variables.

- Explain the difference:
```ts
const a: string = "hello";
const a = "hello" as string;
```
Both lines are similar at all and both do the same. 
Difference between them is the first code is written in TypeScript, 
but in the second one with the as operator we need to use JSX which is used in React.


## Problem solving

You get an error report from testing crew - User API doesn't return "Test User" data for ID: 1.
Code is in this repository.

**Find out why, fix it and write report on why did it happen.**

First of all the problem was with the models/index.js

; sign was making error, but after fix the API still wasn't work good.

Second problem was with the models/users.js and ./routes/users.js instead of the id = 1 we had id = 0

After the fix when i trying to get user/"anything.except.1" was working perfectyl, but in user/1 insted of the user data we get null, 
because require function in routes/user.js always takes index.js file frist from the path we choose "./modules/ "
I delated get:id function and replace it with the const users = require ('./users.js'), 
then ./routes/users.js takes id data from ./modules/user.js throught ./modules/index.js. require .
After fixes API works perfectly


## Create something whilst learning something new

For this task you will need your personal account in AWS. Please create one if you don't have it yet (do not worry about costs, everything you do here will covered by AWS Free Tier).

- Create a REST API in AWS API Gateway.
- Create 2 HTTP methods in the API: GET & POST.
- Create a DynamoDB Table (keep provisioned WCU & RCU low to stay within Free Tier, 2 will be OK) and name it "users". It should consist only of a parition key (hash key) which is "user_id".
- Create a lambda function and integrate it with the API POST method. In the JSON body of HTTP POST request, user should be able to specify his first name and age. Lambda should take provided body and insert it into your DynamoDB table as a new item. Value for user_id column should be generated as a random GUID and returned to the caller in the response.
- Create second lambda function and integrate it with the API GET method. GET method should take a user_id as path parameter. Lambda should lookup the DynamoDB table (using **query** method!) and either return user or 404 status code if it doesn't exist.

Please create a new GitLab/GitHub repository, upload your lambda code in there and share link to the repo with us.
Repository should also contain a README.md with URLs to your API GET & POST methods and explanation about how to use them (exact paths, example body for POST method).



I created the REST API, with AWS API GATEWAY, then in the API i creatred the GET and POST METHODS
After this i created the DynamoDB Table with parition key "user_id" and string format of data
I had the problem with creating the lambda functions
