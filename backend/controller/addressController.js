import Address from "../model/Addreess.js";
import User from "../model/user.js";

// creates an addrees
export const postAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);

    await User.findByIdAndUpdate(
      req.body.user,
      { $push: { addressDetails: address } },
      { new: true }
    );
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// all address
export const getAllAddress = async (req, res) => {
  try {
    const addrees = await Address.find();
    res.status(200).json(addrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// sepecific addresss
export const getAddress = async (req, res) => {
  try {
    const addrees = await Address.findById(req.params.id);
    if (!addrees) {
      return res.status(404).json({ message: `the user is not found` });
    }
    res.status(200).json(addrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// spcific addrees delted
export const deleteAddress = async (req, res) => {
  try {
    console.log("Deleting ID:", req.params.id);
    const addrees = await Address.findByIdAndDelete(req.params.id);
    console.log("Deleted Address:", addrees);

    if (!addrees) {
      return res.status(404).json({ message: `the user is not found` });
    }
    res.status(200).json(addrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update specific address
export const putAddress = async (req, res) => {
  try {
    const addrees = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }   // return updated doc
    );
    if (!addrees) {
      return res.status(404).json("the user is not found");
    }
    res.status(200).json(addrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

