var jump = function(nums) {
    let steps = 0;
    let max = 0
    let lastMax = 0
    let len = nums.length;
    for(let i=0;i<len-1;i++){
        max = Math.max(max,i+nums[i])
        if(lastMax==i){
            lastMax = max
            steps++
        }
        if(lastMax>len-1){//
            break
        }
    }
    return steps
};