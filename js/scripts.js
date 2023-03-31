function mrRobo(num) {
  if (num === 1) {
    return "beep"
  } 
}

function mrRobo(input) {
  if (input.includes("1")) {
    return "beep!"
  };
}


let userInput = [];
function countUp(stopNumber) {
  for (let i = 0; i <= stopNumber; i++) {
    userInput.push(i);
  }
}

function mrRobo(input) {
  const num1 = ['1'];
  const num2 = ['2'];
  const num3 = ['3'];
  let results = ''; 
  
  for (let i = 0; i <input.length; i++) {
    if (input.includes(num1)) {
      return "beep!";
    } else if (input.includes(num2)) {
      return "boop!"; 
    } else if (input.includes(num3)) {
      return "won't you be my neighbor?"
    } else {
      return input; 
    }
  }
  return results;
}