// Your code goes here

const ANGLE_VALUE = 180;

let a = parseFloat(prompt('Enter a side of a triangle:', '10')),
b = parseFloat(prompt('Enter b side of a triangle:', '20')),
angle = parseFloat(prompt('Enter angle value', '30')) * Math.PI / ANGLE_VALUE;


let squareTriangle = 1 / 2 * a * b * Math.sin(angle);
squareTriangle = +squareTriangle.toFixed(2);

if (a > 0 && b > 0 && squareTriangle > 0) {
    let c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle));
    let perimetr = a + b + c;

    console.log(
        'c length: ',+c.toFixed(2), '\n',
        'Triangle square: ', squareTriangle, '\n',
        'Triangle perimetreter: ', +perimetr.toFixed(2) 
    );

} else {
    console.log(`’Invalid data’`);
}