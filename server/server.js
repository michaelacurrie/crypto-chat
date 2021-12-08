const express = require("express");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

const PORT = 8080;
app.use(cors());

app.use("/api/v1", routes);

const users = [];

io.on("connection", (socket) => {
  // init connection flow between server && clinet
  console.log("User connected");

  socket.on("joinRoom", ({ username, room }) => {
    const user = { id: socket.id, username, room };
    users.push(user);

    socket.join(user.room);

    socket.emit("botMessage", "Welcome to CryptoChat"); //dispatch a messge t to the client

    io.to(user.room).emit("roomMembers", { room: user.room });

    io.to(user.room).emit("roomMembers", {
      room: user.room,
      users: users.filter((i) => user.room === room),
    });
  });

  socket.on("chat", (data) => {
    //wait for data being emitted from client
    const user = users.find((i) => i.id === socket.id);
    console.log(socket.id, "id");
    io.to(user.room).emit("chat", data); //respond back with same data
  });
});

//on ==> wait for event e.g "chat" event to be dispatched from the frontend
//emit ==> sending an event with some data

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
