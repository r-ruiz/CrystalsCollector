var MIN = 19; //start range for the computer random number
var MAX = 120; //end range for the computer random number
var userTotal = 0;
var userNum = 0;
var wins = 0;
var losses = 0;
var computerNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

$(document).ready(function(){
    var userTotal = 0;
    // set random value for each gem
    $(".jem").each(function(){
        var random = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", random);
    })
    $("#compRandom").html("<h3>" + computerNum + "</h3>");
});

function logic(){
    $("img").on("click", function() {
        //console.log(this).val();
        var userNum = $(this).attr("value");
        userTotal = userTotal + parseInt(userNum);
        //userTotal += parseInt(this.value);
        console.log(userTotal);
        console.log(userNum);
        $("#userNumber").html("<h3>" + userTotal + "</h3>");
        if (userTotal === computerNum){
            wins++;
            $("#status").html("<h3>You Won!</h3>");
            $("#wins").html("<h3>" + wins + "</h3>");
            reset();
        }
        else if (userTotal > computerNum){
            losses++;
            $("#status").html("<h3>You Lost!</h3>");
            $("losses").html("<h3>" + losses + "</h3>");
            reset();
        }
    });
}

function reset(){
    //flush the following ids
    $("#status, #userNumber").empty();
    //new random number
    $(".jem").each(function(){
        var random = Math.floor(Math.random() * 12) + 1;
        $(this).attr("value", random);
    })
    var computerNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    $("#compRandom").html("<h3>" + computerNum + "</h3>");
    $("#userNumber").html("<h3>---</h3>");
    var userTotal = 0;
    var userNum = 0;
    logic();
}

logic();


