const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT;
const dataFolderPath = "/app";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("index.html Dokument wurde gesendet.")
});

app.post("/save", (req, res) => {
  const title = req.body.title.toLowerCase();
  const content = req.body.text;

  const fileName = `storage/${title}.txt`;

  fs.writeFileSync(path.join(dataFolderPath, fileName), content);

  res.redirect("/");
});

app.use(express.static(dataFolderPath));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
