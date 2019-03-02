module.exports = function getZerosCount(number, base) {
  let index2 = 2;
  let index5 = 5;
  let res2 = 0;
  let res5 = 0;
  let power = [];

  for (let p = 2; p <= base; ++p) {
    if (base % p === 0) {
      power.push(p);
      base = Math.floor(base / p);
      p = 2;
    }
  }
  // while (index <= base) {
  // power = Math.floor(base / index5);
  //   index *= 5;
  // }
  console.log(power);
  // index = power;
  while (index2 <= number) {
    res2 += Math.floor(number / index2);
    index2 *= 2;
  }
  while (index5 <= number) {
    res5 += Math.floor(number / index5);
    index5 *= 5;
  }
  // console.log(arr);
  console.log(res2, res5, res2 < res5 ? res2 : res5);
};
