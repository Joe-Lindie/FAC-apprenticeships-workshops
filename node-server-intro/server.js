const express = require("express");

const server = express();
module.exports = server;

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

//console.log(process.env.TEST);

//Express will set the staus code to 200 by default.
//Unless 'response.status(status code)' is set

// I don't understand "response.set()"

//HTML Body section, why do you need to amend the test?
// The REGEX will search for the work 'Hello'
