var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT||3000;
const fs = require("fs")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let note = [
    {
      name: "Someone Cool",
      content: ""
    }
  ];


//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });


//display notes 

app.get("/api/notes", function(req, res) {
  return res.json(data);
});

//post
app.post("/api/notes", function(req,res){
  let newNote= req.body;

 data.push(newNote);
 res.send("new Note")
})


//server is listening
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });