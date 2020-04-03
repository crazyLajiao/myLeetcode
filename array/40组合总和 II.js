// 每个数字每个组合中只能使用一次
var combinationSum2 = function(candidates, target) {
    let len = candidates.length;
    let res = [];
    let temp = [];
    candidates = candidates.sort((a,b) => {return a - b})
    let back = function(temp,target,start){
        if(target==0){
            res.push(temp)
            return 
        }else{
            for(let i=start;i<len;i++){
                if(target<candidates[i]) break
                if((i>start)&&(candidates[i]==candidates[i-1])) continue;
                temp.push(candidates[i])
                back(temp.slice(),target-candidates[i],i+1)
                temp.pop()
            }
        }
    }
    back(temp,target,0)
    return res
};
