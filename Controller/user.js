const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
const User = require("../models/User");

// Register a new user
const signup = async (req, res, next) => {
  const { name, email } = req.body;
  console.log("req.body: ", req.body);

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User();
    user.email = email;
    user.name = name;
    // console.log('signup: ',req.body)
    // const result =
    await user
      .save()
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log("error", err);
        res.status(400).send({ message: "can not load data" });
      });
    // console.log("result: ",result)
    // res.send({
    //     email: result.email,
    //     name: result.name
    // });
  } catch (error) {
    next(error);
  }
};

// app.post("/jwt",
const jwtPath = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: "1h",
  });
  res.send({ token });
};

// Login with an existing user
const login = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(user);
    // const passwordMatch = await user.comparePassword(password);
    // if (!passwordMatch) {
    //   return res.status(401).json({ message: 'Incorrect password' });
    // }

    // const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
    //   expiresIn: "1 hour",
    // });
    // res.send({ token });
  } catch (error) {
    next(error);
  }
};

// app.get("/users/admin/:email", verifyToken,
const adminCheck = async (req, res) => {
  const email = req.params.email;
//   console.log("adminCheckMEmail", email);
  const user = await User.findOne({ email: req.params.email });
//   console.log("admin email: ", user);
  let admin = false;
  if (user) {
    // console.log("admin email: ", user);
    admin = user?.role === "admin";
  }
  console.log("admin role:", admin);
  res.send({ admin });
};
//   app.patch("/users/admin/:id",

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
//   console.log(allUsers);
  res.status(200).send(allUsers);
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const updatedUser = await User.updateOne(
    { _id: (id) },
    {
      $set: { role: "admin" },
    }
  );
  res.status(200).send(updatedUser);
};
//   app.delete("/users/:id",
const deleteUser = async (req, res) => {
  const deletedUser = await User.deleteOne({
    _id: (req.params.id),
  });
  res.status(200).send(deletedUser);
};

module.exports = {
  signup,
  login,
  updateUser,
  deleteUser,
  adminCheck,
  jwtPath,
  getAllUsers,
};
