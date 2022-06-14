// const { redirect } = require("express/lib/response");
var getTablesData = require("../models/getModel");

const indexView = (req, res) => {
  // Renders the index view
  res.render("index", {
    title: "Ernest",
    layout: "./layouts/full-width",
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



// Render contact page
const contactView = (req, res) => {
  res.render("contact", {
    title: "Contact",
    layout: "./layouts/full-width",
  });
};

module.exports = {
  indexView,
  projectsView,
  contactView,
};
