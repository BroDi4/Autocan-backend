import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      default: '',
    },
    surname: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
