/* 
// 1. convert radian to degree

radianToDegree;
 */
function radianToDegree(inputDegree) {
  const radian = 57.2957795; // 1 radian = 57.2957795 degree
  return radian * inputDegree;
}

const degree = 4;
const result = radianToDegree(degree);
console.log(result);
