const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
        <h1>Hallo Welt</h1>
        <p>Diese Seite wird mit AWS gehostet, mithilfe von Docker.</p>
    `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
