var getTablesData = require("../models/getModel");
const xml2js = require("xml2js");
const fs = require("fs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let dataObject = this.responseText;
      const parser = new xml2js.Parser();
      parser.parseStringPromise(dataObject).then(function(response) {
        res.render("publications", {
          title: "Publications",
          layout: "./layouts/full-width",
          publicationsOutput: response,
        });
      })
    }
  }
  xhttp.open("GET", "https://dblp.uni-trier.de/pid/t/ErnestTeniente.xml", true);
  xhttp.send();

}

module.exports = {
  indexView,
  projectsView,
  contactView,
  aboutView,
  publicationsView, 
};
