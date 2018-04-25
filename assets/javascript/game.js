var MIN = 19; //start range for the computer random number
var MAX = 120; //end range for the computer random number
var userTotal = "";
var userNum = "";
var wins = 0;
var losses = 0;
var computerNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

$(document).ready(function(){
    var userTotal = "";
    var userNum = "";
    // set random value for each gem
    $(".jem").each(function(){
        var random = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", random);
    })
    $("#compRandom").html("<h3>" + computerNum + "</h3>");
});

function logic(){
    $(".jem").on("click", function() {
        userTotal += parseInt(this.val());
        console.log(userTotal);
        $("#userNumber").html("<h3>" + userTotal + "</h3>");
        if (userTotal === computerNum){
            wins += wins;
            $("#status").html("<h3>You Won!</h3>");
            $("#wins").html("<h3>" + wins + "</h3>");
            reset();
        }
        else if (userTotal > computerNum){
            losses += losses;
            $("#status").html("<h3>You Lost!</h3>");
            $("losses").html("<h3>" + losses + "</h3>");
            reset();
        }
        
    });
    console.log(userTotal);
}

// reset (){
    
// }
logic();
