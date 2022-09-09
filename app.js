let playerOne = document.getElementsByClassName("player-one");
const playerTwo = document.getElementsByClassName("player-two");
let a = 0
let b = 0
const scoreTwo = document.getElementById("score-two");
const rest = document.getElementById("rest-button");
const limit = document.getElementById("select-finish");

function clickeOne() {
    if(a < limit.value && b < limit.value) {
    a++

    }

    document.getElementById("score-one").innerHTML = a;
    if(a == limit.value){
        document.getElementById("score-one").setAttribute("style", "color:green")
        document.getElementById("score-two").setAttribute("style", "color:red")
    }
}if(a == limit.value){
        document.getElementById("score-one").setAttribute("style", "color:green")
        document.getElementById("score-two").setAttribute("style", "color:red")
    }
function clickeTwo() {
    if(b < limit.value  && a < limit.value) {
    b++

    }
    document.getElementById("score-two").innerHTML = b;
    if(b == limit.value){
        document.getElementById("score-two").setAttribute("style", "color:green")
    };
    if(b == limit.value){
        document.getElementById("score-one").setAttribute("style", "color:red")
        document.getElementById("score-two").setAttribute("style", "color:green")
    }

}
function clearClick() {
    a = 0;
    b = 0;
    document.getElementById("score-one").setAttribute("style", "color:green")
    document.getElementById("score-two").setAttribute("style", "color:green")
    document.getElementById("score-one").innerHTML = a;
    document.getElementById("score-two").innerHTML = b;
}
