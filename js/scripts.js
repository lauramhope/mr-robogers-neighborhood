// Business Logic
function countUp(input) {
  let inputArray = [];
  for (let i = 0; i <= input; i++) {
    inputArray.push(i); 
  }
  const mrRoboArray = inputArray.map(function(element) {
    let inputNum = element.toString();
    const num1 = '1';
    const num2 = '2'; 
    const num3 = '3';
    if (inputNum.includes(num3)) {
      return "Won't you be my neighbor?"; 
    } else if (inputNum.includes(num2)) {
      return "Boop!";
    } else if (inputNum.includes(num1)) {
      return "Beep!";
    } else {
      return element; 
    }
  });
  showAnswer(mrRoboArray); 
}

function showAnswer(numArray) {
  const outputNum = numArray.join(', ')
  document.getElementById("answer").innerText = outputNum;
}

// User Interface Logic
function submitForm(event){
  event.preventDefault(); 
  const inputNumber = parseInt(document.getElementById("number").value);
  const firstName = document.getElementById("firstName").value;
  document.querySelector("span#spanFirstName").innerText = firstName.concat('!');
  countUp(inputNumber);
}

window.addEventListener("load", function() {
  const form = document.getElementById("robo-form");
  form.addEventListener("submit", submitForm);
}); 