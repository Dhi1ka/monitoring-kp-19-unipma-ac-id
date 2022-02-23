require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use("/", (req, res) => {
  res.status(404).json({
    message: "Page not found!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
