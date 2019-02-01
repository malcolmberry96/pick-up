module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        start_location: {
            type: DataTypes.JSON,
            allowNull: false
        },
        end_location: {
            type: DataTypes.JSON,
            allowNull: false
        },
        load_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicle_requirement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            default: "pending",
            validate: {
                isIn: {
                    args: [["pending", "enroute", "delayed", "completed"]],
                    msg: "Order status must be pending, enroute, delayed, or complete"
                }
            }
        }
    });

    //association definitions
    Order.associate = (models) => {
        Order.Client = Order.belongsTo(
            models.Client,
            {
                as: "client",
                foreignKey: "client_id"
            }
        );
        Order.Driver = Order.belongsTo(
            models.Driver,
            {
                as: "driver",
                foreignKey: "driver_id"
            }
        );
    };

    return Order;
};