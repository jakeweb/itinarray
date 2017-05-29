const jwt = require('jsonwebtoken');
const config = require('./config');

let auth = {
  createJWT: createJWT,
  ensureAuthenticated: ensureAuthenticated
}

function createJWT(user) {

  let encode = {
    id: user.ID,
    role: user.role
  };
  return jwt.sign(encode, config.tokenSecret);
};

function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).json({
      message: 'Please make sure your request has an Authorization header'
    });
  }
  let token = req.get('Authorization');
  let decoded = null;
  try {
    decoded = jwt.decode(token, config.tokenSecret);
  } catch (err) {
    return res.status(401).json({
      message: err.message
    });
  }

  req.body.id = decoded.id;
  req.body.role = decoded.role;
  next();
};

module.exports = auth;
