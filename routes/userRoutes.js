const express = require("express");

const router = express.Router();
const { verifyToken } = require("../middleware/auth");

const {
  getUserById,
  updateUser
} = require("../controllers/userController");

router.get("/user/:id", getUserById);

router.put("/user/:id", verifyToken, updateUser);

module.exports = router;