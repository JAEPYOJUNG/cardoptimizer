var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app = express();

// DB setting
// mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
mongoose.connect( "mongodb://jaepyo:1234@ds129146.mlab.com:29146/billing_managements" , { useMongoClient: true });


var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Routes
app.use("/", require("./routes/home"));
app.use("/contacts", require("./routes/contacts"));
app.use("/mycardlists", require("./routes/mycardlists"));
app.use("/CreditCardIssuerList", require("./routes/CreditCardIssuerList"));
app.use("/posts", require("./routes/posts"));



// Port setting
// var port = 3000;
// app.listen(port, function(){
//   console.log("server on! http://localhost:"+port);
// });

app.listen(process.env.PORT || 5000, function(){
     console.log('App Listening on port 5000');
});
