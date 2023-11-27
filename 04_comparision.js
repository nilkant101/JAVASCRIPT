
// console.log( 2 > 1 );
// console.log( 2 >= 1 );
// console.log( 2 < 1 );
// console.log( 2 == 1 );
// console.log( 2 != 1 );

// // compare wtih different datatypes are not good practice

// console.log("2" > 1);

// console.log(null > 0); //false 
// console.log(null == 0);//false
// console.log(null >= 0);//true

// // the reafon is that an equality check == and
// // comparison converts null to a Number,treating it as 0
// // that's why (null > 0);//false
// //console.log(null >= 0);//true

// console.log("2"=== 2);//false


// *****************

//stack(primitive) Heap(nonPrimitive)

let myYoutube = "coderNil"

let anotherName = myYoutube
//console.log(anotherName);//coderNil we get copy of the primitive data type.
anotherName = "devloper_nil"

console.log(myYoutube);//coderNil
console.log(anotherName); //devloper_nil


