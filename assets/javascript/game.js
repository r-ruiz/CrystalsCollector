var MIN = 19; //start range for the computer random number
var MAX = 120; //end range for the computer random number
var userTotal = 0;
var userNum = 0;
var wins = 0;
var losses = 0;
var computerNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

//Loading pre-game
$(document).ready(function(){
    // set random value for each gem
    $(".jem").each(function(){
        var random = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", random);
    })
    $("#compRandom").html("<h3>" + computerNum + "</h3>");
    game();
});

//Game click functions
function game(){ 
    $("img").on("click", function() {
        userNum = $(this).attr("value");
        userTotal = userTotal + parseInt(userNum);
        //checking values
        //console.log("Value of Gem: " + userNum);
        //console.log("total: " + userTotal);
        //console.log("Target is: " + computerNum);
        $("#userNumber").html("<h3>" + userTotal + "</h3>");
        logic();
    });
}

//Game logic function
function logic(){
    if (userTotal > computerNum){
        losses++;
        document.getElementById("lost").play();
        $("#status").html("<h4>You lost the last game</h4>");
        $("#losses").html("<h3>" + losses + "</h3>");
        reset();
    }

    else if (userTotal === computerNum){
        wins++;
        document.getElementById("win").play();
        $("#status").html("<h4>You won the last game</h4>");
        $("#wins").html("<h3>" + wins + "</h3>");
        reset();
    }
}

//Game reset function
function reset(){
    userTotal = 0;
    userNum = 0;
    //flush the following ids
    $("#userNumber").empty();
    //new random number
    $(".jem").each(function(){
        var random = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", random);
    })
    computerNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    $("#compRandom").html("<h3>" + computerNum + "</h3>");
    $("#userNumber").html("<h3>---</h3>");
    return;
}



