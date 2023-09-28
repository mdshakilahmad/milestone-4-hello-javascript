/* 
function fullName(parameter){
    function body
    return
}
var returnedValue = functionName(parameter value)
 */

function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;
  //   console.log(average);
  return average;
}
const assignmentMraks1 = 60;
const assignmentMraks2 = 58;
const assignmentMraks3 = 59;

var myAverage = getAverage(
  assignmentMraks1,
  assignmentMraks2,
  assignmentMraks3
);

// var myAverage = getAverage(60, 50, 20);

console.log("my average so far: ", myAverage);
