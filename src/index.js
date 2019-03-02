module.exports = function getZerosCount(number, base) {
  let index = 0;
  let power = [];
  let res = 0;

  for (let p = 2; p <= base; ++p) {
    if (base % p === 0) {
      power.push(p);
      base = Math.floor(base / p);
      p = 1;
    }
  }
  const maxPower = Math.max.apply(null, power);
  const maxPowerQuantity = power.reduce((acc, el) => {
    if (el === maxPower) {
      acc++;
    }
    return acc;
  }, 0);
  index = maxPower;
  while (index <= number) {
    res += Math.floor(number / index);
    index *= maxPower;
  }
  // console.log(maxPower);
  // console.log(res);
  return Math.floor(res / maxPowerQuantity);
};
