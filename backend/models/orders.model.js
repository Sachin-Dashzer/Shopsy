import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, // Product ID
            quantity: { type: Number, required: true }, // Quantity of the product
        },
    ],
    totalAmount: { type: Number, required: true }, // Total price of the order
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" }, // Payment status
    orderStatus: {
        type: String,
        enum: ["processing", "shipped", "delivered", "cancelled"],
        default: "processing",
    }, // Order status
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    }, // Shipping address
    createdAt: { type: Date, default: Date.now }, // Date of order creation
});

export default mongoose.model("Order", orderSchema);
