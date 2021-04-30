
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
// console.log(randomNumber1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";  // dice1.png -> dice6.png
// console.log(randomDiceImage);


var randomSourceImage1 = "images/" + randomDiceImage1;    //images/dice1.jpg -> images/dice6.jpg

var image1 = document.querySelectorAll("img")[0];   // Targeting the img attribute

image1.setAttribute("src", randomSourceImage1);  //Manipulating the "src" attribute

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomSourceImage2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSourceImage2);




if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else
{
    document.querySelector("h1").innerHTML = "The score is tied!";
}

