//---------------------------------------------------------------------
const SVG = document.querySelector("svg");
let mode = 0; // 0=shapes, 1=digits, 2=letters
//---------------------------------------------------------------------
let WIDTHMAX = 600;
const WIDTHMIN = 0;
let HEIGHTMAX = 600;
const HEIGHTMIN = 0;
const RADIANSHIGH = Math.PI;
const RADIANSLOW = 0;
const DEGREESHIGH = 180;
const DEGREESLOW = 0;
//---------------------------------------------------------------------
function view() {
    WIDTHMAX = window.innerWidth;
    HEIGHTMAX = window.innerHeight;
	SVG.setAttribute("viewBox", "0 0 "+WIDTHMAX+" "+HEIGHTMAX);
	SVG.setAttribute("width", WIDTHMAX);
	SVG.setAttribute("height", HEIGHTMAX);
	}
//---------------------------------------------------------------------
view();
window.addEventListener("resize", function(){view()});
//---------------------------------------------------------------------
function starPoints(cx, cy, outerRadius, innerRadius, points = 5, rotation) {
	const coordinates = [];
	for (let i = 0; i < points * 2; i++) {
		const radius = i % 2 === 0 ? outerRadius : innerRadius;
		const angle = rotation + i * Math.PI / points;
        coordinates.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
		}
	return(coordinates.join(" "));
	}
//---------------------------------------------------------------------
function polygonPoints(sides, cx, cy, radius, rotation) {
	const coordinates = [];
	for (let i = 0; i < sides; i++) {
		const angle = rotation + i * (2 * Math.PI / sides);
		coordinates.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
		}
	return coordinates.join(" ");
	}
//---------------------------------------------------------------------
function randomIntegerRange (min = 0, max = 1200) {
	return(Math.floor((Math.random()*(max-min))+min));
	}
//---------------------------------------------------------------------
const COLORS = ["red","orange","yellow","green","blue","indigo","violet","white","#111111"]; // blackish
const COLORSMAX = COLORS.length;
const COLORSMIN = 0;
//---------------------------------------------------------------------
function randomColor () {
	return(COLORS[randomIntegerRange(COLORSMIN,COLORSMAX)]);
	}
//---------------------------------------------------------------------
const SOUNDS = ["Sounds/boing.mp3","Sounds/blip.mp3","Sounds/toot.mp3","Sounds/blurp.mp3","Sounds/floop.mp3","Sounds/pluck.mp3","Sounds/honk.mp3","Sounds/peop.mp3","Sounds/bell.mp3","Sounds/crack.mp3"];
const SOUNDSMAX = SOUNDS.length;
const SOUNDSMIN = 0;
//---------------------------------------------------------------------
function playSound() {
	const audio = new Audio(SOUNDS[randomIntegerRange(SOUNDSMIN,SOUNDSMAX)]);
	audio.play();
	}
//---------------------------------------------------------------------
const SCREEN = document.getElementById("screen");
const DIALOG = document.getElementById("warning");
const SHAPESMAX = 5;
const SHAPESMIN = 0;
const RADIUSHIGH = 359;
const RADIUSLOW = 48;
const TRIANGLE = 3;
const PENTAGON = 5;
//---------------------------------------------------------------------
function shapes () {
	let shape = "";
	switch(randomIntegerRange(SHAPESMIN,SHAPESMAX)) {
		case 0:
			shape +=
				"<circle cx=\"" +
				randomIntegerRange(WIDTHMIN,WIDTHMAX) +
				"\" cy=\"" +
				randomIntegerRange(HEIGHTMIN,HEIGHTMAX) +
				"\" r=\"" +
				randomIntegerRange(RADIUSLOW,RADIUSHIGH) +
				"\" fill=\"" +
				randomColor() +
				"\" />";
				// console.log("circle - "+shape);
			break;
		case 1:
			let x = randomIntegerRange(WIDTHMIN,WIDTHMAX);
			let y = randomIntegerRange(HEIGHTMIN,HEIGHTMAX);
			let width = randomIntegerRange(RADIUSLOW,RADIUSHIGH);
			let height = randomIntegerRange(RADIUSLOW,RADIUSHIGH);
			let cx = x + width / 2;
			let cy = y + height / 2;
			shape +=
				"<rect x=\"" + x +
				"\" y=\"" + y +
				"\" width=\"" + width +
				"\" height=\"" + height +
				"\" fill=\"" +
				randomColor() +
				"\" transform=\"" +
				"rotate(" + 
				randomIntegerRange(DEGREESLOW,DEGREESHIGH) +
				"," + cx + "," + cy +
				")\"/>";
				// console.log("rect - "+shape);
			break;
		case 2:
			shape +=
				"<polygon points=\"" +
				polygonPoints(TRIANGLE,
						randomIntegerRange(WIDTHMIN,WIDTHMAX),
						randomIntegerRange(HEIGHTMIN,HEIGHTMAX),
						randomIntegerRange(RADIUSLOW,RADIUSHIGH),
						randomIntegerRange(RADIANSLOW,RADIANSHIGH)) +
				"\" fill=\"" +
				randomColor() +
				"\" />";
				// console.log("TRIANGLE - "+shape);
			break;
		case 3:
			shape +=
				"<polygon points=\"" +
				polygonPoints(PENTAGON,
						randomIntegerRange(WIDTHMIN,WIDTHMAX),
						randomIntegerRange(HEIGHTMIN,HEIGHTMAX),
						randomIntegerRange(RADIUSLOW,RADIUSHIGH),
						randomIntegerRange(RADIANSLOW,RADIANSHIGH)) +
				"\" fill=\"" +
				randomColor() +
				"\" />";
				// console.log("PENTAGON - "+shape);
			break;
		default:
			// stars
			shape +=
				"<polygon points=\"" +
				starPoints(
						randomIntegerRange(WIDTHMIN,WIDTHMAX),
						randomIntegerRange(HEIGHTMIN,HEIGHTMAX),
						randomIntegerRange(RADIUSLOW,RADIUSHIGH),
						randomIntegerRange(RADIUSLOW,RADIUSHIGH),
						randomIntegerRange(5,24), // number of points
						randomIntegerRange(RADIANSLOW,RADIANSHIGH)) +
				"\" fill=\"" +
				randomColor() +
				"\" />";
				// console.log("star - "+shape);
		}
	SCREEN.innerHTML +=shape;
 	playSound();
	}
//---------------------------------------------------------------------
function speak(text) {
	const synth = window.speechSynthesis;
	synth.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	synth.speak(utterance);
	}
//---------------------------------------------------------------------
// const LETTERS = [ ~~ Letters/letters.json
const LETTERSMAX = LETTERS.length;
const LETTERSMIN = 0;
//---------------------------------------------------------------------
function letters () {
	let x = randomIntegerRange(WIDTHMIN,WIDTHMAX);
	let y = randomIntegerRange(HEIGHTMIN,HEIGHTMAX);
	let myLetter = randomIntegerRange(LETTERSMIN,LETTERSMAX);
	let letter =
		"<path d=\"" +
		LETTERS[myLetter] +
		"\" fill=\"" +
		randomColor() +
 		"\" transform=\"" +
		"translate(" + 
		x + "," + y +
		") scale(" + 
 		randomIntegerRange(1,5)  +
 		")\"/>";
// 	console.log("letter - "+letter);
	SCREEN.innerHTML +=letter;
	speak(String.fromCharCode(myLetter+('a'.charCodeAt(0))));
	}
//---------------------------------------------------------------------
// const DIGITS = [ ~~ Digits/digits.json
const DIGITSMAX = DIGITS.length;
const DIGITSMIN = 0;
//---------------------------------------------------------------------
function digits () {
	let x = randomIntegerRange(WIDTHMIN,WIDTHMAX);
	let y = randomIntegerRange(HEIGHTMIN,HEIGHTMAX);
	let myDigit = randomIntegerRange(DIGITSMIN,DIGITSMAX);
	let digit =
		"<path d=\"" +
		DIGITS[myDigit] +
		"\" fill=\"" +
		randomColor() +
		"\" transform=\"" +
		"translate(" + 
		x + "," + y +
		") scale(" + 
 		randomIntegerRange(5,12)  +
		")\"/>";
// 	console.log("digit - "+digit);
	SCREEN.innerHTML +=digit;
	speak(String.fromCharCode(myDigit+('0'.charCodeAt(0))));
	}
//---------------------------------------------------------------------
// const FACES = { ~~ Faces/faces.json
const FACESMAX = FACES.faces.length;
const FACESMIN = 0;
//---------------------------------------------------------------------
function faces() {
	let x = randomIntegerRange(WIDTHMIN,WIDTHMAX);
	let y = randomIntegerRange(HEIGHTMIN,HEIGHTMAX);
	let myFace = randomIntegerRange(FACESMIN,FACESMAX);
	let face =
		"<image href=\"Faces/" +
		FACES.faces[myFace].file + 
		"\" x=\"" +
		x +
		"\" y=\"" +
		y +
		"\" width=\"" +
		randomIntegerRange(RADIUSLOW,RADIUSHIGH) +
		"\" height=\"" +
		randomIntegerRange(RADIUSLOW,RADIUSHIGH) +
		"\" />";
// 	console.log("face - "+face);
	SCREEN.innerHTML +=face;
	speak(FACES.faces[myFace].name);
	}
//---------------------------------------------------------------------
function boop () {
	switch(mode) {
		case 0:
			shapes();
			break;
		case 1:
			digits();
			break;
		case 2:
			letters();
			break;
		case 3:
			faces();
			break;
		default:
			console.log("How did this happen?");
		}
	}
//---------------------------------------------------------------------
DIALOG.show();
//---------------------------------------------------------------------