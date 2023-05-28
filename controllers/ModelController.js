import Model from '../models/Model.js';
import Drive from '../models/Drive.js';
import Color from '../models/Color.js';
import Transmission from '../models/Transmission.js';

export const getAllCategories = async (req, res) => {
  try {
    let drives = await Drive.find();
    let colors = await Color.find();
    let transmission = await Transmission.find();
    let model = await Model.find();
    res.status(200).json({ drives, colors, transmission, model });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка сервера',
    });
  }
};

export const getModels = async (req, res) => {
  try {
    let models = await Model.find();
    res.status(200).json(models);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка сервера',
    });
  }
};
