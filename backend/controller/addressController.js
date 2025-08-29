import Address from "../model/Addreess.js";

// all address
export const getAllAddress = (req, res) => {
     res.send("getting  address")
};
// sepecific addresss
export const getAddress = (req, res) => {
     res.send("getting  address")
};

export const postAddress = (req, res) => {
     res.send("posting address")
};

// delete all user address dont use it (doomstay)
export const deleteAllAddress = (req, res) => {
     res.send("delting address")
};

export const deleteAddress=(req,res)=>{
     res.send("deleting specific address")
};
// update specific address
export const putAddress = (req, res) => {
     res.send("updating address")
};
