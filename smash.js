//---------------------------------------------------------------------
const SVG = document.querySelector("svg");
let MODE = -1; // 0=shapes, 1=digits, 2=letters
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
function playSound(sound) {
	const audio = new Audio(sound);
	audio.play();
	}
//---------------------------------------------------------------------
const SCREEN = document.getElementById("screen");
const DIALOG = document.getElementById("menu");
//---------------------------------------------------------------------
function speak(text) {
	const synth = window.speechSynthesis;
	synth.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	synth.speak(utterance);
	}
//---------------------------------------------------------------------
function boop () {
	switch(MODE) {
		case 0:
			shapes();
			break;
		case 1:
			digits();
			break;
		case 2:
			letters();
			break;
		default:
			break;
		}
	return false;
	}
//---------------------------------------------------------------------
function selected(mode) {
	MODE = mode;
	DIALOG.close();
	boop();
	document.addEventListener("mousedown", function(event){
//		console.log(event);
		boop();
		});
	}
//---------------------------------------------------------------------
//---------------------------------------------------------------------
DIALOG.show();
//---------------------------------------------------------------------
