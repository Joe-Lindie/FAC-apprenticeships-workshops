const express = require("express");

const server = express();

module.exports = server;

//////////////////

//CHALLENGE 1

//////////////////

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

//////////////////

//CHALLENGE 2

//////////////////

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

//////////////////

//CHALLENGE 3

//////////////////

// Edit your GET /colour route to include a form in the HTML response. This form should include an input for the user to type in a hex code.

//When the form is submitted a GET request will be sent to the same route, which will change the background of the page to whatever the user entered.

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

//////////////////

//CHALLENGE 4

//////////////////

// Create a new route GET /cheese. It should return an HTML response containing a form for submitting new cheeses. The form shoudl send POST requests to the same page. It should include a text input for the cheese name and a range input for the cheese's rating (from 0 to 5).

const cheeseArray = [];

server.get("/cheese", (request, response) => {
  let cheeseList = "";

  for (const cheese of cheeseArray) {
    cheeseList += `<li>${cheese.join(" ")} star </li>`;
  }

  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CHALLENGE 4</title>
    </head>

    <body>
      <form action="/cheese" method="POST">

        <label for="cheese">New Cheese</label>
        <input id="cheese" type="text" name="cheese" />
  
        <label for="cheese_rating">Cheese Rating</label>
        <input type="range" id="cheese_rating" name="cheese" min="0" max="5" />
        <button>Submit</button>

        <ul">
          ${cheeseList}
        </ul>
        
      </form>
    </body>
  </html>
  
  `);
});

//////////////////

//CHALLENGE 5

//////////////////

// Create a new route POST /cheese. It should receive the POST request from the previous form and use the built-in Express middleware to read the url-encoded request body.

// It should store each cheese rating in an array outside of the handler function, so other routes can access this information. Once the new rating is pushed to this array it should redirect back to the same page.

// Amend the GET /cheese handler to render a list of cheese ratings that have been submitted.

// Hint: you can dynamically create an HTML list from an array by looping over it with for..of or .map().join("") to create a string. E.g.

// Submitting the form should result in the page reloading and displaying the newly added cheese in the list.

const bodyParser = express.urlencoded();

server.post("/cheese", bodyParser, (request, response) => {
  const cheese = request.body.cheese;
  cheeseArray.push(cheese);

  response.redirect("/cheese");
});
