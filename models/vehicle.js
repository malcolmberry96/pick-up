module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define("Vehicle", {
        make: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicle_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
                is: ["\\d{4}$"],
            }
        },
        color: {
            type: DataTypes.STRING
        },
        license_plate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: {
                    msg: "License plate may only include letters and numbers."
                }
            }
        }
    });

    // //association definitions
    Vehicle.associate = (models) => {
        Vehicle.Driver = Vehicle.hasOne(
            models.Driver,
            {
                as: "driver",
                foreignKey: "vehicle_id"
            }
        );
    };
    
    return Vehicle;
};
