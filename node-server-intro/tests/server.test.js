const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");
const { response } = require("../server.js");

test("/search returns message including keyword", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876/search?keyword=bananas");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /You searched for bananas/);
});

// Recieved a 'bad option' error message in console when running 'node --tests'
// When I run 'node --test' (With no 's') it runs all the test files inside the tests folder.
