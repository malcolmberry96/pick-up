module.exports = function(io, app) {
    io.on("connection", (socket) => {
        socket.on("order successfully submitted", () => {
            console.log(`value of socket is: ${socket}`);
            socket.broadcast.emit("new order", {newOrder: true});
        });
        socket.on("driver status change", (statusData) => {
            console.log(JSON.stringify(statusData));
            io.emit("new driver status", {driverStatus: statusData});
        });
        socket.on("order status change", (orderData) => {
            console.log(JSON.stringify(orderData));
            io.emit("new order status", {orderStatus: orderData});
        });
    });
};