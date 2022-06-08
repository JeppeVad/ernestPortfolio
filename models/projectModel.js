const pool = require("../config/database");
// model for selecting projectList from database
class ProjectList {
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
  }
}
module.exports = ProjectList;