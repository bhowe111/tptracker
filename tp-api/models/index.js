const mongoose = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/tptracker";

const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(connectionString, configOptions)
  .then(() => console.log("MongoDB succesfully connected~~"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Product: require("./Product"),
  Store: require("./Store"),
};
