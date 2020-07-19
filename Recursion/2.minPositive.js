function minPositiveElement(arr) {
  if (arr.length === 1) {
    if (arr[0] >= 0) {
      return arr[0];
    } else {
      return -1;
    }
  }
  const [first, ...rest] = arr;
  if (first >= 0 && arr[1] >= 0) {
    if (first > arr[1]) {
      return minPositiveElement(rest);
    } else {
      return minPositiveElement([first].concat(arr.slice(2)));
    }
  } else {
    if (first < 0) {
      return minPositiveElement(rest);
    } else if (arr[1] < 0) {
      return minPositiveElement([first].concat(arr.slice(2)));
    }
  }
}

let arr = [56, -9, 0, 87, -23, -105, 55, 1];
console.log(minPositiveElement(arr));
