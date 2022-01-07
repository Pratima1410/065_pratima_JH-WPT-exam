const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { selectAllUser, adduser } = require("./user.js");

app.get("/users", async (req, res) => {
  const list = await selectAllUser();
  console.log(list);
  res.json(list);
});

app.post("/add-user", async (req, res) => {
  const data = req.body;
  await addUser(data);
  res.json("User Added");
});

app.listen(5000, () => {
  console.log("server Start");
});
