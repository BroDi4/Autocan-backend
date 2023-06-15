import mongoose from 'mongoose';
import Credit from '../models/Credit.js';

export const createCredit = async (req, res) => {
  try {
    const doc = new Credit({
      name: req.body.name,
      phone: req.body.phone,
      model: req.body.model,
      equipment: req.body.equipment,
      firstPay: req.body.firstPay,
      time: req.body.time,
      summ: req.body.summ,
      perMonth: req.body.perMonth,
      user: req.userId,
    });

    await doc.save();

    res.status(200).json({
      msg: 'Заявка на кредит успешно создана',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка сервера',
    });
  }
};
