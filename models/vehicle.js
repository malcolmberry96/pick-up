module.export = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define("vehicle", {
        make: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicle_year: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                isNumeric: true,
                is: ["\\d{4}", 'D'],
            }
        },
        color: {
            type: DataTypes.STRING
        },
        license_plate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        }
    });
    //association definitions
    Vehicle.hasOne(db.Driver);
    
    return Vehicle;
}
