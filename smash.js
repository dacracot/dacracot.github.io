// code
function starPolygon(cx, cy, outerRadius, innerRadius, points = 5,
                     rotation = -Math.PI / 2) {

    const coordinates = [];

    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = rotation + i * Math.PI / points;

        coordinates.push(
            `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`
        );
    }

    return coordinates.join(" ");
}

// const points = starPolygon(100, 100, 90, 40);
// document.querySelector("polygon").setAttribute("points", points);

console.log(starPolygon(100, 100, 90, 40, 2));  // diamond
console.log(starPolygon(100, 100, 90, 40, 3));  // 3-point star
console.log(starPolygon(100, 100, 90, 40, 4));  // 4-point star
console.log(starPolygon(100, 100, 90, 40, 5));  // 5-point star
console.log(starPolygon(100, 100, 90, 40, 24));

