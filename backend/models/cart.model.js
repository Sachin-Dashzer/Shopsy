import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User ID
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Product ID
      quantity: { type: Number, default: 1 }, // Quantity of the product
    },
  ],
  createdAt: { type: Date, default: Date.now }, // Date of cart creation
});

export default mongoose.model("Cart", cartSchema);
