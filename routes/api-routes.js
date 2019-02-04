// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request so the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        db.User.findOne({
            where: {
                username: req.body.username
            }
        }).then((response) => {
            if(response !== null) {
                const userType = response.dataValues.user_type;
                console.log(userType);
                switch(userType) {
                    case "driver":
                        return res.json({loginType: "driver"});
                    case "client":
                        return res.json({loginType: "client"});
                    case "dispatch":
                        return res.json({loginType: "dispatch"});
                }
            } else {
                return res.json({loginType: "unauthorized"});
            }
        }).catch((err) => {
            console.log(err);
        });
    });

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
    
    // get dispatch overview
    app.get("/dispatch-overview", (req, res) => {
        db.Driver.findAll()
            .then((response) => {
                console.log(response);
                db.Order.findAll()
                    .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(err);
                    res.status(422).json(err.errors[0].message)
                });
            })
            .catch((error) => {
                console.log(err);
                res.status(422).json(err.errors[0].message)
            });
    });

    // get list of drivers
    app.get("/dispatch-drivers", (req, res) => {
        db.Driver.findAll()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(err);
                res.status(422).json(err.errors[0].message)
            });
    });

    // get list of vehicles
    app.get("/dispatch-vehicles", (req, res) => {
        db.Vehicle.findAll()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(err);
                res.status(422).json(err.errors[0].message)
            });
    });

    //order submit route
    app.post("/submit-order", (req, res) => {
        const newOrder = req.body;
        console.log(newOrder);
        // db.Order.create({
        //     start_location: newOrder.startLocation,
        //     end_location: newOrder.endLocation,
        //     load_description: newOrder.loadDescritpion,
        //     vehicle_requirement: newOrder.vehicleRequirement,
        //     status: newOrder.status,
        //     client_id: newOrder.clientId,
        //     driver_id: newOrder.driverId
        // }).then((response) => {
        //     console.log(response);
            // res.json({success: "New order was successfully submitted."});
        // }).catch((error) => {
        //     console.log(error);
            // res.json({error: "There was an error creating submitting the new order."});
        // });
    });
  
    // client signup route
    app.post("/client-signup", (req, res) => {
        const newClient = req.body;
        db.User.findOne({
            where: {
                username: newClient.username
            }
        }).then((response) => {
            if(response === null) {
                db.Client.create({
                    first_name: newClient.firstName,
                    last_name: newClient.lastName,
                    phone_number: newClient.phoneNumber,
                    email: newClient.email,
                    user: {
                        username: newClient.username,
                        password: newClient.password,
                        user_type: "client"
                    }
                }, {
                    include: [db.Client.User]
                }).then((_) => {
                    res.json({success: "Your account was successfully created."});
                }).catch((err) => {
                    console.log(err);
                    res.status(422).json(err.errors[0].message)
                });
            } else {
                res.json({warning: "That username already exists. Please choose a new username."});
            }
        }).catch((err) => {
            console.log(err);
        });
    });
  
    // driver signup route
    app.post("/driver-signup", (req, res) => {
        const newDriver = req.body;
        db.User.findOne({
            where: {
                username: newDriver.username
            }
        }).then((response) => {
            if(response === null) {
                db.Vehicle.create({
                    make: newDriver.vehicleMake,
                    model: newDriver.vehicleModel,
                    vehicle_year: newDriver.vehicleYear,
                    color: newDriver.vehicleColor,
                    license_plate: newDriver.licencePlate,
                    driver: {
                        first_name: newDriver.firstName,
                        last_name: newDriver.lastName,
                        phone_number: newDriver.phoneNumber,
                        user: {
                            username: newDriver.username,
                            password: newDriver.password,
                            user_type: "driver"
                        }
                    }
                },{
                    include: [{
                        association: db.Vehicle.Driver,
                        include: [db.Driver.User]
                    }]
                }).then((_) => {
                    res.json({success: "Your account was successfully created."});
                }).catch((err) => {
                    console.log(err);
                    res.status(422).json(err.errors[0].message)
                });
            } else {
                res.json({warning: "That username already exists. Please choose a new username."});
            }
        }).catch((err) => {
            console.log(err);
        });
    });
};
