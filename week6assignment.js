function countOccurrences(nums, k) {
  let count = 0; // Step 1: Initialize count

  for (let i = 0; i < nums.length; i++) { // Step 2: Loop through array
    if (nums[i] === k) { // Step 3: Compare element with k
      count++; // Step 4: Increment count
    }
  }

  return count; // Step 5: Return count
}

// Example usage
const nums = [2, 4, 5, 2, 1, 2];
const k = 2;
console.log("Week 6 Assignment Output:");

console.log(countOccurrences(nums, k)); // Output: 3
