# Unexpected NaN Comparison in TypeScript

This repository demonstrates a common yet subtle bug in TypeScript (and JavaScript) related to comparing values with `NaN` or `undefined`. The provided code shows how the standard comparison operators behave unexpectedly when these values are involved.

The bug arises because comparison operators with NaN always result in NaN, and the comparison with undefined might cause type coercion issues, leading to incorrect comparisons.  The solution offers a more robust way to handle comparisons in these edge cases.

## Bug
The `compare` function, while seemingly straightforward, returns `NaN` when comparing with `NaN` or `undefined`. This behavior is not always intuitive and can lead to unexpected results in applications.

## Solution
The solution implements a more robust comparison function using `Number.isNaN` to explicitly check for `NaN` and providing specific handling for `undefined` values.