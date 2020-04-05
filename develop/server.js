const express = require('express');
const path = require ('path');
let app = express();
const fs = require('fs');


let noteData = require ('Note-Taker/develop/db/db.json');
const PORT = process.env.PORT || 4040;




app.use(express.static("develop/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Basic route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get(".develop/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  app.get("./api/notes", function(req, res) {
    return res.json(noteData);
  });
  
  app.post('/api/notes', (req, res) => {
    noteData.push(req.body);
    noteData.forEach((note, i) => {
        note.id = i + 1;
    })
    let newNote = JSON.stringify(noteData);
    fs.writeFileSync('Note-Taker/develop/db/db.json', newNote);
   
    res.json(noteData);
})

app.delete('/api/notes/:id', (req,res)=>{
  let filtered= noteData.filter(note=>note.id !==parseInt(req.params.id));
  console.log(filtered)
  fs.writeFileSync('Note-Taker/develop/db/db.json', JSON.stringify(filtered))

  res.send('localhost:4040/notes');
})


  


app.listen(PORT, function(){
    console.log("App listining on PORT " + PORT);
});