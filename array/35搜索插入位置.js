// 二分法
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low<high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid]>target){
            high = mid-1;
            if(nums[mid-1]<target){
                return mid;
            }
        }else if(nums[mid]<target){
            low = mid+1
            if(nums[mid+1]>target){
                return mid+1;
            }
        }else{
            return mid;
        }
    }
    if(nums[low]>=target){
        return low;
    }else{
        return low+1
    }
};
// 更优
var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    if (target > nums[right]) return right + 1;
    while (left < right) {
        var index = parseInt((left + right) >>> 1);//取左中位数
        if (nums[index] < target) left = index + 1; //中位数小于目标值，削去区间左侧
        else right = index; //中位数大于等于目标值，削去区间右侧
    }
    return left;
}