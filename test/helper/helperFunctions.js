const returnEmail = (str) => {
  let index = 2;
  let randomEmail =
    str.slice(0, index) +
    "+" +
    Math.ceil(Math.random() * 100) +
    str.slice(index);
  return randomEmail;
};

module.exports = { returnEmail };
