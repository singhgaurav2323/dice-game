var randomvariable0=Math.round(Math.random()* (6-1)+1);
var randomvariable2="images/dice"+randomvariable0+".png"; // for image 1 player 1
var randomvariable1=Math.round(Math.random()* (6-1)+1);
var randomvariable4="images/dice"+randomvariable1+".png"; // for image 2 player2

document.querySelectorAll("img")[0].setAttribute("src",randomvariable2);  //changing randomly first image
document.querySelectorAll("img")[1].setAttribute("src",randomvariable4);  //changing randomly first image
// condition checking for the result
if(randomvariable2>randomvariable4){
    document.getElementById("title").innerHTML="player 1 win";
}
else if(randomvariable2<randomvariable4){
    document.getElementById("title").innerHTML="player 2 win";
}
else {document.getElementById("title").innerHTML="Draw!";}