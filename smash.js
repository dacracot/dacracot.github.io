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

const COLORS = ["red","orange","yellow","green","blue","indego","violet"];

function randomColor () {
	return(COLORS[randomIntegerRange(0,6)]);
	}

function boop () {
	shape =
		"<polygon points=\"" +
		starPoints(randomIntegerRange(0,100), randomIntegerRange(0,100), randomIntegerRange(60,120), randomIntegerRange(10,60), randomIntegerRange(2,24)) +
		"\" fill=\"" +
		randomColor() +
		"\" transform=\"rotate(" +
		randomIntegerRange(0,100)+
		") translate(" +
		randomIntegerRange(0,100)+
		"," +
		randomIntegerRange(0,100)+
		")\" />";
	return(shape);
	}

document.getElementById("screen").innerHTML = boop();