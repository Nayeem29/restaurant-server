const express = require('express');
const cors = require("cors");
const connectDB = require('./db/db');
const userRoutes = require('./Routes/user');
const cartRoutes = require('./Routes/cart');
const menuRoutes = require('./Routes/menu');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
// app.use('/auth', authRoutes);

// Define user routes
app.use('/', userRoutes);
app.use('/carts', cartRoutes);
app.use('/', menuRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});