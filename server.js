// setting up express app with http server for socket io setup
const express = require("express");
const app = express();
const path = require("path");
// const http = require("http").Server(app);
// const io = require("socket.io")(http);

//passport dependencies
const session = require("express-session");
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
let PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/api-routes.js")(app);
// require("./routes/sockets.js")(io, app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

//how to add order to db
// db.Order.create(
//   {
//     start_location: {
//       lng: "29°58'49.3\"N",
//       lat: "95°28'48.2\"W"
//     },
//     end_location: {
//       lng: "30°00'44.1\"N",
//       lat: "95°30'35.4\"W"
//     },
//     load_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam venenatis lobortis. Etiam vel ligula ut libero convallis interdum sed id diam. Suspendisse tincidunt malesuada nulla sed pulvinar. Nulla at euismod sapien. Etiam faucibus iaculis scelerisque. Suspendisse tincidunt est in vulputate suscipit. Aenean rhoncus nunc vel lorem suscipit, in posuere quam gravida. Vivamus blandit faucibus nulla, ac dictum libero ultricies quis. Aliquam vitae mi id velit laoreet elementum. Etiam suscipit auctor tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec consectetur nibh turpis. Cras sollicitudin finibus libero.",
//     vehicle_requirement: "subcompact",
//     status: "pending",
//     client_id: 2
//   }
// );