import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    const emailInDb = await User.findOne({ email: req.body.email });

    if (emailInDb) {
      return res.status(400).json({
        msg: 'Такой email уже существует',
      });
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({
        msg: errors,
      });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new User({
      name: req.body.name,
      email: req.body.email,
      passwordHash: hash,
    });

    const user = await doc.save();
    const { passwordHash, ...userData } = user._doc;

    const token = jwt.sign(
      {
        _id: userData._id,
      },
      'key12345verysecret',
      {
        expiresIn: '30d',
      },
    );

    res.status(200).json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка регистрации пользователя',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        msg: 'Пользователь не найден',
      });
    }

    const passwordIsValid = await bcrypt.compare(req.body.password, user.passwordHash);

    if (!passwordIsValid) {
      return res.status(400).json({
        msg: 'Неверный логин или пароль',
      });
    }

    const { passwordHash, ...userData } = user._doc;

    const token = jwt.sign(
      {
        _id: userData._id,
      },
      'key12345verysecret',
      {
        expiresIn: '30d',
      },
    );

    res.status(200).json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка авторизации пользователя',
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    const { passwordHash, ...userData } = user._doc;
    res.status(200).json({
      ...userData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка авторизации пользователя',
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.userId },
      {
        name: req.body.name,
        lastname: req.body.lastname,
        surname: req.body.surname,
        email: req.body.email,
        city: req.body.city,
      },
    );
    res.status(200).json({
      msg: 'Пользователь обновлен',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: 'Ошибка обновления пользователя',
    });
  }
};
