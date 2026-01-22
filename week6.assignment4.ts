/**
 * Returns the intersection of two arrays without duplicates
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function intersection(arr1, arr2) {
  // 1. Initialize an empty result array
  const result = [];

  // 2. Loop through first array
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    // 3. Check if element exists in arr2
    //    and is not already in result
    if (arr2.includes(element) && !result.includes(element)) {
      // 4. Add common element to result
      result.push(element);
    }
  }

  // 5. Return intersection array
  return result;
}
