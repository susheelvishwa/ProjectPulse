const express = require("express");
const { addToCart, viewCart } = require("../controllers/cartController");
const router = express.Router();

router.post("/add", addToCart);
router.get("/view", viewCart);

module.exports = router;
