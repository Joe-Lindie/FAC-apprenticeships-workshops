const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");
const { response } = require("../server.js");

test("/submit route responds to POST requests", async () => {
  const app = server.listen(9876);

  const response = await fetch("http://localhost:9876/submit", {
    method: "POST",
    body: "name=oli",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /thanks for submitting, oli/);
});

// Recieved a 'bad option' error message in console when running 'node --tests'
// When I run 'node --test' (With no 's') it runs all the test files inside the tests folder.
