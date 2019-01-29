module.exports = function(io, app) {
    io.on("connection", (socket) => {
        console.log(`A user connected to the socket: ${socket}`);
        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
};