var MIN = 19; //start range for the computer random number
var MAX = 120; //end range for the computer random number
var userTotal = 0;
var userNum = 0;
var wins = 0;
var losses = 0;
var computerNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

$(document).ready(function(){
    // set random value for each gem
    $(".jem").each(function(){
        var random = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", random);
    })
    $("#compRandom").html("<h3>" + computerNum + "</h3>");
    game();
});

function game(){ 
    $("img").on("click", function() {
        //console.log(this).val();
        userNum = $(this).attr("value");
        userTotal = userTotal + parseInt(userNum);
        //userTotal += parseInt(this.value);
        console.log("Value of Gem: " + userNum);
        console.log("total: " + userTotal);
        console.log("Target is: " + computerNum);
        $("#userNumber").html("<h3>" + userTotal + "</h3>");
        logic();
    });
}

function logic(){
    if (userTotal > computerNum){
        losses++;
        $("#status").html("<h4>You lost that last game</h4>");
        $("#losses").html("<h3>" + losses + "</h3>");
        reset();
    }

    else if (userTotal === computerNum){
        wins++;
        $("#status").html("<h4>You won that last game</h4>");
        $("#wins").html("<h3>" + wins + "</h3>");
        reset();
    }
}

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



