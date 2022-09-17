const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");

test("home route returns expected page", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.equal(body, "NOW CHANGE TO THIS, just to check");
});

// Recieved a 'bad option' error message in console when running 'node --tests'
// When I run 'node --test' (With no 's') it runs all the test files inside the tests folder.
