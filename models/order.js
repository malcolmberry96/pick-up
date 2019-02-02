module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        start_location: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {
                lng: "29.7604° N",
                lat: "95.3698° W"
            }
        },
        end_location: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: {
                lng: "29.7508° N",
                lat: "95.3621° W"
            }
        },
        load_description: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            defaultValue: "Lorem Ipsum"
        },
        vehicle_requirement: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "mid-size",
            validate: {
                isLowercase: {
                    msg: "Vehicle requirement must be in lowercase."
                },
                isIn: {
                    args: [["minicompact", "subcompact", "compact", "mid-size", "large"]],
                    msg: "Vehicle requirement must be minicompact, subcompact, compact, mid-size, or large."
                }
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending",
            validate: {
                isIn: {
                    args: [["pending", "enroute", "delayed", "completed"]],
                    msg: "Order status must be pending, enroute, delayed, or complete"
                }
            }
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 9999
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 9999
        }
    });
    
    // defining associations
    Order.association = (models) => {
        Order.Client = Order.belongsTo(
        models.Client,
        {
            as: "client",
            foreignKey: "client_id"
        });
        Order.Driver = Order.belongsTo(
        models.Driver,
        {
            as: "driver",
            foreignKey: "driver_id"
        });
    }
    return Order;
};