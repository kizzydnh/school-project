const generateRandomCode = () => {
  // Generate a random number between 1 and 5
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  // Return the code based on the random number
  if (randomNumber === 1) {
    return `console.log("Hello, World!");`;
  } else if (randomNumber === 2) {
    return `const name = prompt("What is your name?"); alert("Hi, " + name + "!");`;
  } else if (randomNumber === 3) {
    return `const userInput = prompt("Enter a number: "); const num = parseInt(userInput); console.log(num * 2);`;
  } else if (randomNumber === 4) {
    return `const name = "John"; const age = 30; const message = \`Hello, my name is \${name} and I am \${age} years old.\`; console.log(message);`;
  } else if (randomNumber === 5) {
    return `const colors = ["red", "blue", "green"]; let i = 0; while (i < colors.length) { console.log(colors[i]); i++; }`;
  }
};
