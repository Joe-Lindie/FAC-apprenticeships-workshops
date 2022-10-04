const { Layout } = require("../templates.js");

function get(req, res) {
  const title = "Create an account";
  const content = /*html*/ `
    <div class="Cover">
      <h1>${title}</h1>
      <form method="POST" class="Row">
        <div class="Stack" style="--gap: 0.25rem">
          <label for="email">email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="Stack" style="--gap: 0.25rem">
          <label for="password">password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button class="Button">Sign up</button>
      </form>
    </div>
  `;
  const body = Layout({ title, content });
  res.send(body);
}

///////////////

// CHALLENGE 2: SIGN UP

/////////////////

//Use the bcryptjs library to hash the password the user submitted
const bcrypt = require("bcryptjs");

//Import functions needed
const { createSession } = require("../model/session");
const { createUser } = require("../model/user");

function post(req, res) {
  const { email, password } = req.body;
  //console.log(req.body);
  if (!email || !password) {
    res.status(400).send("Bad input");
  } else {
    //bcryptjs library to hash the password
    bcrypt.hash(password, 12).then((hash) => {
      //Insert a new user into the DB
      const user = createUser(email, hash);
      //console.log(user);
      // {id:20}

      //Insert a new session into the DB
      const session_id = createSession(user.id);
      //console.log(session_id)
      //20

      //Set a signed sid cookie containing the session ID
      res.cookie("sid", session_id, {
        signed: true,
        httpOnly: true, // not sure of meaning...?
        maxAge: 6000, // time in seconds.
        sameSite: "lax", // not sure of meaning...?
      });

      //Redirect to the new user's confession page
      res.redirect(`/confessions/${user.id}`);
    });
  }
}

/**
 * [1] Hash the password
 * [2] Create the user in the DB
 * [3] Create the session with the new user's ID
 * [4] Set a cookie with the session ID
 * [5] Redirect to the user's confession page (e.g. /confessions/3)
 */

module.exports = { get, post };
