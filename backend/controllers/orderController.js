import orderModel from "../models/orderModel.js";
import userModel from "../models/UserModel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = await orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const allOrdersAdmin = async (req, res) => {};

const userOrders = async (req, res) => {};
const updateOrderStatus = async (req, res) => {};

export { placeOrder, allOrdersAdmin, userOrders, updateOrderStatus };
