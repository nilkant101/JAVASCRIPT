// const score = 400

const num = new Number(100)
// console.log(num); //[Number: 100]

// console.log(num.toString().length);
// console.log(num.toFixed(1));  //100.0

const otherNum = 123.3555
//console.log(otherNum.toPrecision(5)); //123.35

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//******************************math**********************/

// console.log(Math);
//console.log(Math.abs(-4)); //any value conver positive
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));//take lowest value 4 not 5
// console.log(Math.floor(4.9)); // always take bigger 5
// console.log(Math.min(4, 3, 6, 8)); 
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min))+min)