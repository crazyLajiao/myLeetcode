// 两次翻转：先沿对角线，再沿水平中轴线
var rotate = function(matrix) {
    let n = matrix.length
    function swap(arr,[i,j],[m,n]){
        let temp = arr[i][j]
        arr[i][j] = arr[m][n]
        arr[m][n] = temp
    }
    for(let i=0;i<n-1;i++){
        for(j=0;j<n-i;j++){
            swap(matrix,[i,j],[n-j-1,n-i-1])
        }
    }
    for(let i=0;i<n/2;i++){
        for(let j=0;j<n;j++){
            swap(matrix,[i,j],[n-i-1,j])
        }
    }
};