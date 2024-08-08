// area of a triangle

var side1 = 4;
var side2 = 9;
var side3 = 6;
var s = (side1 + side2 + side3) / 2;
var areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`Side1 ${side1}`);
console.log(`Side2 ${side2}`);
console.log(`Side3 ${side3}`);
console.log(`The area of the triangle is ${areaValue}`);