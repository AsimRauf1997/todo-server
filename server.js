const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

app.use("/api/todo", todoRoutes);
app.use("/", (req, res) => {
  res.send("<h1>Welcome to server</h1>");
});
app.listen(port, () => console.log(`Server Running at port ${port}`));
