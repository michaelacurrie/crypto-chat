const express = require("express");
const router = express.Router();
const fs = require("fs");

function getFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  const data = JSON.parse(buffer);

  return data;
}

router.get("/", (req, res) => {
  res.json(getFile("./db/topics.json"));
});

router.get("/topic/:id", (req, res) => {
  const data = getFile("./db/topics.json").find((i) => i.id == req.params.id);
  if (!data) return res.json({ error: "Topic id doesn't exist" });
  res.json(data);
});

router.post("/", (req, res) => {
  const data = getFile("./db/topics.json");
  data.push(req.body);
  fs.writeFileSync("./db/topics.json", JSON.stringify(data));
  res.json(data);
});

module.exports = router;
