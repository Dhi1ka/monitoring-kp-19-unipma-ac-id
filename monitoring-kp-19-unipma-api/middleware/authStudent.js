const { tokenVerifier } = require("../helpers/jwt");

const authStudent = (req, res, next) => {
  console.log(`Auth Middleware is Work!`);

  const { access_token } = req.headers;

  if (access_token) {
    try {
      let verify = tokenVerifier(access_token);
      req.userData = verify;
    } catch (error) {
      res.status(401).json({
        error,
        message: "Student not authenticated!",
      });
    }
  } else {
    res.status(404).json({
      message: "Token not found!",
    });
  }

  next();
};

module.exports = { authStudent };
