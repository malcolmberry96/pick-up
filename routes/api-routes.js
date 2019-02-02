// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the members page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
      // res.json("/members");
      console.log("Successfully logged-in.");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // app.post("/api/signup", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(function() {
  //     res.redirect(307, "/api/login");
  //   }).catch(function(err) {
  //     console.log(err);
  //     res.json(err);
  //     // res.status(422).json(err.errors[0].message);
  //   });
  // });

  // // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   }
  //   else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });
  
    // client signup route
    app.post("/api/client-signup", (req, res) => {
        console.log(JSON.stringify(req));
        console.log(JSON.stringify(req.newClient));
        db.Client.create({
            first_name: req.newClient.firstName,
            last_name: req.newClient.lastName,
            phone_number: req.newClient.phoneNumber,
            email: req.newClient.email,
            user: {
                username: req.newClient.username,
                password: req.newClient.password,
                user_type: "client"
            }
        }, {
            include: [db.Client.User]
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    });
  
    // driver signup route
    app.post("/api/driver-signup", (req, res) => {
        console.log(JSON.stringify(req));
        console.log(JSON.stringify(req.newDriver));
        db.Vehicle.create({
            make: "Toyota",
            model: "Camry",
            vehicle_year: 2010,
            color: "black",
            license_plate: "abc1234",
            driver: {
                first_name: req.newDriver.firstName,
                last_name: req.newDriver.lastName,
                phone_number: req.newDriver.phoneNumber,
                email: req.newDriver.email,
                user: {
                    username: req.newDriver.username,
                    password: req.newDriver.password,
                    user_type: "driver"
                }
            }
        }, {
            include: [{
                association: db.Vehicle.Driver,
                include: [db.Driver.User]
            }]
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    });
};
