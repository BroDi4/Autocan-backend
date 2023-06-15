import Trade from '../models/Trade.js';

export const createTrade = async (req, res) => {
  try {
    const doc = new Trade({
      cusCar: req.body.cusCar,
      cusEquipment: req.body.cusEquipment,
      shopCar: req.body.shopCar,
      shopEquipment: req.body.shopEquipment,
      phone: req.body.phone,
      name: req.body.name,
      user: req.userId,
    });

    await doc.save();

    res.status(200).json({
      msg: 'Заявка на трейд-ин оформлена, скоро с вами свяжется менеджер',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка сервера',
    });
  }
};
