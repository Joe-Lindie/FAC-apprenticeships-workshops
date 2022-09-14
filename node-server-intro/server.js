const express = require("express");

const server = express();
module.exports = server;

server.get("/", (request, response) => {
  response.send("CHANGE TO THIS");
});
