var maxSubArray = function (nums) {
  let max = nums[0]
  let sum = 0
  for (let i = 1; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = num
    }
    max = Math.max(sum, max)
  }
  return max
};