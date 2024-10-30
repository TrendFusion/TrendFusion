import mongoose from "mongoose";

// Wishlist Item sub-schema
const wishlistItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true }, // Product name for reference
  addedAt: { type: Date, default: Date.now }
});

// Main Wishlist schema
const wishlistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // Each user has a unique wishlist
  },
  items: [wishlistItemSchema], // Array of products in the wishlist
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Exporting the model
const Wishlist = mongoose.model('Wishlist', wishlistSchema);
//module.exports = Wishlist;
