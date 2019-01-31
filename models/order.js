module.export = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        start_location: {
            type: DataTylpes.JSON,
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
                isIn: [["pending", "enroute", "delayed", "completed"]],
                msg: "Order status must be pending, enroute, delayed, or complete"
            }
        }
    });
    
    return Order;
}