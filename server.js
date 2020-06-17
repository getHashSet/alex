const codeName = "project_alex";
const databaseName = "alex_db";
const appName = "client"; // this is the name of the React app and not the program itself
// ======== //
//   .env   //
// ======== //
if (process.env.NODE_ENV !== "production") {
  // console.log('loading dev environments')
  require("dotenv").config();
}

// ================ //
//   DEPENDENCIES   //
// ================ //

const express = require("express"); // this produces our routes
const morgan = require("morgan"); // provides helpful data in the server side console log
const bodyParser = require("body-parser"); // format morgan data
const path = require("path"); // helps build url's from the current files location
const app = express(); // asign express to a variable
// const routes = require("./controllers"); // controllers for all server side end-points.
// const session = require("express-session"); // cookie managment
// const passport = require("./utils/passport");
// const MongoStore = require("connect-mongo")(session); // mongoDB and security
// const mongoose = require("mongoose"); // mongoDB

// ========= //
//   PORTS   //
// ========= //

const PORT = process.env.PORT || process.env.HTTP_PORT || 4001;

// ============== //
//   MIDDLEWARE   //
// ============== //

app.use(morgan("dev")); // this will display logs in the server side terminal
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// ================ //
//     PASSPORT     //
// ================ //

// app.use(passport.initialize());
// app.use(passport.session()); // will call the deserializeUser

// ============ //
//   DATABASE   //
// ============ //

// mongoose
//   .connect(
//     process.env.MONGODB_URI || `mongodb://localhost/${databaseName}`, // there are multiple instances of databaseName around the app. Search all if you are going to remove it.
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .catch((err) => {
//     // console.log(err);
//   });

// app.use(
//   session({
//     secret: process.env.APP_SECRET || "this is the default passphrase",
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// ============== //
//   PRODUCTION   //
// ============== //

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ============== //
//   CONTROLLER   //
// ============== //

app.use(routes);

// ====================== //
//   REACT APP | CLIENT   //
// ====================== //

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, `./${appName}/build/index.html`)); // npm run build to create a build. App name is client.
});

// ========= //
//   ERROR   //
// ========= //

// res.static is not suppoted with AWS
// app.use(function (err, req, res, next) {
//   res.static(500);
// });

// ================ //
//   START SERVER   //
// ================ //

app.listen(PORT, () => {
  console.log(`--------------------------------------`);
  console.log(`  ${codeName} listening on PORT: ${PORT}  `);
  console.log(`--------------------------------------`);
});
