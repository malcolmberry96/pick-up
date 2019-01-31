module.export = (sequelize, DataTypes) => {
    const Driver = sequelize.define("driver", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isLowercase: true,
                isAlpha: true,
                msg: "First name may only include letters."
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isLowercase: true,
                isAlpha: true,
                msg: "Last name may only include letters."
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            validate: {
                is: ["\\d{3}-\\d{3}-\\d{4}", 'D'],
                msg: "Input must be a valid phone number in the format XXX-XXX-XXXX"
            }
        }
    });
    //association definitions
    Driver.Vehicle = Driver.hasOne(
        db.Vehicle,
        {
            as: "vehicle",
            foreignKey: "vehicle_id"
        }
    );
    Driver.hasOne(db.User, {as: "db.", foreignKey: "driver_id"});
    Driver.hasMany(db.Order);

    return Driver;
}
