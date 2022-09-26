const db = require("../database/db.js");

const insert_task = db.prepare(/*sql*/ `
  INSERT INTO tasks (content, complete)
  VALUES ($content, $complete)
  RETURNING id, content, created_at
`);

function createTask(task) {
  return insert_task.get(task);
}

const sendMumFlowers = createTask({ content: "Send mum flowers", complete: 0 });

const eatBanana = createTask({ content: "Eat a banana", complete: 0 });

const select_tasks = db.prepare(/*sql*/ `
  SELECT id, content, TIME(created_at) AS created_at, complete FROM tasks
`);

function listTasks() {
  return select_tasks.all();
}

console.log(listTasks());
//Run: DB_FILE=db.sqlite node model/tasks.js
//OR: "npm start" as file path added to package.json

//////////////

//DELETING A ROW

//////////////

const delete_task = db.prepare(/*sql*/ `
  DELETE FROM tasks WHERE id = ?
`);

function removeTask(id) {
  delete_task.run(id);
}

removeTask(1);
// Once a task has been deleted, has it been removed for ever? When I comment out removeTask(1) and re-run listTasks() the task is still gone.

module.exports = { createTask };
