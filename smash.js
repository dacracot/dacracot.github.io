const CENTERHIGH = 400;
const CENTERLOW = 200;
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

function randomIntegerRange (min = 0, max = 1200) {
	return(Math.round((Math.random()*(max-min))+min));
	}

const COLORS = ["red","orange","yellow","green","blue","indigo","violet"];
const COLORSMAX = 6;
const COLORSMIN = 0;

function randomColor () {
	return(COLORS[randomIntegerRange(COLORSMIN,COLORSMAX)]);
	}

const SCREEN = document.getElementById("screen");
const SHAPESMAX = 2;
const SHAPESMIN = 0;
const RADIUSHIGH = 180;
const RADIUSLOW = 16;

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
	}