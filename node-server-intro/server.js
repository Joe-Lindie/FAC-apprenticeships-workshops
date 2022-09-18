const express = require("express");

const server = express();
module.exports = server;

const staticHandler = express.static("public");
server.use(staticHandler);

server.get("/", (request, response) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
        <link rel="stylesheet" href="/style.css>
      </head>
      <body>
        <h1>Hello</h1>
      </body>
    </html>
  `);
});

//console.log(process.env.TEST);

//Express will set the staus code to 200 by default.
//Unless 'response.status(status code)' is set

// I don't understand "response.set()"

//HTML Body section, why do you need to amend the test?
// The REGEX will search for the work 'Hello'
