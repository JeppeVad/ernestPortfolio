const { resolveInclude } = require("ejs");
const pool = require("../config/database");

const mysql = require("mysql2/promise");
const { promiseImpl } = require("ejs");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ernestportfolio"
});


// model for selecting data from ernestProjects
class ProjectList {
  constructor() {}

  async GetProjects() {

    return new Promise(async (resolve, reject) => {
      let sql = "SELECT * FROM ernestProjects";
      pool.query(sql, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });







    // var sql = "SELECT * FROM ernestprojects";
  
    // pool.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    // // return result;    
    //   Promise.resolve(result);
    // });
  }
}
module.exports = ProjectList;
