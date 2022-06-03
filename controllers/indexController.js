// For index View sending path to other layout than default

var ProjectList = require("../models/projectModel");

const indexView = (req, res) => {

  res.render("index", { title: "Ernest", layout: "./layouts/full-width" });
};


const getProjects = (req, res) => {
  const projectList = new ProjectList();

  projectList.GetProjects().then(result => {
    res.render("index", { title: "Ernest", layout: "./layouts/full-width", projects: result });
    console.log(result);
  });

};



module.exports = {
  indexView,
  getProjects,
};
