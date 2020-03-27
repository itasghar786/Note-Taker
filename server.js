const express = require("express");
const path = require ('path');
const fs = require('fs');
let app = express();

let notes = require ('./develop/db/db.json');

let PORT = 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// empty notes





//Basic route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  


  // Displays all characters 
app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });
  
  
  


        app.post("/api/notes", function(req, res) {
    
    var newNotes = req.body;
    console.log(newNotes);
            notes.push(newNotes);
                res.json(newNotes);
  });



app.listen(PORT, function(){
    console.log("App listining on PORT " + PORT);
});