const Cart = require("../models/Cart");

// app.post("/carts",
const createCart = async (req, res) => {
  const cartBody = req.body;
  console.log("cartBody: ", cartBody);
  const insertItem = new Cart();
  insertItem.email=cartBody.email;
  insertItem.price=cartBody.price;
  insertItem.name=cartBody.name;
  insertItem.menuId=cartBody.menuId;

  await insertItem
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: "not added to cart" });
    });
  // res.status(200).send(insertItem);
};
// app.get("/carts",
const findCart = async (req, res) => {
  const email = req.query.email;
  // console.log(email);
  const cartItem = await Cart.find({ email });
  // console.log(cartItem);
  res.status(200).send(cartItem);
};
// app.delete("/carts/:id",
const deleteCart = async (req, res) => {
  const id = req.params.id;
  const result = await Cart.deleteOne({ _id: id });
  res.status(200).send(result);
};

module.exports = { createCart, findCart, deleteCart };
