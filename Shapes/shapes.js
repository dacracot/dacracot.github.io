//---------------------------------------------------------------------
const SHAPES = {
	};
// ------------------------------
const SOUNDS = [
	"Shapes/Sounds/boing.mp3",
	"Shapes/Sounds/blip.mp3",
	"Shapes/Sounds/toot.mp3",
	"Shapes/Sounds/blurp.mp3",
	"Shapes/Sounds/floop.mp3",
	"Shapes/Sounds/pluck.mp3",
	"Shapes/Sounds/honk.mp3",
	"Shapes/Sounds/peop.mp3",
	"Shapes/Sounds/bell.mp3",
	"Shapes/Sounds/crack.mp3"
	];
//---------------------------------------------------------------------
// const SOUNDS = [ ~~ Shapes/shapes.js
const SOUNDSMAX = SOUNDS.length;
const SOUNDSMIN = 0;
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
 	playSound(SOUNDS[randomIntegerRange(SOUNDSMIN,SOUNDSMAX)]);
	}
//---------------------------------------------------------------------
