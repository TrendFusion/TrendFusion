 import mongoose from "mongoose";
 const { Schema } = mongoose;
// Address sub-schema
const addressSchema = new Schema({
  street: { type: String, required: true
     },
  city: { type: String,  required: true 
  },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  isDefault: { type: Boolean, default: false } // indicates if this is the default address
});

// Cart item sub-schema
const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 0 },
  //addedAt: { type: Date, default: Date.now }
});

// Order sub-schema
const orderSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  //purchasedAt: { type: Date, required: true },
  totalAmount: { type: Number, required: true },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number },
      price: { type: Number }
    }
  ]
});

// Main User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['buyer', 'seller'],
    required:true,
  },
  addresses: [addressSchema], // Array of addresses
  cart: [cartItemSchema], // Array of cart items
  orderHistory: [orderSchema], // Array of orders
  wishlist: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      //addedAt: { type: Date, default: Date.now }
    }
  ],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users who follow this user
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users this user is following
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// // Middleware to hash password before saving
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

// // Method to compare input password with hashed password
// userSchema.methods.comparePassword = async function (inputPassword) {
//   return bcrypt.compare(inputPassword, this.password);
// };

// Exporting the model
 export const User = mongoose.model('User', userSchema);

