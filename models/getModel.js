const pool = require("../config/database");

class GetAllFromTable {
  async GetAllFromTable(table) {
    return new Promise(async (resolve, reject) => {
      const sql = `SELECT * FROM ${table}`;
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
module.exports = GetAllFromTable;