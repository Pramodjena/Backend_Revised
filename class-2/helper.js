// Create modules

const addition = (num1, num2) => {
  return num1 + num2;
};

const substraction = (num1, num2) => {
  return num1 - num2;
};
const multiplication = (num1, num2) => {
  return num1 * num2;
};
const division = (num1, num2) => {
  return num1 / num2;
};

// Export modules
module.exports = { addition, substraction, multiplication, division };
