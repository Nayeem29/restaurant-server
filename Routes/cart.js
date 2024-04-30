const express = require("express");
const { createCart, findCart, deleteCart } = require("../Controller/cart");

const router = express.Router();

router.post("/", createCart);
router.get("/", findCart);
router.delete("/:id", deleteCart);

module.exports = router;
