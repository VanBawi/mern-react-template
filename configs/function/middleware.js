/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Authorization Middleware
const authorizeMw = async (req, res, next) => {
  //  console.log("Called Authorization Middleware");
  let token;
  // console.log('req.user', req.user);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (req.user !== 'admin') {
        req.user = await User.findById(decoded.id);
      }

      next();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(400).json({ error: 'Token is not valid' });
    }
  } else {
    console.log('Unauthorized');
    res.status(401).json({ error: 'Action Denied, Unauthorized' });
  }
};

module.exports = {
  authorizeMw,
};
