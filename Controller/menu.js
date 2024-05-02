const Menu = require("../models/Menu");

const getAllMenu = async (req, res) => {
  const items = await Menu.find();
  //   console.log("items: ",items)
  res.status(200).send(items);
};

const getMenuById = async (req, res) => {
  //   console.log(req.params);
  const id = req.params.id;
  console.log("Pid: ", id);
  const item = await Menu.findById(id);
  console.log("item: ", item);
  res.status(200).send(item);
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
      //   console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: "Item adding has been failed" });
    });
};
const deleteMenu = async (req, res) => {
  const id = req.params.id;
  const deleteItem = await Menu.deleteOne({ _id: id });
  res.send(deleteItem);
};
const updateMenu = async (req, res) => {
  console.log(req.body);
  const requestedMenu = req.body;
  const id = req.params.id;
  console.log("updated menu:", id);
  const updatedMenu = await Menu.findByIdAndUpdate(id, {
    name: requestedMenu.name,
    price: requestedMenu.price,
    recipe: requestedMenu.price,
    image: requestedMenu.image,
    category: requestedMenu.category,
  });
  console.log(updatedMenu);
  res.send(updatedMenu);
};

module.exports = {
  getAllMenu,
  addNewMenu,
  deleteMenu,
  getMenuById,
  updateMenu,
};
