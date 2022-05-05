var calculation, screen;
screen = document.getElementById("screen");
calculation = "";
// calculating circumference
document.getElementById("circ").addEventListener("click", function() {
  calculation *= 6.28;
  screen.innerHTML = calculation;
});

// clearing the numbers from the screen
document.getElementById("ac").addEventListener("click", function() {
  calculation = "";
  screen.innerHTML = calculation;
}); 

//adding a number to the screen 
function regInput(num) {
  calculation = calculation.concat(num);
  screen.innerHTML = calculation;
}

//evaluating the expression and displaying the output
function total() {
   calculation = eval(calculation);
   screen.innerHTML = parseInt(calculation);
  
}

