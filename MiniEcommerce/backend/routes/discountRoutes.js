const express = require("express");
const {
  listDiscounts,
  applyDiscounts,
} = require("../controllers/discountController");
const router = express.Router();

router.get("/", listDiscounts);
router.post("/apply", applyDiscounts);

module.exports = router;
