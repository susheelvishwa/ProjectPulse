const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const discountRoutes = require("./routes/discountRoutes");

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/discounts", discountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
