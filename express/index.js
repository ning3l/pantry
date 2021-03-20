const os = require("os");
const cors = require("cors");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
app.set("port", PORT);
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(PORT, () => {
  console.log(`${os.hostname()} listening on PORT ${PORT}`);
});
