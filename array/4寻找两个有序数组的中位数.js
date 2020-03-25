var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length+nums2.length;
    if(len%2){
        if(len==1) return nums1.length>nums2.length ? nums1[0] : nums2[0]
        let center = Math.ceil(len/2);
        while(center>1){
            if(nums2.length>0&&nums1.length>0){
                nums1[0]>nums2[0] ? nums2.shift():nums1.shift();
                
            }else{
                if(nums1.length>0){
                    return nums1.splice(center-1,1)
                }
                if(nums2.length>0){
                    return nums2.splice(center-1,1)
                }
            }
            center--;
        }
        if(nums1.length>0&&nums2.length==0){
            return nums1.splice(center-1,1)
        }
        if(nums2.length>0&&nums1.length==0){
            return nums2.splice(center-1,1)
        }
        return nums1[0]>nums2[0] ? nums2.shift():nums1.shift()
    }else{
        if(len==2) return nums1.length>nums2.length ? (nums1[0]+nums1[1])/2 : (nums1.length==nums2.length? (nums1[0]+nums2[0])/2:(nums2[0]+nums2[1])/2)
        let center = Math.floor(len/2)
        while(center>1){
            if(nums2.length>0&&nums1.length>0){
                nums1[0]>nums2[0] ? nums2.shift():nums1.shift();
            }else{
                if(nums1.length>0){
                    let aa = nums1.splice(center-1,2)
                    return (aa[0]+aa[1])/2
                }
                if(nums2.length>0){
                    let aa = nums2.splice(center-1,2)
                    return (aa[0]+aa[1])/2
                }
            }
            center--;
        }
        if(nums1.length>0&&nums2.length==0){
            let aa = nums1.splice(center-1,2)
            return (aa[0]+aa[1])/2
        }
        if(nums2.length>0&&nums1.length==0){
            let aa = nums2.splice(center-1,2)
            return (aa[0]+aa[1])/2
        }
        let n1 = nums1[0]>nums2[0] ? nums2.shift():nums1.shift();
        let n2;
        if(nums2.length>0&&nums1.length>0){
            n2 = nums1[0]>nums2[0] ? nums2.shift():nums1.shift();
        }else{
            n2 = nums2.length>0 ? nums2.shift():nums1.shift();
        }
        return (n2+n1)/2
    }
};

console.log(findMedianSortedArrays([1,2],[2,3]))