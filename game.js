
var buttonColours= ["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});
   


$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
  });

  function nextSequence(){
      level++;
      $("#level-title").text("Level " + level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomNumber).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

  function playSound(name){
    var audio =new Audio("sounds/"+ name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor){
      $("#"+currentColor).addClass("pressed");

        setTimeout(function (){
        $("#" + currentColor).removeClass("pressed");
    }, 100);   
}