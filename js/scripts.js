function countUp(input) {
  let newArray = [];
  for(let i = 0; i <= input; i++) {
    newArray.push(i);
  }
  return newArray; 
}

function mrRobo(event) {
  event.preventDefault();
  countUp();
  const inputNum = document.querySelector("input#number").value;
  const num1 = '1';
  const num2 = '2';
  const num3 = '3';
  let results = '';

  for(let i = 0; i < inputNum.length; i++) {
    if (inputNum.includes(num3)) {
      return "won't you be my neighbor?";
    } else if (inputNum.includes(num2)) {
      return "boop!";
    } else if (inputNum.includes(num1)) {
      return "beep!";
    } else {
      return inputNum; 
    }
  }
  return results; 
}

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", mrRobo);
});
