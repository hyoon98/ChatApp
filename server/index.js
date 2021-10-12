const express = require("express");
const socketio = require("socket.io");
const app = express();
const PORT = process.env.PORT || 5000;

const router = require("./router");

app.use(router);

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const io = socketio().listen(server);

io.on("connection", (socket) => {
  console.log("We have a new connection");
  socket.on("disconnect", () => {
    console.log("user has left");
  });
});
