import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User ID
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // List of product IDs
  createdAt: { type: Date, default: Date.now }, // Date of wishlist creation
});

export default mongoose.model("Wishlist", wishlistSchema);
