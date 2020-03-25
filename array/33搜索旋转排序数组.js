// 时间复杂度要求是O(logn)
// var search = function(nums, target) {
//     return nums.indexOf(target)
// };时间复杂度是O(n)
// 考虑旋转节点的问题
var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
    let mid
    while(low<high){
        mid = Math.floor((low+high) /2)
        if(target<nums[0]&&target>nums[mid]){ //非单调
            low = mid+1
        }else if(nums[0]<=nums[mid]&&(target>nums[mid]||target<nums[0])){
            low = mid+1
        }else{
            high = mid
        }
    }
    return low==high&&nums[low]==target?low:-1
};
// 优化写法
var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
    let mid
    while(low<high){
        mid = Math.floor((low+high) /2)
        if( (nums[0] > nums[mid]) ^ (target > nums[mid]) ^ (target < nums[0]) ) {
            low = mid+1;
        }
        else{
            high = mid;
        }
    }
    return low==high&&nums[low]==target?low:-1
};