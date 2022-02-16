const bcrypt = require("bcrypt");
const saltRound = +process.env.SALT_ROUND;

const encryptPass = (pass) => {
  return bcrypt.hashSync(pass, saltRound);
};

const decryptPass = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};

module.exports = {
  encryptPass,
  decryptPass,
};
