import Product from '../models/Product.js';
import Drive from '../models/Drive.js';
import Color from '../models/Color.js';
import Transmission from '../models/Transmission.js';

export const getAll = async (req, res) => {
  try {
    let drives = await Drive.find();
    let colors = await Color.find();
    let transmission = await Transmission.find();
    drives = drives.map((item) => item.value);
    colors = colors.map((item) => item.value);
    transmission = transmission.map((item) => item.value);

    const products = await Product.find({
      age: { $in: req.query.age || [0, 1] },
      drive: { $in: req.query.drive || drives },
      box: { $in: req.query.box || transmission },
      color: { $in: req.query.color || colors },
      price: { $gte: req.query.price || 0 },
      year: { $gte: req.query.year || 2000 },
      mileage: { $gte: req.query.mileage || 0 },
      power: { $gte: req.query.power || 0 },
    })
      .sort({ price: -1 })
      .populate('model')
      .exec();

    const filtredProducts = req.query.model
      ? products.filter((obj) => obj.model._id == req.query.model)
      : products;
    res.status(200).json(filtredProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка сервера',
    });
  }
};
