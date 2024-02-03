//variables-elements
var addEl = document.getElementById("add");
var subtractEl = document.getElementById("subtract");
var multiplyEl = document.getElementById("multiply");
var divideEl = document.getElementById("divide");

var time1 = document.getElementById("one-minute");
var time2 = document.getElementById("two-minutes");
var time5 = document.getElementById("five-minutes");
var time10 = document.getElementById("ten-minutes");
var time20 = document.getElementById("twenty-minutes");

var practiceEl = document.getElementById("practice-btn");
//variables
var time, operator;

// user selects operation and time
function getOperator() {
  console.log("operation");
}

function setTime() {
  console.log("time");
}
//user presses start
function startPractice() {
  console.log("start");
}
//user gives input

//computer checks for correct or incorrect

//if correct correct score goes up

//if incorrect incorrect score goes up

//at the end of the time, the scores are recapped

//event listeners
addEl.addEventListener("click", getOperator);
subtractEl.addEventListener("click", getOperator);
multiplyEl.addEventListener("click", getOperator);
divideEl.addEventListener("click", getOperator);

time1.addEventListener("click", setTime);
time2.addEventListener("click", setTime);
time5.addEventListener("click", setTime);
time10.addEventListener("click", setTime);
time20.addEventListener("click", setTime);

practiceEl.addEventListener("click", startPractice);
