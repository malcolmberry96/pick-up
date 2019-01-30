module.export = (sequelize, DataTypes) => {
    const Client = sequelize.define("client", {
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

    return Client;
}
Client.hasOne(db.User);
