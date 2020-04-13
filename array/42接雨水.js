// 遍历每个元素，获取每一项的左边最大高度和右边最大高度中的最小值减去自己的高度大于零时就是积水量
var trap = function (height) {
  let res = 0
  let leftM = height[0]
  for (let i = 1; i < height.length; i++) {
    let rightM = height[i]
    for (let j = i + 1; j < height.length; j++) {
      if (rightM < height[j]) rightM = height[j]
    }
    let min = Math.min(leftM, rightM)
    if (min - height[i] >= 0) {
      res += min - height[i]
    }
    leftM = leftM > height[i] ? leftM : height[i]
  }
  return res
};