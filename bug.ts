function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(2, 2)); // Output: 0

// However, if we use NaN or undefined:
console.log(compare(NaN, 2)); // Output: NaN
console.log(compare(2, NaN)); // Output: NaN
console.log(compare(undefined, 2)); // Output: NaN
console.log(compare(2, undefined)); // Output: NaN