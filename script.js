var randomNumber1 = Math.floor(Math.random()*6) + 1; // 1-6 random number
var randomimageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];     // selecting img tag array element 1
image1.setAttribute("src", randomimageSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1; // 1-6 random number
var randomimageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];     
image2.setAttribute("src", randomimageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 win <3 "
}else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 win <3 "
}
else{
    document.querySelector("h1").innerHTML = "Lol , Draw XD"
}