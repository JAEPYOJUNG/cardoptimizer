var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app = express();

// DB setting
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });


var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type');
  next();
});

//kakao login settings
// app.use((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
// });


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

//tmp login
app.use("/welcome_after_login", require("./routes/home"));


// API
app.use('/api/mycardlists', require('./api/mycardlists'));



app.listen(process.env.PORT || 3000, function(){
     console.log('App Listening on port 3000');
});
