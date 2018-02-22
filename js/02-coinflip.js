/*eslint-env browser*/
var coinFlip = Math.round(Math.random());
var choice = window.prompt('Select "Heads" or "Tails"');


if (coinFlip === 0) {
    coinFlip = 'Heads';
} else {
    coinFlip = 'Tails';
}


if (coinFlip === 'Heads' && coinFlip === choice) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip === 'Heads' && coinFlip !== choice) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip === 'Tails' && coinFlip === choice) {
    window.alert("The flip was tails and you chose tails...you win!");      
} else {
    window.alert("The flip was tails but you chose heads...you lose!");       
}


