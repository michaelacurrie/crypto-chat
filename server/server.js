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

io.on("connection", (socket) => {
  // init connection flow between server && clinet
  console.log("User connected");

  socket.on("chat", (data) => {
    //wait for data being emitted from client
    console.log(data);
    io.emit("chat", data); //respond back with same data
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
