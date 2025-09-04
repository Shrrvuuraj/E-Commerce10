import User from "../model/user.js";

// getting all user(admin)
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find()
      .populate("addressDetails")
      .populate("shoppingCart")
      .populate("order")
      
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get specific user
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id)
      .populate("addressDetails")
      .populate("shoppingCart")
      .populate("order")
      .populate("orderList");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// creating an user (user)
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete user by id

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "The user is not found" });
    }

    res.status(200).json({ message: "User delted successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update user by id
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: `the user with id ${id} is not found` });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
