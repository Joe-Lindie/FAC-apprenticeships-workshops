const express = require("express");

const server = express();
module.exports = server;

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded();

server.post("/submit", bodyParser, (request, response) => {
  const name = request.body.name;
  response.redirect(`/submit/success?name=${name}`);
});

server.get("/submit/success", (request, response) => {
  const name = request.query.name;
  response.send(`<p>Thanks for submitting, ${name}</p>`);
});

//Express will set the staus code to 200 by default.
//Unless 'response.status(status code)' is set

// I don't understand "response.set()"

//HTML Body section, why do you need to amend the test?
// The REGEX will search for the work 'Hello'
