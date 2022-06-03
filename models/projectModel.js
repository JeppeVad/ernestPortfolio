const pool = require("../config/database");

// model for selecting data from ernestProjects
class ProjectList {
  // constructor() {}

  async GetProjects() {
    var sql = "SELECT * FROM ernestprojects";
    pool.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    return result;

    });
}
}
module.exports = ProjectList;
