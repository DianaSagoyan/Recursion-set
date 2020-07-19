function removeFirstElement(arr) {
  function iter(arr, occ) {
    if (arr.length === 0) {
      return [];
    }

    const [first, ...rest] = arr;

    if (occ === 1) {
      return arr;
    }

    return iter(rest, occ + 1);
  }
  return iter(arr, 0);
}

let arr = [6, 78, "n", 0, 1];
console.log(removeFirstElement(arr));
