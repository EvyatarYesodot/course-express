<h1 id="express">Express.js :package:</h1>

After covering the basics of **Node.js**, it's time to move on to the next step: Writing actual server-side interfaces. This is where **Express.js** comes in.

<img src="https://expressjs.com/images/express-facebook-share.png" align="left" alt="JavaScript Logo" width="200"/>

**Express** is an npm package that uses the native Node.js HTTP module to create a server. It is a lightweight framework that provides a set of tools and functionalities for building web applications.

<h2 id="table-of-contents">:scroll: Table of Contents</h2>

- [Express.js :package:](#express)
  - [Table of Contents](#table-of-contents)
  - [Resources](#resources)
  - [Topics](#topics)
  - [Tips and Tricks](#tips-and-tricks)
    - [Read Express.js Best Practices](#read-express-best-practices)
    - [Use Postman](#use-postman)
    - [Handle errors with error middleware](#handle-errors)
  - [Assignment 1: Create A Web Server Without External Libraries Like Express](#assignment-1)
  - [Assignment 2: Express Implementation](#assignment-2)
  - [Additional Resources](#additional-resources)

<h2 id="resources">:books: Resources</h2>

- [What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)
- [Getting started with Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Express.js Video Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)

<h2 id="topics">:clipboard: Topics</h2>

- 🌐 Web Server

  - HTTP/HTTPS
  - Static Web Server
  - Dynamic Web Server
  - API
  - Browser

- 🛤️ Express.js

  - Request Parameters
    - Header
    - Body
    - Params
  - Response Parameters
    - Header
    - Body
    - Status Code
  - `app`
    - `listen`
    - `use`
  - Route Methods
  - `get`
  - `post`
  - `put`
  - `patch`
  - `delete`
  - `all`
  - Route Parameters
    - `Request`
    - `Response`
    - `Next`
  - Router
  - Middlewares
    - Custom middlewares.
    - Third-party middleware.
    - [Error-handler.](https://expressjs.com/en/guide/error-handling.html)
  - Async Middlewares

<h2 id="tips-and-tricks">:bulb: Tips and Tricks</h2>

<h3 id="read-express-best-practices">:pushpin: Read Express.js Best Practices</h3>

[Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)

<h3 id="use-postman">:pushpin: Use Postman</h3>

Use [Postman](https://www.postman.com/) for testing your APIs.

Install using [snap](https://snapcraft.io/postman):

```bash
sudo snap install postman
```

<h3 id="handle-errors">:pushpin: Handle errors with error middleware</h3>

Use [error middleware](https://expressjs.com/en/guide/error-handling.html) to handle errors.

<h2 id='assignment-1'>🎯 Assignment 1: Create A Web Server Without External Libraries Like Express</h2>

Use pure Node.js to create a web server:

1. Create a new Node.js project and initialize it (use `npm init`).
2. Install and initialize `prettier` and `eslint` (like in the previous guide).
3. In a file named `index.js` write a server that will listen on a port received from an **environment variable**.
4. The server will have 2 Routes:
    - **POST - 'api/numbers/prime/validate':** This route will receive a list of numbers in the request body (`body: {numbers: [1,2,3]}`). The server will return true, if **all** the properties in the request body are **prime numbers**. Otherwise, return false.
    - **GET - 'api/numbers/prime?amount=n':** This route will return `n` prime numbers in a list format (e.g. `body: [2,3,5]`). `n` has to be a number between 1-32.

<h2 id='assignment-2'>🎯 Assignment 2: Express Implementation</h2>

Now lets create a server using **Express.js**:

1. Create a new Node.js project and initialize it (use `npm init`).
2. Install and initialize `prettier` and `eslint` (like in the previous guide).
3. In a file named `index.js` write an **Express** server that will listen on a port received from an **environment variable**.
4. The server will have the same 2 Routes from assignment 1 + 1 more:
    - **POST - 'api/numbers/prime/validate':** This route will receive a list of numbers in the request body (`body: {numbers: [1,2,3]}`). The server will return true, if **all** the properties in the request body are **prime numbers**. Otherwise, return false.
    - **GET - 'api/numbers/prime?amount=n':** This route will return `n` prime numbers in a list format (e.g. `body: [2,3,5]`). `n` has to be a number between 1-32.
    - **GET - 'api/numbers/prime/display':** This Route will send an HTML page back with the first 10 prime numbers, each will be display inside a div. use **SSR**.
5. Implement error handling middleware.

<h2 id="additional-resources">:books: Additional Resources</h2>

- [Installing Express](https://expressjs.com/en/starter/installing.html)
- [Hello World Example](https://expressjs.com/en/starter/hello-world.html)
- [Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
- [Serving Static Files](https://expressjs.com/en/starter/static-files.html)
- [Routing](https://expressjs.com/en/guide/routing.html)
- [Writing Middlewares](https://expressjs.com/en/guide/writing-middleware.html)
- [Using Middlewares](https://expressjs.com/en/guide/using-middleware.html)
