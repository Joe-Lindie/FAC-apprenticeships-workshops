const test = require("node:test");
const assert = require("node:assert");
const server = require("../server");

test("the test works", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  assert.equal(response.status, 200);

  const body = await response.text();
  assert.equal(body, "NOW CHANGE TO THIS, just to check");
});