const name = "Nil"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//`` that's the templete string or backticks

const gameName = new String("GTAv")

console.log(gameName);//[String: 'GTAv']
console.log(gameName[0]);//G


console.log(gameName.length);//4
console.log(gameName.toUpperCase());//GTAV
console.log(gameName.charAt(2));//A
console.log(gameName.indexOf('t')); //-1


const newString = gameName.substring(0,3)
console.log(newString);//GTA

const anotherString = gameName.slice(-1,5)
console.log(anotherString);//v

const name1 = "       NILKNAT     "
console.log(name1.trim);//[Function: trim]
console.log(name1.trim()) //NILKNAT

//trim :- remove starting and ending spaces

//stringName.replace('20'.'_')
//stringName.include('nill')//flase