const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");
const { response } = require("../server.js");

test("/search returns 404 response", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:3000/asdfg");
  app.close();

  assert.equal(response.status, 404);
  const body = await response.text();
  assert.match(body, /Not found/);
});

// Recieved a 'bad option' error message in console when running 'node --tests'
// When I run 'node --test' (With no 's') it runs all the test files inside the tests folder.
