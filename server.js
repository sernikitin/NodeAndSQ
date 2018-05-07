var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var connection = require("./config/connection.js")
var routes = require("./controllers/burgers_controller.js")
// Sets up the Express App
// =============================================================
var app = express();
var exphbs = require("express-handlebars");
var db = require("./models/");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes)
app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// =============================================================
var PORT = 3334;

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT||PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

});
