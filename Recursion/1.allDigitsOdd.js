function areDigitsOdd(num) {
  let numCopy = num;
  if (numCopy === 0) {
    return true;
  }
  if ((numCopy % 10) % 2 === 0) {
    return false;
  } else {
    return (numCopy = areDigitsOdd(parseInt(numCopy / 10)));
  }
}

console.log(areDigitsOdd(5));
