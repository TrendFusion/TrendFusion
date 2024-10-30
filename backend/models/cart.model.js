import mongoose from "mongoose";

// Cart Item sub-schema
const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true }, // Product name for reference
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true }, // Price per item
  totalPrice: { type: Number, required: true }, // Calculated: price * quantity
});

// Main Cart schema
const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, // Each user has a unique cart
  },
  items: [cartItemSchema], // Array of items in the cart
  totalAmount: {
    type: Number,
    required: true,
    default: 0, // Calculated total of all item totalPrices
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// // Middleware to update totalAmount before saving
// cartSchema.pre('save', function (next) {
//   // Calculate totalAmount based on items array
//   this.totalAmount = this.items.reduce((total, item) => total + item.totalPrice, 0);
//   next();
// });

// Exporting the model
const Cart = mongoose.model('Cart', cartSchema);
//module.exports = Cart;
