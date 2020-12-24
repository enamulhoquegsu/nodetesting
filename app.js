const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
const today = require(__dirname + "/date.js");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));

let electronicItems = [];
let jobs = [];
let housings = [];


// Get request
app.get("/", function(req, res){
  res.render("index", {
    currentDate : today.getDay(),
    category : "Electronics",
    items : electronicItems
  });
});  // end of get method.....

// POST method
app.post("/", function(req, resp){
  console.log("first " + req.body.submit);
  console.log("first " + req.body.item);
  if (req.body.submit === "Electronics") {
    let item = req.body.item;
    console.log("Electronics " + req.body);
    electronicItems.push(item);
    resp.redirect("/");
  }else if (req.body.submit === "Jobs") {
    let item = req.body.item;
    console.log("job " + req.body);
    jobs.push(item);
    resp.redirect("/job");
  }else if (req.body.submit === "Housing"){
    let item = req.body.item;
    housings.push(item);
    resp.redirect("/housing");
  }

  else{
    console.log(req.body.submit);
    console.log(req.body.item);
  }

}); // end of POST

// GET method  && POST method for JOB
app.get("/job", function(req, resp){
  resp.render("index", {
    currentDate : today.getDay(),
    category : "Jobs",
    items : jobs
  });
});

app.post("/job",function(req, resp){
  resp.redirect("/job");
});

// GET method  && POST method for Housing
app.get("/housing", function(req, resp){
  resp.render("index", {
    currentDate : today.getDay(),
    category : "Housing",
    items : housings
  })
});

app.post("/housing", function(req, resp){
  resp.redirect("/housing");
});


app.listen(3000, function() {
  console.log('app is running on port 3000');

});
