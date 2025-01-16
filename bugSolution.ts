function compare(a: number | undefined, b: number | undefined): number {
  if (a === undefined || b === undefined) {
    return a === b ? 0 : (a === undefined ? -1 : 1); // Handle undefined values
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return Number.isNaN(a) && Number.isNaN(b) ? 0 : NaN; // Handle NaN values appropriately
  }
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
console.log(compare(NaN, 2)); // Output: NaN
console.log(compare(2, NaN)); // Output: NaN
console.log(compare(undefined, 2)); // Output: -1
console.log(compare(2, undefined)); // Output: 1
console.log(compare(undefined, undefined)); // Output: 0
console.log(compare(NaN, NaN)); // Output: 0