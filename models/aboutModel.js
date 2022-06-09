const pool = require("../config/database");

class AboutMe {
  async GetAboutMe() {
    return new Promise(async (resolve, reject) => {
      const sql = "SELECT * FROM ernestAbout";
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