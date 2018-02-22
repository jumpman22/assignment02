/*eslint-env browser*/
var noun;
var number;

number = window.prompt("Enter a number");
noun = window.prompt("Enter a farm animal");


if (number > 1 && noun !== 'goose' && noun !== 'sheep') {
  	window.console.log(number + " " + noun + "s");
} else if ( noun === "goose") {
  	window.console.log(number + " geese");
} else if ( noun === "sheep") {
	window.console.log(number + " sheep");
} else {
		window.console.log(number + " " + noun);
}

    
                       