"use strick " //treat all JS code newer version

// alert( 3 + 3) now we are use node not the browser;
 
 let name = "nil"
 let age = 21
 let isLoggedIn = false 

// number => 2 to power 53
//bigint
//string  => ""
//boolean  => true/false
//null => standalone value
//undefind => 
//symbole => uniquness sathi use karto

//objects

console.log(typeof age);//number

console.log(typeof null); //object

console.log(typeof undefined); //undefind


// dataType devide on the basis of how we store data in memory and how it access

//******Primitive****** its a callback value when we copy it we get we not get exact location of memory when we change any thing change in copy .
// 7 types : Null, Number, String, Boolean, Undefind, Symbol, BigInt

//********Reference (Non primitive) ********

//Array, Object, Functions 

const heros = ["shaktiman", "vijay", "Thalapati"]

let myObj = {
    name:"nil",
    age: 22,
};

 const myFunction = function(){
    console.log("Hello World");
};