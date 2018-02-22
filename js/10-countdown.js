/*eslint-env browser*/
var number;
var i;
number = window.prompt("Enter a number");

for (i = 0; i <= number; i += 1) {
	window.console.log(number - i);
}