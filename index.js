// Write your solution here!
const cats =["Milo","Otis","Garfield"];

//cats.push("Ralph");
//cats.unshift("Bob");
//cats.pop();
//cats.shift();
destructivelyAppendCat("Ralph");
destructivelyPrependCat("Bob");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();

console.log(cats);

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function  destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function  appendCat(name){
   const copyCats = [...cats];
    copyCats.push(name);
    return copyCats;
}
function  prependCat(name){
    const copyCats = [...cats];
     copyCats.unshift(name);
     return copyCats;
 }

 function removeLastCat(){
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;  
}
function removeFirstCat(){
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats;  
}