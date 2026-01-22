/**
 * Computes the factorial of a non-negative integer using a loop
 * @param n - non-negative integer
 * @returns factorial of n
 */
function factorial(n: number): number {
  // Step 1: Check for negative numbers
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  // Step 2: Initialize result
  let result: number = 1;

  // Step 3: Use loop to calculate factorial
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  // Step 4: Return result
  return result;
}

// ✅ Example calls (valid inputs)
console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 1:", factorial(1)); // 1
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Factorial of 7:", factorial(7)); // 5040

// ❌ Example call (invalid input - negative number)
try {
  console.log("Factorial of -3:", factorial(-3));
} catch (error) {
  console.error("Error:", (error as Error).message);
}
