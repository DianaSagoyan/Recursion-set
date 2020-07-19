function violatedIndex(arr) {
  function iter(arr, idx) {
    if (arr.length === 1) {
      return -1;
    }

    const [first, ...rest] = arr;

    if (first <= rest[0]) {
      return iter(rest, idx + 1);
    } else {
      return idx + 1;
    }
  }
  return iter(arr, 0);
}

let arr = [-9, -4, -4, 3, 12, 4, 5];
console.log(violatedIndex(arr));
