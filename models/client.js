module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: "Input must be an email address."
                }
            }
        }
    });

        //define associations
    Client.associate = (models) => {
        Client.User = Client.belongsTo(
        models.User,
            {
                as: "user",
                foreignKey: "user_id"
            }
        );
    };

    return Client;
};