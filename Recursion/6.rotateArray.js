const rotateArray = (arr, n) => {
  if (n > 0) {
    arr.push(arr.shift());
    return rotateArray(arr, n - 1);
  }
  if (n < 0) {
    arr.unshift(arr.pop());
    return rotateArray(arr, n + 1);
  }
  return arr;
};
let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(rotateArray(arr, -2));
