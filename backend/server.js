const Product = require("./models/products"),
  User = require("./models/users"),
  path = require("path"),
  express = require("express"),
  middleware = require("./middleware/index"),
  cors = require("cors"), //cross origin resource sharing
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  expressSession = require("express-session");

//need dot env to be able to link to the env file
require("dotenv").config();
seedDB = require("./seed");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

seedDB();

//connect to MongoDB
let url = process.env.ATLASMONGOOSE;
console.log(process.env.ATLASMONGOOSE);
url = url + "productDB";
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
mongoose.set("useFindAndModify", false);
connection.once("open", () => {
  console.log("mongoDB databse established");
});

// Express Session - Run express session with these parameters
app.use(
  expressSession({
    secret: "planter land is magic", // Used to encode and decode session
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// import routes
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
app.use(productRoutes);
app.use(userRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, function() {
  console.log(`Server started at port ${PORT}`);
});
