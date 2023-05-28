import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Model',
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  drive: {
    type: String,
    required: true,
  },
  box: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  power: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Product', ProductSchema);
