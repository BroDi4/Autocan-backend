import mongoose from 'mongoose';

const CreditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
  firstPay: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  summ: {
    type: Number,
    required: true,
  },
  perMonth: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Credit', CreditSchema);
