function flattenArray(arr) {
  const flat = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flat.push(...flattenArray(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

let arr = [14, [1, [[[3, []]]], 1], 0];
console.log(flattenArray(arr));
