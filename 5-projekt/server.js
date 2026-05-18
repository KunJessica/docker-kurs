const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://host.docker.internal:27017/shoppingcart", {
  useNewUrlParser: true,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data;

    res.json({ success: true, products: products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/addToCart", async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = new Product({
      name,
      price,
    });

    await product.save();

    res.json({ success: true, product: product });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/cart", async (req, res) => {
  try {
    const productsInCart = await Product.find();

    res.json({ success: true, cart: productsInCart });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000);
