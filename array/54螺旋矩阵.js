var spiralOrder = function (matrix) {
  // let result = []
  // if(matrix.length>0){ //首先添加第一行
  //   result.concat(matrix[0])
  //   matrix.shift()
  // }   
  // var i;
  // for (i = 1; i < matrix.length-1; i++){
  //   result.push(matrix[i].pop())
  // }
  // result.concat(matrix[i].reverse())
  // matrix.pop()
  let result = []
  let i = 0;
  let j = 0
  let n = matrix.length - 1
  if (n < 0) { return result }
  let m = matrix[0].length - 1
  let turn = m == 0 ? 'd' : 'r'
  let boundl = 0
  let boundr = m
  let boundd = n
  let boundu = 0
  for (let k = 0; k < (m + 1) * (n + 1); k++) {
    result.push(matrix[i][j])
    if (turn == 'r') {
      j++;
      if (j == boundr) {
        turn = 'd'
        boundu++
      }
    } else if (turn == 'd') {
      i++;
      if (i == boundd) {
        turn = 'l'
        boundr--
      }
    } else if (turn == 'l') {
      j--;
      if (j == boundl) {
        turn = 'u'
        boundd--
      }
    } else if (turn == 'u') {
      i--;
      if (i == boundu) {
        turn = 'r'
        boundl++
      }
    }
  }
  return result
};