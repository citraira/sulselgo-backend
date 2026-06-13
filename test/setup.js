const { connectDB } = require("../index");
const mongoose = require("mongoose");

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});