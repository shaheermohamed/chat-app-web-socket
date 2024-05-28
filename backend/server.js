const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const colors = require("colors")
const app = express();
dotenv.config();

connectDB();
app.use(cors());

app.get("/", (req, res) => {
  console.log("hello world");
  res.status(200).send("API is running");
});

app.get("/api/chat", (req, res) => {
  let chats = [
    { chatName: "abcd", _id: 1 },
    { chatName: "efgh", _id: 1 },
    { chatName: "ijkl", _id: 1 },
    { chatName: "mnop", _id: 1 },
  ];
  res.status(200).send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  res.status(200).send(req.params.id);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`.yellow.bold));
