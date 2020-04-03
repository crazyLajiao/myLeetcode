var combinationSum = function(candidates, target) {
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
                temp.push(candidates[i]);
                back(temp.slice(),target-candidates[i],i)
                temp.pop()
            }
        }
    }
    back(temp,target,0)
    return res
};