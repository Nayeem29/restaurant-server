const express = require("express");
// const { register, login } = require('../controllers/auth');
const {
  signup,
  login,
  adminCheck,
  updateUser,
  deleteUser,
  jwtPath,
  getAllUsers,
} = require("../Controller/user");
const { verifyAdmin, verifyToken } = require("../Middlewires/user");

const router = express.Router();

router.post("/users", signup);
// router.get("/users", verifyToken, verifyAdmin, login);
router.get("/users", verifyToken, verifyAdmin, getAllUsers);
router.get("/users/admin/:email", verifyToken, adminCheck);
router.patch("/users/admin/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/jwt", jwtPath);

module.exports = router;
