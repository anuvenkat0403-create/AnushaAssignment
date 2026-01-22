function findTargetIndices(nums, target) {
  // 1. Initialize an empty array
  const results = [];

  // 2. Use nested loops
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      
      // 3. Check if sum equals target
      if (nums[i] + nums[j] === target) {
        
        // 4. Add indices to results
        results.push([i, j]);
      }
    }
  }

  // 5. Return results
  return results;
}

// Example call
const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

console.log(findTargetIndices(nums, target));
