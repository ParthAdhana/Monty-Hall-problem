let stickWins = 0;
let switchWins = 0;
const trials = 10000;

for (let i = 0; i < trials; i++) {
  // (Place the corrected code here without the console.log statements)
  const initialArray = [1, 2, 3];


  // User's initial choice
  const userChoice = initialArray[Math.floor(Math.random() * initialArray.length)];

  // Gate with the prize
  const winningGate = initialArray[Math.floor(Math.random() * initialArray.length)];

  // Host selects a gate to open
  let possibleGatesToOpen = initialArray.filter(
  (gate) => gate !== userChoice && gate !== winningGate
  );

  // Host opens one of these gates
  const removeGate = possibleGatesToOpen[Math.floor(Math.random() * possibleGatesToOpen.length)];

  // Remaining gates after the host opens one
  const choices = initialArray.filter((gate) => gate !== removeGate);

  // Scenarios
  const scenario1 = userChoice; // Contestant sticks with the initial choice
  const scenario2 = choices.find((gate) => gate !== userChoice); // Contestant switches



  if (scenario1 === winningGate) {
    stickWins++;
  } else if (scenario2 === winningGate) {
    switchWins++;
  }
  
}

console.log(`Sticking won ${stickWins} times.`);
console.log(`Switching won ${switchWins} times.`);
