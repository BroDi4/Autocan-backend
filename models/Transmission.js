import mongoose from 'mongoose';

const TransmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Transmission', TransmissionSchema);
