function mrRobo(event) {
  event.preventDefault();
  const num1 = '1';
  const num2 = '2';
  const num3 = '3'; 
  const inputNum = document.querySelector("input#number").value;
  let result;
  let newArray = [];

  function countUp(input) {
    for(let i = 0; i <= input; i++) {
      newArray.push(i); 
    }
    return newArray;
  }

  document.getElementById("answer").innerText = result; 
}


Window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit, mrRobo")
}); 




// let userInput = [];
// function countUp(stopNumber) {
//   for (let i = 0; i <= stopNumber; i++) {
//     userInput.push(i);
//   }
//   return userInput.toString(); 
// }


// function mrRobo(input) {
//   const num1 = ['1'];
//   const num2 = ['2'];
//   const num3 = ['3'];
//   let results = ''; 
  
//   for (let i = 0; i <input.length; i++) {
//     if (input.includes(num3)) {
//       return "won't you be my neighbor?";
//     } else if (input.includes(num2)) {
//       return "boop!"; 
//     } else if (input.includes(num1)) {
//       return "beep!"
//     } else {
//       return input; 
//     }
//   }
//   return results;
// }


// function mrRobo(input) {
//   const num1 = '1';
//   const num2 = '2';
//   const num3 = '3';
//   let results = ''; 
  
//   for (let i = 0; i <input.length; i++) {
//     if (input.includes('3')) {
//       return "won't you be my neighbor?";
//     } else if (input.includes('2')) {
//       return "boop!"; 
//     } else if (input.includes('1')) {
//       return "beep!"
//     } else {
//       return input; 
//     }
//   }
//   return results;
// }

// userInput.toString().replaceAll('1','beep');


// __________________
// function mrRobo(input) {
//   const num1 = '1';
//   const num2 = '2';
//   const num3 = '3';
//   let results = '';

//   let newArray = [];
//   function countUp(input) {
//     for (let i = 0; i<= input; i++) {
//       newArray.push(i);
//     }
//     return newArray.toString();
//   }

//   for (let i = 0; i <= input.length; i++) {
//     if (input.includes(num3)) {
//       return "won't you be my neighbor?";
//     } else if (input.includes(num2)) {
//       return "boop!";
//     } else if (input.includes(num1)) {
//       return "beep!";
//     } else {
//       return input;
//     }
//   }
//   return results; 
// }
// ____ mrRobo('14'); = 'beep!'

// let newArray = [];
// function countUp(input) {
//   for (let i = 0; i <= input; i++) {
//     newArray.push(i);
//   } if (input.includes('3')) {
//     return "won't you be my neighbor?"; 
//   } else if (input.includes('2')) {
//     return "boop";
//   } else if (input.includes('1')) {
//     return "beep"; 
//   } else {
//     return input;
//   }
//   return newArray; 
// }
// ------- countUp('1'); 'beep!'