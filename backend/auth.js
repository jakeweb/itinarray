const jwt = require('jsonwebtoken');
const config = require('./config');

let auth = {
  createJWT: createJWT,
  ensureAuthenticated: ensureAuthenticated,
  getTokenSocket: getTokenSocket,
  decodeToken: decodeToken
}

function createJWT(user) {
  let encode = {
    id: user.id
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
  // console.log('token', token);
  let decoded = null;
  try {
    decoded = jwt.decode(token, config.tokenSecret);
  } catch (err) {
    return res.status(401).json({
      message: err.message
    });
  }
  // console.log('decoded', decoded);
  req.body.id = decoded.id;
  next();
};

function getTokenSocket(token) {
  let result = {};

  try {
    result.decoded = jwt.verify(token, config.tokenSecret);
    result.error = false;
  } catch (error) {
    result.error = error;
  }

  return result;
};

function decodeToken(req, res) {
  // console.log(req.header);
  if (!req.header('Authorization')) {
    return false;
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
  return decoded;
}

module.exports = auth;
