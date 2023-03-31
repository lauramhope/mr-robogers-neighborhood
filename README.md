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
Describe: omit123(string)

Test: "it should replace 1, 2, or 3 with their respected replacements with user inputted number."
Code: 
function omit123(string) {
  const number1 = ['1'];
  const number2 = ['2'];
  const number3 = ['3'];
  let results = '';

  for (let i = 0; i <string.length; i++) {
    const num = string[i];
    if (number1.includes(num)) {
      results += "beep";
    } else if (number2.includes(num)) {
      results += "boop";
    } else if (number3.includes(num)) {
      results += "neighbor";
    } else {
      results += num;
    }
  }
  return results;
}
Input: omit123("2")
Expected Output: "boop"
________________________________________

Test: "it should replace the entire number "15" with the word "beep""
Code: 
Expected Output: 

Test: 
Code: 
Expected Output: 





-turn string to number? or keep as string? - can turn string to array easily
-counting up from 0 to inputted number
-turn input into array?