let database = require("./dbindex.js");


module.exports = {
  fetch: (callback) => {
    database.query(`SELECT * FROM cows`, (err, data) => {
      callback(err, data);
    })
  },
  addCow: (input, callback) => {
    database.query(`INSERT INTO cows (cow_name, cow_description) VALUES ("${input.name}","${input.description}")`, (err, data) => {
      callback(err, data);
    })
  },
  editCow: (input, callback) => {
    database.query(`UPDATE cows SET cow_name="${input.name}", cow_description="${input.description}" WHERE _id=${input.id}`, (err, data) => {
      callback(err, data);
    })
  },
  deleteCow: (input, callback) => {
    database.query(`DELETE FROM cows WHERE _id=${input}`,(err, data) => {
      callback(err, data);
    })
  }
};