let database = require("./index.js");
module.exports = {
  fetch: (callback) => {
    database.find({}, (err, data) => {
      callback(err, data);
    })
  },
  addCow: (input, callback) => {
    database.create({cow_name: input.name, cow_description: input.description}, (err, data) =>{
      callback(err, data);
    })
  },
  editCow: (input, callback) => {
    database.update({_id: input.id}, {cow_name: input.name, cow_description: input.description}, (err, data) => {
      callback(err, data);
    })
  },
  deleteCow: (input, callback) => {
    database.deleteOne({_id: input}, (err, data) => {
      callback(err, data);
    })
  }

}