module.exports = function getZerosCount(number, base) {
  let index = 0;
  let power = [];
  let resMax = 0;
  let resMin = 0;

  for (let p = 2; p <= base; ++p) {
    if (base % p === 0) {
      power.push(p);
      base = Math.floor(base / p);
      p = 1;
    }
  }
  const maxPower = Math.max.apply(null, power);
  const minPower = Math.min.apply(null, power);
  const maxPowerQuantity = power.reduce((acc, el) => {
    if (el === maxPower) {
      acc++;
    }
    return acc;
  }, 0);
  const minPowerQuantity = power.reduce((acc, el) => {
    if (el === minPower) {
      acc++;
    }
    return acc;
  }, 0);
  index = maxPower;
  while (index <= number) {
    resMax += Math.floor(number / index);
    index *= maxPower;
  }
  index = minPower;
  while (index <= number) {
    resMin += Math.floor(number / index);
    index *= minPower;
  }
  return Math.floor(resMax / maxPowerQuantity) <
    Math.floor(resMin / minPowerQuantity)
    ? Math.floor(resMax / maxPowerQuantity)
    : Math.floor(resMin / minPowerQuantity);
};
