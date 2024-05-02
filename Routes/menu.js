const express = require("express");
const router = express.Router();
const {
  getAllMenu,
  addNewMenu,
  deleteMenu,
  updateMenu,
  getMenuById,
} = require("../Controller/menu");
const { verifyToken, verifyAdmin } = require("../Middlewires/user");

router.get("/menu", getAllMenu);
router.get("/menu/:id", getMenuById);
router.post("/menu", verifyToken, verifyAdmin, addNewMenu);
router.delete("/menu/:id", verifyToken, verifyAdmin, deleteMenu);
router.patch("/menu/:id", verifyToken, verifyAdmin, updateMenu);

module.exports = router;
