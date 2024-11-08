import mongoose from "mongoose";
// Cart Item sub-schema
const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true }, 
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true }, 
  totalPrice: { type: Number, required: true }, 
});
// Main Cart schema
const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, 
  },
  items: [cartItemSchema], // Array of items 
  totalAmount: {
    type: Number,
    required: true,
    default: 0, 
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
// Exporting the model
const Cart = mongoose.model('Cart', cartSchema);

