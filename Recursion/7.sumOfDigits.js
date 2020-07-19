function sumDigits(num) {
  if (num < 10) {
    return num;
  }
  return sumDigits((num % 10) + sumDigits(parseInt(num / 10)));
}
console.log(sumDigits(1555123));
