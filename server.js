// setting up express app with http server for socket io setup
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

//passport dependencies
const session = require("express-session");
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
let PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/sockets.js")(io, app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  http.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

// db.Vehicle.create({
//   make: "Toyota",
//   model: "Camry",
//   vehicle_year: 2010,
//   color: "black",
//   license_plate: "abc1234",
//   driver: {
//     first_name: "Pedro",
//     last_name: "Galan",
//     phone_number: "123-123-1234"
//   }
// },{
//   include: [db.Vehicle.Driver]
// });