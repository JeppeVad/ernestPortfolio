var ProjectList = require("../models/projectModel");
let getTablesData = require("../models/getModel");

const indexView = (req, res) => {
  // Renders the index view with the projectList from the database
  const projectList = new ProjectList();
  projectList.GetProjects().then(result => {
    res.render("index", { 
      title: "Ernest", 
      layout: "./layouts/full-width", 
      projects: result 
    });
  });
};


// //This a test 
// const indexView = (req, res) => {
//   // Renders the index view with the projectList from the database
//   const getTable = new getTablesData(req);
//   getTable.GetAllFromTable().then(result => {
//     res.render("index", { 
//       title: "Ernest", 
//       layout: "./layouts/full-width", 
//       projects: result 
//     });
//   });
// };



// Render about me page
const aboutView = (req, res) => {
  res.render("about", { 
    title: "About Me",
    layout: "./layouts/full-width"
  });
};

// Render projects page
const projectsView = (req, res) => {
  res.render("projects", {
    title: "Projects",
    layout: "./layouts/full-width"
  });
};

// Render contact page
const contactView = (req, res) => {
  res.render("contact", {
    title: "Contact",
    layout: "./layouts/full-width"
  });
};

module.exports = {
  indexView,
  aboutView,
  projectsView,
  contactView
}; 