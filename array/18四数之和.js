var fourSum = function(nums, target) {
    if(nums.length<4) return []
    let res=[];
    nums.sort((a, b) => a - b)
    for(let i=0;i<nums.length;i++){
        if(i>0&&nums[i]==nums[i-1]) continue;
        let newTarget = target-nums[i]
        for(let j = i+1;j<nums.length;j++){
            if(j>i+1&&nums[j]==nums[j-1]) continue;
            let newTarget2 = newTarget-nums[j]
            let k = j+1,q=nums.length-1
            while(k<q){
                if(nums[k]+nums[q]==newTarget2){
                    res.push([nums[i],nums[j],nums[k],nums[q]])
                    while(k<q&&nums[k]==nums[k+1]) ++k;
                    while(k<q&&nums[q]==nums[q-1]) --q;
                    ++k;
                    --q;
                }else if(nums[k]+nums[q]<newTarget2) ++k;
                else --q;
            }
        }
    }
    return res;
};

var fourSum = function(nums, target) {
    if(nums.length<4) return [];
    let res = [];
    nums.sort((a, b) => a - b);
    for(let i=0;i<nums.length;i++){
        // if (nums[i] > target) break;负数情况
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j=i+1;j<nums.length;j++){
            if (j>i+1&&nums[j] === nums[j - 1]) continue;
            let left = j+1;
            let right = nums.length - 1;
            while(left<right){
                let sum = nums[left] + nums[right]+nums[i]+nums[j]
                if(sum>target){
                    right--
                }else if(sum<target){
                    left++
                }else{
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    while(nums[left] === nums[left + 1]){
                        left++
                    }
                    left++;
                    while(nums[right]==nums[right-1]){
                        right--
                    }
                    right--
                    continue;
                }
            }
        }
    }
    return res
}