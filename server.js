const express = require('express');
const path = require ('path');
let app = express();
const fs = require('fs');


let noteData = require ('./db/db/db.json');

const PORT = process.env.PORT || 4040;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function(){
    console.log("App listining on PORT " + PORT);
});