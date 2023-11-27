// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());//Mon Nov 27 2023
//console.log(myDate.toLocaleString());//27/11/2023, 3:05:49 pm
//console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //mon jan 23 2023
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
 //console.log(myCreatedDate.toLocaleString()); //14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

//  console.log(myTimeStamp); //1701078562482
//  console.log(myCreatedDate.getTime()); //1673634600000
//  console.log(Math.floor(Date.now()/1000));//1701078562

let newDate = new Date()
console.log(newDate); //2023-11-27T09:52:11.794Z
console.log(newDate.getMonth() + 1); //11
console.log(newDate.getDay()); //1

console.log(`${newDate.getDay()} and the time is${newDate.getTime()})`)
//1 and the time is1701078939397)

newDate.toLocaleString('default', {
    weekday: "long",
    })
    