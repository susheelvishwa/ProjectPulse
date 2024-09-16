const Discount = require("../models/Discount");
const Cart = require("../models/Cart");


const listDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const applyDiscounts = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    const discounts = await Discount.find();
    let totalDiscount = 0;

    discounts.forEach((discount) => {
      if (discount.type === "Buy1Get1Free" && discount.category === "Fashion") {
        cart.items.forEach((item) => {
          if (item.quantity >= 2 && item.category === "Fashion") {
            totalDiscount += item.price;
          }
        });
      } else if (
        discount.type === "10PercentOff" &&
        discount.category === "Electronics"
      ) {
        cart.items.forEach((item) => {
          if (item.category === "Electronics") {
            totalDiscount += item.price * 0.1;
          }
        });
      }
    });

    cart.total -= totalDiscount;
    await cart.save();
    res.json({
      message: "Discounts applied",
      totalDiscount,
      finalTotal: cart.total,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error applying discounts", error: error.message });
  }
};

module.exports = {
  listDiscounts,
  applyDiscounts,
};
