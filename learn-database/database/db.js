const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const Database = require("better-sqlite3");

// Read up on process.env.

//Node makes environment variables available via the global process.env object. So we could read that TEST variable using this JS:

const db = new Database(process.env.DB_FILE);
// console.log(db);

const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

module.exports = db;

// Import tasks.js here
// OR run: node model/tasks.js

// .run() when you don’t need a result
// .get() when you expect a single row
// .all() when you want to get all rows matching the query.
