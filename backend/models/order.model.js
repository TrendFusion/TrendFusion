import mongoose from "mongoose";

// Order Item sub-schema
const orderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true }, // Product name for reference
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

// Address sub-schema
const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

// Main Order schema
const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [orderItemSchema], // List of items in the order
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingAddress: addressSchema, // Address for shipping
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'cash_on_delivery', 'stripe'],
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'processed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
  deliveredAt: {
    type: Date,
  },
  trackingNumber: {
    type: String,
    unique: true,
    sparse: true,
  }
});

// Export the model
const Order = mongoose.model('Order', orderSchema);
//module.exports = Order;
