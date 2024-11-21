import userModel from "../models/UserModel.js";

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    if (cartData) {
    }
  } catch (error) {}
};
const updateCart = async (req, res) => {};

const getUserCart = async (req, res) => {};

export { addToCart, updateCart, getUserCart };
