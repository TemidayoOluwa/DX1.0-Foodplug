
// basic ES5 function declaration
var myname = "Temidayo Esther"
function popsomething(){
    alert(myname + " i have been coding since 12")

}
console.log(document)

var ourbody = document.querySelector(".ourpagebody")
// ourbody.style.background = "black"

var hamburger = document.querySelector(".hamburger-container")

function addandremove(){
    hamburger.classList.toggle("showburger")
}