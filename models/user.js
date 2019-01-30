// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The username cannot be null, and must be a proper username before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_Type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isLowercase: true,
        isIn: [["driver", "client", "dispatch"]],
        msg: "User type must be driver, client, or dispatch."
      }
    },
    first_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isLowercase: true,
        isAlpha: true,
        msg: "First name may only include letters."
      }
    },
    last_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isLowercase: true,
        isAlpha: true,
        msg: "Last name may only include letters."
      }
    },
    phone_Number: {
      type: DataTypes.STRING,
      validate: {
        is: ["\\d{3}-\\d{3}-\\d{4}", 'D'],
        msg: "Input must be a valid phone number in the format XXX-XXX-XXXX"
      }
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
