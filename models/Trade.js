import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema({
  cusCar: {
    type: String,
    required: true,
  },
  cusEquipment: {
    type: String,
    required: true,
  },
  shopCar: {
    type: String,
    required: true,
  },
  shopEquipment: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model('Trade', TradeSchema);
