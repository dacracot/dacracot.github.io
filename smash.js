const ORIGINX = 0;
const ORIGINY = 0;
const VIEWWIDTH = 600;
const VIEWHEIGHT = 600;

function centerPolygon(pointsString) {
	// Convert "x,y x,y x,y" into [[x,y], [x,y], ...]
	const points = pointsString.trim().split(/\s+/).map(point => {
		const [x, y] = point.split(',').map(Number);
		return [x, y];
		});
	// Find the polygon's bounding box
	const xs = points.map(p => p[0]);
	const ys = points.map(p => p[1]);
	const minX = Math.min(...xs);
	const maxX = Math.max(...xs);
	const minY = Math.min(...ys);
	const maxY = Math.max(...ys);
	// Center of polygon's bounding box
	const polygonCenterX = (minX + maxX) / 2;
	const polygonCenterY = (minY + maxY) / 2;
	// Center of the viewBox
	const viewBoxCenterX = ORIGINX + VIEWWIDTH / 2;
	const viewBoxCenterY = ORIGINY + VIEWHEIGHT / 2;
	// Required translation
	const dx = viewBoxCenterX - polygonCenterX;
	const dy = viewBoxCenterY - polygonCenterY;
	return `translate(${dx}, ${dy})`;
	}

const CENTERHIGH = 560;
const CENTERLOW = 40;
const DEGREESHIGH = 360;
const DEGREESLOW = 0;

function starPoints(cx, cy, outerRadius, innerRadius, points = 5, rotation = -Math.PI / 2) {
	const coordinates = [];
	for (let i = 0; i < points * 2; i++) {
		const radius = i % 2 === 0 ? outerRadius : innerRadius;
		const angle = rotation + i * Math.PI / points;
        coordinates.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
		}
	return(coordinates.join(" "));
	}
	
function polygonPoints(sides, cx, cy, radius, rotation = -Math.PI / 2) {
	const coordinates = [];
	for (let i = 0; i < sides; i++) {
		const angle = rotation + i * (2 * Math.PI / 3);
		coordinates.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
		}
	return coordinates.join(" ");
	}

function randomIntegerRange (min = 0, max = 1200) {
	rand = Math.round((Math.random()*(max-min))+min);
	return(rand);
	}

const COLORS = ["red","orange","yellow","green","blue","indigo","violet","white","black"];
const COLORSMAX = 8;
const COLORSMIN = 0;

function randomColor () {
	return(COLORS[randomIntegerRange(COLORSMIN,COLORSMAX)]);
	}

const SOUNDS = ["Sounds/boing.mp3","Sounds/blip.mp3","Sounds/toot.mp3","Sounds/blurp.mp3","Sounds/floop.mp3","Sounds/pluck.mp3","Sounds/honk.mp3","Sounds/peop.mp3","Sounds/bell.mp3","Sounds/crack.mp3"];
const SOUNDSMAX = 8;
const SOUNDSMIN = 0;

function playSound() {
	const audio = new Audio(SOUNDS[randomIntegerRange(SOUNDSMIN,SOUNDSMAX)]);
	audio.play();
	}

const SCREEN = document.getElementById("screen");
const SHAPESMAX = 4;
const SHAPESMIN = 0;
const RADIUSHIGH = 90;
const RADIUSLOW = 16;
const TRIANGLE = 3;
const PENTAGON = 5;

function boop () {
	shape = "";
	switch(randomIntegerRange(SHAPESMIN,SHAPESMAX)) {
		case 0:
			shape +=
				"<circle cx=\"" +
				randomIntegerRange(CENTERLOW,CENTERHIGH) +
				"\" cy=\"" +
				randomIntegerRange(CENTERLOW,CENTERHIGH) +
				"\" r=\"" +
				randomIntegerRange(RADIUSLOW,RADIUSHIGH) +
				"\" fill=\"" +
				randomColor() +
				"\" />";
			break;
		case 1:
			shape +=
				"<rect x=\"" +
				randomIntegerRange(CENTERLOW,CENTERHIGH)+
				"\" y=\"" +
				randomIntegerRange(CENTERLOW,CENTERHIGH)+
				"\" width=\"" +
				randomIntegerRange(RADIUSLOW,RADIUSHIGH)+
				"\" height=\"" +
				randomIntegerRange(RADIUSLOW,RADIUSHIGH)+
				"\" fill=\"" +
				randomColor() +
				"\" transform=\"rotate(" +
				randomIntegerRange(DEGREESLOW,DEGREESHIGH)+
				")\" />";
			break;
		case 2:
			points = polygonPoints(TRIANGLE,randomIntegerRange(CENTERLOW,CENTERHIGH), randomIntegerRange(CENTERLOW,CENTERHIGH), randomIntegerRange(60,120), randomIntegerRange(10,60), randomIntegerRange(2,24));
			trans = centerPolygon(points);
			shape +=
				"<polygon points=\"" +
				points +
				"\" fill=\"" +
				randomColor() +
				"\" transform=\"rotate(" +
				randomIntegerRange(DEGREESLOW,DEGREESHIGH)+
				") translate(" +
				trans+
				")\" />";
			break;
		case 3:
			shape +=
				"<polygon points=\"" +
				polygonPoints(PENTAGON,randomIntegerRange(CENTERLOW,CENTERHIGH), randomIntegerRange(CENTERLOW,CENTERHIGH), randomIntegerRange(60,120), randomIntegerRange(10,60), randomIntegerRange(2,24)) +
				"\" fill=\"" +
				randomColor() +
				"\" transform=\"rotate(" +
				randomIntegerRange(DEGREESLOW,DEGREESHIGH)+
				")\" />";
			break;
		default:
			shape +=
				"<polygon points=\"" +
				starPoints(randomIntegerRange(CENTERLOW,CENTERHIGH), randomIntegerRange(CENTERLOW,CENTERHIGH), randomIntegerRange(60,120), randomIntegerRange(10,60), randomIntegerRange(2,24)) +
				"\" fill=\"" +
				randomColor() +
				"\" transform=\"rotate(" +
				randomIntegerRange(DEGREESLOW,DEGREESHIGH)+
				")\" />";
		}
	SCREEN.innerHTML +=shape;
	playSound();
	}

// function clicker() {
//     for (let i = 0; i < 1000; i++) {
//     	document.getElementById("clicker").click();
//     }
// }
// 
// clicker();

// function printMousePos(event) {
// 	console.log("clientX: " + event.clientX +" - clientY: " + event.clientY);
// 	}
// 
// document.addEventListener("click", printMousePos);