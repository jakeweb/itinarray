var validate = function () {
  this.checkPattern = function (req, res, next) {
    var patternName = /^.{2,30}$/;
    var patternPsw = /^.{6,30}$/;
    var patternEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if (patternName.test(req.body.name) && patternPsw.test(req.body.password) && patternEmail.test(req.body.email)) {
      next();
    } else {
      return res.status(406).json('Error 406 (Not Acceptable Data)');
    }
  }
};

module.exports = validate;
