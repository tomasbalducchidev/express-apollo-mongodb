const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("replace with your db url");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
