const User = require("../models/User");

const getUserById = async (req, res) => {
  try {

    const user = await User.findById(
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan"
      });
    }

    res.json(user);

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }
};

const updateUser = async (req, res) => {
  try {

    const updatedUser =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedUser);

  } catch (err) {

    res.status(500).json({
      message: "Gagal update user"
    });

  }
};

module.exports = {
  getUserById,
  updateUser
};