/*eslint-env browser*/
var ursulaGrade;
var paulGrade;
var henryGrade;
var tabithaGrade;
var lucyGrade;
var uLetter;
var pLetter;
var hLetter;
var tLetter;
var lLetter;

ursulaGrade = window.prompt("Ursula, enter your score from 0-100");
if (ursulaGrade >= 90 && ursulaGrade <= 100) {
	uLetter = 'A';
} else if (ursulaGrade >= 80 && ursulaGrade <= 89) {
	uLetter = 'B';
} else if (ursulaGrade >= 70 && ursulaGrade <= 79) {
    uLetter = 'C';
} else if (ursulaGrade >= 60 && ursulaGrade <= 69) {
	uLetter = 'D';
} else {
	uLetter = 'F';
}

paulGrade = window.prompt("Paul, enter your score from 0-100");
if (paulGrade >= 90 && paulGrade <= 100) {
	pLetter = 'A';
} else if (paulGrade >= 80 && paulGrade <= 89) {
	pLetter = 'B';
} else if (paulGrade >= 70 && paulGrade <= 79) {
    pLetter = 'C';
} else if (paulGrade >= 60 && paulGrade <= 69) {
	pLetter = 'D';
} else {
	pLetter = 'F';
}


henryGrade = window.prompt("Henry, enter your score from 0-100");
if (henryGrade >= 90 && henryGrade <= 100) {
	hLetter = 'A';
} else if (henryGrade >= 80 && henryGrade <= 89) {
	hLetter = 'B';
} else if (henryGrade >= 70 && henryGrade <= 79) {
    hLetter = 'C';
} else if (henryGrade >= 60 && henryGrade <= 69) {
	hLetter = 'D';
} else {
	hLetter = 'F';
}


tabithaGrade = window.prompt("Tabitha, enter your score from 0-100");
if (tabithaGrade >= 90 && tabithaGrade <= 100) {
	tLetter = 'A';
} else if (tabithaGrade >= 80 && tabithaGrade <= 89) {
	tLetter = 'B';
} else if (tabithaGrade >= 70 && tabithaGrade <= 79) {
    tLetter = 'C';
} else if (tabithaGrade >= 60 && tabithaGrade <= 69) {
	tLetter = 'D';
} else {
	tLetter = 'F';
}


lucyGrade = window.prompt("Lucy, enter your score from 0-100");
if (lucyGrade >= 90 && lucyGrade <= 100) {
	lLetter = 'A';
} else if (lucyGrade >= 80 && lucyGrade <= 89) {
	lLetter = 'B';
} else if (lucyGrade >= 70 && lucyGrade <= 79) {
    lLetter = 'C';
} else if (lucyGrade >= 60 && lucyGrade <= 69) {
	lLetter = 'D';
} else {
	lLetter = 'F';
}

var avg = (Number(ursulaGrade) + Number(paulGrade) + Number(henryGrade) + Number(tabithaGrade) + Number(lucyGrade)) / 5;


window.console.log("Student(s)\t\t\t Grade");
window.console.log("-------------------------------------");
window.console.log("Ursula \t\t\t\t" + uLetter);
window.console.log("Paul \t\t\t\t" + pLetter);
window.console.log("Henry \t\t\t\t" + hLetter);
window.console.log("Tabitha \t\t\t" + tLetter);
window.console.log("Lucy \t\t\t\t" + lLetter);
window.console.log("-------------------------------------");
window.console.log("Average Points \t\t" + avg);


