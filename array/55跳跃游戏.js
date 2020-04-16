var canJump = function (nums) {
  let max = 0
  let lastMax = 0
  // let step = 0
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i] + i)
    if (lastMax == i) {
      // step++
      lastMax = max
    }
    if (lastMax >= nums.length - 1) {
      flag = true
      break;
    }
  }
  return flag
};
