import mongoose from 'mongoose';

const OfferSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  specialprice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Offer', OfferSchema);
