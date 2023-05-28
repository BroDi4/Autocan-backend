import mongoose from 'mongoose';

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  equipment: {
    type: Array,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Model', ModelSchema);
