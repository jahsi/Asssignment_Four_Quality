const returnEmail = (str) => {
  const result = Math.random().toString(36).substring(2, 7);
  let index = 2;
  let randomEmail =
    str.slice(0, index) +
    "+" +
    result +
    Math.ceil(Math.random() * 100) +
    str.slice(index);

  return randomEmail;
};

module.exports = { returnEmail };
