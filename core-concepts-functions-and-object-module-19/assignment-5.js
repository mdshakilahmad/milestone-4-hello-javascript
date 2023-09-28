/* 
5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.
 */

// using chatGpt
// Define the variable signal with a value of green, yellow, or red
const signal = "red"; // Change this value to test different scenarios

// Function to determine the activity based on the signal value
function crossingRoad(signal) {
  switch (signal) {
    case "green":
      return "Cross the road safely.";
    case "yellow":
      return "Stop and wait for the signal to turn green.";
    case "red":
      return "Do not cross the road. Wait for the signal to turn green.";
    default:
      return "Invalid signal value. Please use green, yellow, or red.";
  }
}

// Call the function and output the activity based on the signal value
const activity = crossingRoad(signal);
console.log(activity);
