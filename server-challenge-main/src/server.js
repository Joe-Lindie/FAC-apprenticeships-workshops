const express = require("express");

const server = express();

module.exports = server;

//CHALLENGE 1

//Create a new route for the homepage at GET /. It should return an HTML body including a <h1>Hello Express</h1>.

server.get("/", (request, response) => {
  response.send(
    ` <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
      <h1>Hello Express</h1>
      </body>
    </html>
    `
  );
});

//CHALLENGE 2

// Create a new route at GET /colour. It should check the URL's search parameters for a hex property. If present the returned HTML page should have its <body> element's background-color set to the hex value. E.g. this request GET /colour?hex=ff0000 should result in an HTML page with a red background. If hex is not present the background should be white.

//  HTML pages can include inline <style> tags...

server.get("/colour", (request, response) => {
  let hex = request.query.hex || "FFFFFF";

  if (hex === undefined) {
    hex = "FFFFFF";
  }

  response.send(
    ` <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Home</title>
          </head>
          <body style ="background-colour: #${hex}">
          <h1>Hello Express</h1>
          </body>
        </html>
        `
  );
});

// server.js

// server.get("/search", (request, response) => {
//     const keyword = request.query.keyword;
//     response.send(`<p>You searched for ${keyword}</p>`);
//   }
