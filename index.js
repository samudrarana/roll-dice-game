let player1 = "Player 1";
let player2 = "Player 2";
function editNames(){
    player1 = prompt("Enter Player1 Name:");
    player2 = prompt("Enter player2 Name:");

    if(player1.length<1 || player2.length<1){
        alert("Please enter valid names for both the players!");
        return;
    }
    document.querySelector("p.player1").innerHTML=player1;
    document.querySelector("p.player2").innerHTML=player2;
}


function rollDice(){
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src","image/dice.gif");
    image2.setAttribute("src","image/dice.gif");
    setTimeout(() =>{
        var randomNumber1 = Math.floor(Math.random()*6)+1;

        var randomDiceImage1="image/dice"+ randomNumber1 +".png";

    
        image1.setAttribute("src", randomDiceImage1);

        var randomNumber2 = Math.floor(Math.random()*6)+1;

        var randomDiceImage2="image/dice"+ randomNumber2 +".png";

        
        image2.setAttribute("src", randomDiceImage2);

        if(randomNumber1 > randomNumber2){
            document.querySelector("h3").innerHTML = player1+ " Wins!🎊";
        }
        else if (randomNumber1 < randomNumber2){
            document.querySelector("h3").innerHTML=player2+" Wins!🎊";
        }
        else{
            document.querySelector("h3").innerHTML="Draw";
        }
    },3000);
}
