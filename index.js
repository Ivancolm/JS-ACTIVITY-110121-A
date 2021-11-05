//console.log("lol")
// DOM SECTION
let something=document.querySelector("h1")
console.log("This is something",something)
//something.textContent= "You are doing great"
something.innerText= "You are doing great"
/////////////////////////////////////////////////



//lOGICAL SECTION

let variable1 =1
console.log("this is variable1",variable1)

function changeAVariable(place){
    console.log("INSIDE: changeAVariable")
place=5
console.log("place",place)
return place
}
//changeAVariable()
//changeAVariable(variable1)

function noparameters(){
    console.log("INSIDE: changeAVariable")}
noparameters()
