module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define("Driver", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    msg: "First name may only include letters."
                }
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    msg: "Last name may only include letters."
                }
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: ["\\d{3}-\\d{3}-\\d{4}$"],
                    msg: "Input must be a valid phone number in the format XXX-XXX-XXXX"
                }
            }
        }
    });
    
    //define associations
    Driver.associate = (models) => {
        Driver.User = Driver.belongsTo(
        models.User,
            {
                as: "user",
                foreignKey: "user_id"
            }
        );
        Driver.Vehicle = Driver.belongsTo(
            models.Vehicle,
            {
                as: "vehicle",
                foreignKey: "vehicle_id"
            }
        );
    };

    return Driver;
};
