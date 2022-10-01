const db = require("./database/db.js");

//////////////////////

//Challenge 1

// List the names of all cohorts that took place in Finsbury Park.

//////////////////////

const cohortsInFinsburyPark = db.prepare(/*sql*/ `
  SELECT name FROM cohorts
  WHERE location = 'Finsbury Park'
`);

function listCohortsInFinsbo() {
  return cohortsInFinsburyPark.all();
}
//Expected [ { name: '14' }, { name: '15' }, { name: '16' }, { name: '17' } ]

//////////////////////

//Challenge 2

// List the usernames of all students who attended FAC in Finsbury Park.

//////////////////////

const usernameFacFinsbury = db.prepare(/*sql*/ `
    SELECT students.username FROM students
    JOIN cohorts ON cohorts.name = students.cohort_name
    WHERE cohorts.location = 'Finsbury Park'
`);

function usernameFinsburyPark() {
  return usernameFacFinsbury.all();
}
//Expected [{username: 'blah'}, {username: 'blah'}]

//////////////////////

//Challenge 3

// List the username of each student along with the location of their cohort.

//////////////////////

const usernameOfAllStudents = db.prepare(/* sql */ `
    SELECT students.username, cohorts.location FROM students
    JOIN cohorts ON cohorts.name = students.cohort_name
`);

function listStudentsWithLocation() {
  return usernameOfAllStudents.all();
}

//////////////////////

//Challenge 4

// List all project names with the usernames of the students who worked on them.

//////////////////////

const select_students_with_projects = db.prepare(/* sql */ `
    SELECT projects.name, 
    students_projects.student_username AS username
    FROM projects 
    JOIN students_projects 
    ON students_projects.project_id = projects.id
`);

function listStudentsWithProjects() {
  return select_students_with_projects.all();
}

//////////////////////

//Challenge 5

// List all project names with the usernames of the students who worked on them, only for students who attended FAC in Finsbury Park.

//////////////////////

const all_project_names = db.prepare(/* sql */ `
      SELECT 
      projects.name,
      students_projects.student_username AS username
      FROM projects

      JOIN students_projects 
      ON students_projects.project_id = projects.id

      JOIN students ON students.username = students_projects.student_username

`);

function challenge5() {
  return all_project_names.all();
}

console.log(challenge5());

module.exports = {
  listCohortsInFinsbo,
  usernameFinsburyPark,
  listStudentsWithLocation,
  listStudentsWithProjects,
  challenge5,
};
