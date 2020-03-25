// [1,3,5,4,2]->[1,4,2,3,5]
var nextPermutation = function(nums) {
    for(var i=nums.length-1;i>0&&nums[i]<=nums[i-1];i--);//i=2
    if(i==0){
        reverse(0,nums.length-1)
        return
    }//3 3
    for(var j=i+1;j<nums.length&&nums[i-1]<nums[j];j++);
    swap(i-1,j-1) //1 
    reverse(i,nums.length-1)
    return;
    function reverse(a,b){
        while(a<b){
            swap(a,b)
            a++;
            b--
        }
    }
    function swap(a,b){
        [nums[a],nums[b]] = [nums[b],nums[a]]
    }
};

function next(nums){
    for(var i=nums.length-1;i>0&&nums[i]<nums[i-1];i--);
    if(i==0){
        reverse(0,nums.length-1)
        return;
    }
    for(var j=i+1;j<nums.length&&nums[i-1]<nums[j];j++);
    swap(i-1,j-1)
    return;
}


