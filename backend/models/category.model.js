import mongoose from "mongoose";
// Main Category schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxlength: 250
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: 'Category', // Self-reference for subcategories
    default: null
  },
  image: {
    type: String, 
  },
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
const Category = mongoose.model('Category', categorySchema);

