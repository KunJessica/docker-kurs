const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

mongoose.connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database:27017/user?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mail: String,
  birthday: String,
});

const UserModel = mongoose.model("User", UserSchema);

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/user", async (req, res) => {
  try {
    const { name, age, mail, birthday } = req.body;

    const user = new UserModel({
      name,
      age,
      mail,
      birthday,
    });

    await user.save();

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await UserModel.find();

    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port);
