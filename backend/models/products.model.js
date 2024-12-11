import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product name
  description: { type: String }, // Product description
  price: { type: Number, required: true }, // Price of the product
  stock: { type: Number, required: true }, // Number of items in stock
  category: { type: String, required: true }, // Product category
  images: { type: [String], default: [] }, // Array of image URLs
  createdAt: { type: Date, default: Date.now }, // Date when the product was created
});

export default mongoose.model("Product", productSchema);
