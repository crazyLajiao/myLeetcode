// 二分法查找
// 复杂度O(logn)
// var binearySearch= function(nums,target){
//     let low = 0;
//     let high = nums.length-1
//     while(low<high){
//         let mid = Math.floor((low+high)/2)
//         if(nums[mid]>target){
//             high = mid-1
//         }else if(nums[mid]<target){
//             low = mid+1
//         }else{
//             return mid
//         }
//     }
//     return (nums[low]==target?low:-1)
// }
var searchRange = function(nums, target) {
    let low =0
    let high = nums.length-1;
    let list = []
    while(low<high){
        let mid = Math.floor((low+high)/2)
        if(nums[mid]>target){
            high = mid-1
        }else if(nums[mid]<target){
            low = mid+1
        }else{
            list[0] = mid;
            list[1] = mid;
            // let temp = mid;
            while(nums[mid-1]==target){
                list[0] = mid-1
                mid--
            }
            mid = list[1]
            while(nums[mid+1]==target){
                list[1] = mid+1;
                mid++
            }
            return list;
        }
    }
    return (nums[low]==target?[low,low]:[-1,-1])
};