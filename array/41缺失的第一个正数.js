// 复杂度O(n),未排序
var firstMissingPositive = function(nums) {
    let n = nums.length;
    for(let i = 1;i <= n;i++){
        if(!nums.includes(i)){
            return i;
        }
    }
    return n + 1;
};