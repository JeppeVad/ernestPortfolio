const { redirect } = require("express/lib/response");
let getTablesData = require("../models/getModel");

//This a test
const indexView = (req, res) => {
  // Renders the index view with the projectList from the database
  res.render("index", {
    title: "Ernest",
    layout: "./layouts/full-width",
  });
};

// Render about me page
const aboutView = (req, res) => {
  const getTable = new getTablesData();
  getTable.GetAllFromTable("aboutme").then((result) => {
    res.render("about", {
      title: "About Me",
      layout: "./layouts/full-width",
      aboutMe: result,
    });
  });
};

const getDataFrom = (table, req, res) => {
  const getTable = new getTablesData();
  return new Promise((resolve, reject) => {
    getTable.GetAllFromTable(table).then((result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

//Render projects page
const projectsView = (req, res) => {
  const getScientificTable = new getTablesData();
  let scientificData = getScientificTable
    .GetAllFromTable("scientific_output")
    .then((result) => {
      scientificData = result;
    });
  const getAreasOfExpertiseTable = new getTablesData();
  let areasOfExpertiseData = getAreasOfExpertiseTable
    .GetAllFromTable("areas_of_expertise")
    .then((result) => {
      areasOfExpertiseData = result;
    });
  const getProjectsTable = new getTablesData();
  getProjectsTable.GetAllFromTable("ernestprojects").then((result) => {
    res.render("projects", {
      title: "Projects & publications",
      layout: "./layouts/full-width",
      projects: result,
      scientificOutput: scientificData,
      AreasOfExpertiseOutput: areasOfExpertiseData,
    });
  });
};

// Render projects page
// const projectsView = (req, res) => {
//   const getTable = new getTablesData();
//   getTable.GetAllFromTable("ernestprojects").then(result => {
//     res.render("projects", {
//       title: "Projects & publications",
//       layout: "./layouts/full-width",
//       projects: result,
//       scientific: result
//     });
//   });
// };

// Render contact page
const contactView = (req, res) => {
  res.render("contact", {
    title: "Contact",
    layout: "./layouts/full-width",
  });
};

module.exports = {
  indexView,
  aboutView,
  projectsView,
  contactView,
};
