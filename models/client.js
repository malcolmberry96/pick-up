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
        }
    });

    // //association definitions
    // Client.associate = (models) => {
    //     Client.hasMany(
    //         models.Order,
    //         {
    //             as: "order",
    //             foreignKey: "client_id"
    //         }
    //     );
    // };

    return Client;
};