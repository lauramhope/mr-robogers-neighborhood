Describe: mrRobo()

Test: "it should return the word "beep!" if the input is 1"
Code: function mrRobo(input) {
  if (input === "1") {
    return "beep!"
  } 
}
Input: mrRobo("1");
Expected Output: "beep!"
_________________________________________
Test: "it should return the word "beep!" if the input includes 1"
Code: function mrRobo(input) {
  if (input.includes("1")) {
    return "beep!"
  };
}
Input: "41"
Expected Output: "Beep!"
_________________________________________
Describe: countUp(stopNumber)

Test: "it should return an array from the users inputted number starting at zero"
Code: let userInput = [];
function countUp(stopNumber) {
  for (let i = 0; i <= stopNumber; i++) {
    userInput.push(i);
  }
}
Input: countUp(4); countUp("7")
Expected Output: userInput; [0,1,2,3,4]; [0,1,2,3,4,5,6,7];

_________________________________________
Test: "it should replace the entire number "15" with the word "beep""
Code: function mrRobo(input) {
  const num1 = ['1'];
  let results = ''; 
  
  for (let i = 0; i <input.length; i++) {
    if (input.includes(num1)) {
      return "beep";
    } else {
      return input; 
    }
  }
  return results;
}
Expected Output: "beep"
_________________________________________

Test: "it should replace 1, 2, or 3 with their respected replacements with user inputted number."
Code: 
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
Expected Output: "won't you be my neighbor?"
________________________________________

HIERARCHY

Test: "should put 3 replacement first, then 2, then 1 if input has both numbers"
Code: 
function mrRobo(input) {
  const num1 = ['1'];
  const num2 = ['2'];
  const num3 = ['3'];
  let results = ''; 
  
  for (let i = 0; i <input.length; i++) {
    if (input.includes(num3)) {
      return "won't you be my neighbor?";
    } else if (input.includes(num2)) {
      return "boop!"; 
    } else if (input.includes(num1)) {
      return "beep!"
    } else {
      return input; 
    }
  }
  return results;
}
Expected Output: mrRobo("13"); "won't you be my neighbor?"



-turn string to number? or keep as string? - can turn string to array easily
-counting up from 0 to inputted number
-turn input into array?