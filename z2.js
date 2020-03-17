function flatten(arr, result = []) {
  for (var i = 0; i < arr.length;  i++) {
    var value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};
console.log(flatten([[1,2,[3]],4]));