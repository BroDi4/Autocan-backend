import mongoose from 'mongoose';

const ColorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Color', ColorSchema);
