function randomDice() {

    var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
    var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

    $(".img1").attr("src", "images/dice" + randomNumber1 + ".png");
    $(".img2").attr("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        $(".resultado").text("Player 1 wins");
    } else {
        if (randomNumber1 < randomNumber2) {
            $(".resultado").text("Player 2 wins");
        }
        else {
            $(".resultado").text("Draw");
        }
    }
}




