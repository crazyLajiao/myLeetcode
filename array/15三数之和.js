var threeSum = function(nums) {
    let arr = []
    if(nums.length<3) return []
    if(nums.length==3&&(nums[0]+nums[1]+nums[2])==0) return [nums];
    if(nums.length==3&&(nums[0]+nums[1]+nums[2])!=0) return [];
    nums.sort()
    if(nums[0]>0){return []}
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]==0){
                    arr.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    // 去重
    if(arr.length>1){
        for(let i=0;i<arr.length-1;i++){
            for(let j=i+1;j<arr.length;j++){
                let temp1 = JSON.parse(JSON.stringify(arr[i]))
                let temp2 = JSON.parse(JSON.stringify(arr[j]))
                if(JSON.stringify(temp1)==JSON.stringify(temp2)){
                    arr.splice(j,1);
                    j--
                }
            }
        }
    }
    return arr;
};

var threeSum = function(nums) {
    if (nums.length < 3) return [];
    const list = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i;
        let right = nums.length - 1;
        while(left<right){
            if (left === i) {
                left++;
            } else if (right === i) {
                right--;
            } else if (nums[left] + nums[right] + nums[i] === 0) {
                list.push([nums[left], nums[right], nums[i]]);
                while(nums[left] === nums[left + 1]){
                    left++
                }
                left++;
                while(nums[right]==nums[right-1]){
                    right--
                }
                right--
                continue;
            }else if(nums[left] + nums[right] + nums[i] > 0){
                right--
            }else{
                left++
            }
        }
    }
    return list
}
