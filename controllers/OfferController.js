import mongoose from 'mongoose';

import Offer from '../models/Offer.js';

export const getAll = async (req, res) => {
  try {
    const products = await Offer.find()
      .populate({ path: 'product', populate: { path: 'model' } })
      .exec();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка сервера',
    });
  }
};
