const express = require("express");

const server = express();
module.exports = server;

server.get("/", (request, response) => {
  response.send("NOW CHANGE TO THIS, just to check");
});
//console.log(process.env.TEST);
