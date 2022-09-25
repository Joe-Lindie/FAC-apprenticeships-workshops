const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const database = require("better-sqlite3");

const db = new database(process.env.DB_FILE);
//console.log(db);

/////////////////////////

// Examples of selecting contect from table

/////////////////////////

// const select_date = db.prepare("SELECT DATE()");
// const result = select_date.get();
// console.log(result);

// const select_table = db.prepare("SELECT name FROM sqlite_schema");
// const result = select_table.all();
// console.log(result);

/////////////////////////

// Examples of selecting contect from table

/////////////////////////

const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

//.run() when you don’t need a result
//.get() when you expect a single row
//.all() when you want to get all rows matching the query.

module.exports = db;
