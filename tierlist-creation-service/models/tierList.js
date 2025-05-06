import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: false },
});

const tierListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    items: {
      type: [itemSchema],
      required: false,  // Optional list of items with name and imageUrl
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

const TierList = mongoose.model('TierList', tierListSchema);

export default TierList;
