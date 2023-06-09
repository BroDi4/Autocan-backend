import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неправильный формат почты').isEmail(),
  body('name', 'Имя должно состоять из букв, минимальная длина имени 2 символа')
    .isAlpha()
    .isLength({ min: 2 }),
  body('password', 'Минимальная длина пароля 5 символов').isLength({ min: 5 }),
];
