var maxArea = function(height) {
    if(height.length<=1) return -1;
    let head = 0;
    let tail = height.length-1;
    let sum = height[head]<height[tail]?height[head]*(tail-head):height[tail]*(tail-head);
    let max = sum;
    while(head<tail){
        if(height[tail]<height[head]){
            tail--;
        }else{
            head++;
        }
        sum = height[head]<height[tail]?height[head]*(tail-head):height[tail]*(tail-head);
        if(max<sum){
            max = sum
        }
    }
    return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))