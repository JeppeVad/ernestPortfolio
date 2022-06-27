var getTablesData = require("../models/getModel");
const xml2js = require("xml2js");
const fs = require("fs");


const indexView = (req, res) => {
  res.render("index", {
    title: "Ernest",
    layout: "./layouts/full-width",
  });
};

//Render projects page
const projectsView = (req, res) => {
  const getTable = new getTablesData(); // object with model of getTablesData
  let scientificData = getTable
    .GetAllFromTable("scientific_output")
    .then((result) => {
      scientificData = result;
    });
  let areasOfExpertiseData = getTable
    .GetAllFromTable("areas_of_expertise")
    .then((result) => {
      areasOfExpertiseData = result;
    });
  getTable.GetAllFromTable("ernestprojects").then((result) => {
    res.render("projects", {
      title: "Projects & publications",
      layout: "./layouts/full-width",
      projectsOutput: result,
      scientificOutput: scientificData,
      AreasOfExpertiseOutput: areasOfExpertiseData,
    });
  });
};

// Render contact page
const contactView = (req, res) => {
  const getContactTable = new getTablesData();
  getContactTable.GetAllFromTable("contactinfo").then((result) => {
  res.render("contact", {
    title: "Contact",
    layout: "./layouts/full-width",
    contactOutput: result,
  });
  });
};

const aboutView = (req, res) => {
  
  res.render("about", {
    title: "About",
    layout: "./layouts/full-width",
  });
}

const publicationsView = (req, res) => { 
  fs.readFile('doc\\ErnestTenientePublicationsData.xml', 
  function(err, data) { 
    if (err) throw err;
    const parser = new xml2js.Parser();
    parser.parseStringPromise(data)
      .then(function(response){       // author[0]._ == name of author
        console.log(response.dblpperson.r[6].article[0].title[0]._);
        res.render("publications", {
          title: "Publications",
          layout: "./layouts/full-width",
          publicationsOutput: response,
        });
      }).catch(function(err){
        console.log(err);
      }
    );
  });
  

  
}

module.exports = {
  indexView,
  projectsView,
  contactView,
  aboutView,
  publicationsView, 
};
