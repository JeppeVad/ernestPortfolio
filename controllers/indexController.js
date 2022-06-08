var ProjectList = require("../models/projectModel");

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

module.exports = {
  indexView
}; 