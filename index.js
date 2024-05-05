// const express = require("express");
// const app = express();
// const cors = require("cors");
// const port = process.env.PORT || 5000;

// //middlewires
// app.use(cors());
// app.use(express.json());
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// //tKt9UQlq9xoWd1Yo
// //nayeem-jamk

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j8auphz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const menuCollection = client
//       .db("restaurant-management")
//       .collection("menu");
//     const userCollection = client
//       .db("restaurant-management")
//       .collection("users");
//     const cartCollection = client
//       .db("restaurant-management")
//       .collection("carts");

//     // JWT token api
//     app.post("/jwt", async (req, res) => {
//       const user = req.body;
//       const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
//         expiresIn: "1h",
//       });
//       res.send({token});
//     });

//     //middlewires
//     const verifyToken = (req, res, next) => {
//       const authorization = req?.headers?.authorization;
//       if (!authorization) {
//         return res.status(401).send({ message: "Unauthorized access" });
//       }
//       const token = authorization.split(" ")[1];
//       jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
//         if (err) {
//           return res.status(401).send({ message: "Unauthorized access" });
//         }
//         req.decoded = decoded;
//         next();
//       });
//     };

//     const verifyAdmin = async (req, res, next) => {
//       const email = req.decoded.email;
//       console.log("verify email",email)
//       const user = await userCollection.findOne({ email });
//       console.log("verify user", user);
//       const isAdmin = user?.role === "admin";
//       console.log('verifyAdmin',isAdmin);
//       if (!isAdmin) {
//         return res.status(403).send({ message: "Forbidden Access" });
//       }
//       next();
//     };

//     //menu/order
//     app.get("/", async (req, res) => {
//       const items = await menuCollection.find({}).toArray();
//       res.send(items);
//     });

//     //===========================//

//     //users get all users:
//     app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
//       const users = await userCollection.find({}).toArray();
//       // console.log(users)
//       res.status(200).send(users);
//     });
// // create new user
//     app.post("/users", async (req, res) => {
//       const isUserExist = await userCollection.findOne({
//         email: req.body.email,
//       });
//       if (isUserExist) {
//         res.status(400).send("user already exists");
//       }
//       const user = {
//         name: req.body.name,
//         email: req.body.email,
//       };
//       const createdUser = await userCollection.insertOne(user);
//       res.status(201).send(createdUser);
//     });
// // check admin user
//     app.get("/users/admin/:email", verifyToken, async (req, res) => {
//       const email = req.params.email;
//       const user = await userCollection.findOne({ email });
//       let admin = false;
//       if (user) {
//         admin = user?.role === "admin";
//       }
//       console.log("admin role:",admin);
//       res.send({ admin });
//     });
//     // make admin
//     app.patch("/users/admin/:id", async (req, res) => {
//       const id = req.params.id;
//       console.log(id);
//       const updatedUser = await userCollection.updateOne(
//         { _id: new ObjectId(id) },
//         {
//           $set: { role: "admin" },
//         }
//       );
//       res.status(200).send(updatedUser);
//     });
//     // delete user
//     app.delete("/users/:id", async (req, res) => {
//       const deletedUser = await userCollection.deleteOne({
//         _id: new ObjectId(req.params.id),
//       });
//       res.status(200).send(deletedUser);
//     });
//     //carts
//     app.post("/carts", async (req, res) => {
//       const cartBody = req.body;
//       const insertItem = await cartCollection.insertOne(cartBody);
//       res.status(200).send(insertItem);
//     });
//     app.get("/carts", async (req, res) => {
//       const email = req.query.email;
//       console.log(email);
//       const cartItem = await cartCollection.find({ email }).toArray();
//       res.status(200).send(cartItem);
//     });
//     app.delete("/carts/:id", async (req, res) => {
//       const id = req.params.id;
//       const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
//       res.status(200).send(result);
//     });
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("app is running");
// });

// app.listen(port, (req, res) => {
//   console.log(`app is listening on port ${port}`);
// });
