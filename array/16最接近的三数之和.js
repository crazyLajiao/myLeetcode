var threeSumClosest = function(nums, target) {
    if(nums.length<3) return
    nums.sort();
    let sum,res=nums[0]+nums[1]+nums[2]-target;
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                sum = nums[i]+nums[j]+nums[k];
                if(sum==target){
                    return target
                }
                if(Math.abs(sum-target)<Math.abs(res)){
                    res = sum-target
                }
            }
        }
    }
    return res+target
};

var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return;
    nums.sort((a, b) => a - b)
    let sum = nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let k = i+1;
        let len = nums.length-1
        while(k<len){
            let tempSum = nums[i]+nums[k]+nums[len]
            if(Math.abs(tempSum-target)<Math.abs(sum-target)){
                sum = tempSum
            }
            if(tempSum>target){
                len--;
            }else if(tempSum<target){
                k++;
            }else{
                return target
            }
        }
    }
    return sum
}