const { tokenVerifier } = require("../helpers/jwt");

const authCompany = (req, res, next) => {
  console.log(`Auth Middleware is Work!`);

  const { access_token } = req.headers.access_token;

  if (access_token) {
    try {
      let verify = tokenVerifier(access_token);
      req.companyData = verify;
    } catch (error) {
      res.status(401).json({
        error,
        message: "Company not authenticated!",
      });
    }
  } else {
    res.status(404).json({
      message: "Token not found!",
    });
  }

  next();
};

const authorCompany = (req, res, next) => {
  console.log("Authorization Middleware is Work!");

  const { access_token } = req.headers.access_token;

  if (!access_token) {
    res.status(403).json({
      message: "Forbidden!",
    });
  } else {
    const id = +req.params.id;

    report
      .findByPk(id)
      .then((companyId) => {
        if (companyId !== req.companyData.id) {
          res.status(401).json({
            message: "Unauthorized!",
          });
        } else {
          next();
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};

module.exports = { authCompany, authorCompany };
