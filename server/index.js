const express = require('express');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db;
//let db = require('../database/mysql/models.js');
//let db = require('../database/mongo/models.js');

const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
     readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo/models.js');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql/models.js');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })

});

app.get("/api/cows", (req, res) => {
  db.fetch((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
})
app.post("/api/cows", (req, res) => {
  db.addCow(req.body, (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
})
app.put("/api/cows", (req, res) =>{
  db.editCow(req.body,  (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
})

app.delete("/api/cows", (req, res) => {
  db.deleteCow(req.query.id, (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  })
})