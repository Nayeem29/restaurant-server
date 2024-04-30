const Menu = require("../models/Menu");

const getAllMenu = async (req, res) => {
  const items = await Menu.find({});
  res.status(200).send(items);
};
const addNewMenu = async (req, res) => {
  console.log(req.body);
  const newMenu = new Menu();
  newMenu.name = req.body.name;
  newMenu.recipe = req.body.recipe;
  newMenu.category = req.body.category;
  newMenu.price = req.body.price;
  newMenu.image = req.body.image;
  await newMenu
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: "Item adding has been failed" });
    });
};

module.exports = { getAllMenu, addNewMenu };
