//JavaScript
document.getElementById("button").addEventListener("click", myScriptJS);

//jQuery
$(".button").click(myScriptJQ);

function myScriptJS() {
  alert("Hello, I was alerted using JavaScript!");
}

function myScriptJQ() {
  alert("Hello, I was alerted using JQuery!");
}