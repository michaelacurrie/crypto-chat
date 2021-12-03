const express = require("express");
const app = express();
const routes = require("./routes/routes");

const PORT = 8080;

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
