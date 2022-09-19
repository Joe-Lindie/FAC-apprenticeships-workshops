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

// How do search parementer work? request.query.hex;

// server.get("/colour", (request, response) => {
//   let hex = request.query.hex;

//   if (hex === undefined) {
//     hex = "0000FF"; //hex for white #ffffff
//   }

//   response.send(
//     ` <!doctype html>
//         <html>
//           <head>
//             <meta charset="utf-8">
//             <title>Home</title>
//           </head>
//           <body>
//           <style>
//             body { background-color: #${hex}}
//           </style>
//           <h1>Hello Express</h1>
//           </body>
//         </html>
//   `
//   );
// });

//CHALLENGE 3

// Edit your GET /colour route to include a form in the HTML response. This form should include an input for the user to type in a hex code.

//When the form is submitted a GET request will be sent to the same route, which will change the background of the page to whatever the user entered.

//Comment out challenge 2
// Re write challenger 2
// Add form tags to HTML response
// Add input tag inside form
// add get request to form

server.get("/colour", (request, response) => {
  let hex = request.query.hex;

  if (hex === undefined) {
    hex = "ffffff"; //hex for white #ffffff
  }

  response.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

       <style>
            body { background-color: #${hex}}
       </style>

    <h2>Enter HEX to change background colour</h2>

    <form action="/colour" method="GET">
    <label for="colour">colour</label>
      <input id="colour" type="text" name="hex" />
      <button>HEX</button>
    </form>

  </body>
</html>

 `);
});
