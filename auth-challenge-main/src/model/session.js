const db = require("../database/db.js");
const crypto = require("node:crypto");

///////////////

// CHALLENGE 1: CREATE SESSIONS
// ANSWER 1

/////////////////

// const insert_session = db.prepare(/*sql*/ `
//     INSERT INTO sessions VALUES (
//       $id,
//       $user_id,
//       DATE('now', '+7 days'),
//       DATE()
//     )`);

///////////////

// ANSWER 2
// The created_at column is automatically created in the schema.sql file so no need to INSERT it again???

/////////////////

// const insert_session = db.prepare(/*sql*/ `
//   INSERT INTO sessions (id, user_id, expires_at, created_at)
//     VALUES ( $id, $user_id, DATE('now', '+7 days'), DATE())
//     `);

///////////////

// ANSWER 3

/////////////////

const insert_session = db.prepare(/*sql*/ `
  INSERT INTO sessions (id, user_id, expires_at) 
    VALUES ( $sid, $user_id, DATE('now', '+7 days'))
    `);

function createSession(user_id) {
  // quick way to generate a random string in Node
  const sid = crypto.randomBytes(18).toString("base64");
  // console.log(sid); returned random string

  insert_session.run({ sid, user_id });
  //console.log({ sid, user_id });

  // return the generated ID so we can store in a cookie
  return sid;
}

const select_session = db.prepare(/* sql */ `
  SELECT id, user_id, expires_at
  FROM sessions WHERE id = ?
`);

function getSession(sid) {
  return select_session.get(sid);
}

const delete_session = db.prepare(`
  DELETE FROM sessions WHERE id = ?
`);

function removeSession(sid) {
  return delete_session.run(sid);
}

module.exports = { createSession, getSession, removeSession };
