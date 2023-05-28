import mongoose from 'mongoose';

const DriveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Drive', DriveSchema);
