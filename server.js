const express = require('express');
const apiRoutes = require ('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');

//
let app = express();

const PORT = process.env.PORT || 4040;

//let noteData = require ('./db/db/db.json');




app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, function(){
    console.log("App listining on PORT " + PORT);
});