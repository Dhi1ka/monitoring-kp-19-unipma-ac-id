const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const tokenGenerator = (user) => {
  const { name, email, password, confirm_password } = user;
  const token = jwt.sign(
    {
      name,
      email,
      password,
      confirm_password,
    },
    secretKey,
  );
  return token;
};

const tokenVerifier = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
