const Cart = require("../models/Cart");
const Product = require("../models/Product");

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [], total: 0 });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price,
      });
    }

    cart.total += product.price * quantity;
    await cart.save();

    res.json(cart);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding product to cart", error: error.message });
  }
};

const viewCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.json(cart);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching cart", error: error.message });
  }
};

module.exports = {
  addToCart,
  viewCart,
};
