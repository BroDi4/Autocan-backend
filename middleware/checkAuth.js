import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '');

    const decodedToken = jwt.verify(token, 'key12345verysecret');

    req.userId = decodedToken._id;
    next();
  } catch (err) {
    res.status(403).json({
      msg: 'Нет доступа',
    });
  }
};
