const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {

  const authorization = req?.headers?.authorization;
  if (!authorization) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
  ///////////////////////////////////////////////
  // const token = req.headers.authorization?.split(" ")[1];
  // console.log("token: ",token);

  // if (!token) {
  //   return res.status(401).json({ message: "Authentication required" });
  // }

  // try {
  //   const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
  //   const user = await User.findOne({_id: decodedToken.userId});
  //   if (!user) {
  //     return res.status(404).json({ message: "User not found" });
  //   }

  //   req.user = user;
  //   next();
  // } catch (error) {
  //   res.status(401).json({ message: "Invalid token" });
  // }
};

const verifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  console.log("verify email", email);
  const user = await User.findOne({ email });
  console.log("verify user", user);
  const isAdmin = user?.role === "admin";
  console.log("verifyAdmin", isAdmin);
  if (!isAdmin) {
    return res.status(403).send({ message: "Forbidden Access" });
  }
  next();
};

module.exports = { verifyToken, verifyAdmin };
