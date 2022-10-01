const db = require("./database/db.js");

// 1-  List the names of all cohorts that took place in Finsbury Park.

const select_cohorts_in_finsbo = db.prepare(/*sql*/ `
  SELECT name FROM cohorts
  WHERE location = 'Finsbury Park'
`);

function listCohortsInFinsbo() {
  return select_cohorts_in_finsbo.all();
}

// 2- List the usernames of all students who attended FAC in Finsbury Park.

const select_students_in_finsbo = db.prepare(/*sql*/ `
  -- [2]
  SELECT students.username FROM students 
  JOIN cohorts ON cohorts.name = students.cohort_name
  WHERE cohorts.location = 'Finsbury Park'
`);

function listStudentsInFinsbo() {
  return select_students_in_finsbo.all();
}

//3-  List the username of each student along with the location of their cohort.

const select_students_with_location = db.prepare(/*sql*/ `
  -- [3]
  SELECT students.username, cohorts.location  FROM students
  JOIN cohorts ON cohorts.name = students.cohort_name 
`);

function listStudentsWithLocation() {
  return select_students_with_location.all();
}

//List all project names with the usernames of the students who worked on them.

// [{username: name_of_student, project name: name of project }]

const select_students_with_projects = db.prepare(/*sql*/ `
  -- [4]
  SELECT students_projects.project_id from students_projects
`);

function listStudentsWithProjects() {
  return select_students_with_projects.all();
}
console.log(listStudentsWithProjects);

// const select_students_with_projects_in_finsbo = db.prepare(/*sql*/ `
//   -- [5]
// `);

// function listStudentsWithProjectsInFinsbo() {
//   return select_students_with_projects_in_finsbo.all();
// }
// SELECT students_projects.username, projects.name
// FROM students JOIN projects
// ON students.project_id = projects.id
module.exports = {
  listCohortsInFinsbo,
  listStudentsInFinsbo,
  listStudentsWithLocation,
  listStudentsWithProjects,
  // listStudentsWithProjectsInFinsbo,
};
