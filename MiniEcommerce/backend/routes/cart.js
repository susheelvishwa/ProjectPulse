const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");


router.post("/add", async (req, res) => {
  const { productId, quantity } = req.body;

});

router.post("/remove", async (req, res) => {
  const { productId } = req.body;
});

router.get("/view", async (req, res) => {
  const cart = await Cart.find();
  res.json(cart);
});

router.post("/checkout", async (req, res) => {
});

module.exports = router;
