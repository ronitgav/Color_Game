
var numberOfSquares = 6;
var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;

var resetButton = document.querySelector("#reset");

var modeBTN = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    for(var i = 0; i < modeBTN.length; i++) {
        modeBTN[i].addEventListener("click", function(){
            modeBTN[0].classList.remove("selected");
            modeBTN[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numberOfSquares = 3;
            }
            else {
                numberOfSquares = 6;
            }
            reset();

            //figure out how many squares to show
            //pick new colors
            //pick a new picked color
            //update page to reflect changes

        });
    }
    
        //logic to see if player wins the game or not
    for(var i = 0; i < squares.length; i++) {


        //add listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor=this.style.background;

            //compare to picked color
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
    
    reset();

    
}



function reset() {
    //need to generate new colors
    colors = generateRandomColors(numberOfSquares);
    
    //pick new random color from array
    pickedColor = pickColor();
    
    //change colored display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display ="block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}

// what happens on reset
resetButton.addEventListener("click", function(){
    reset();
    
})



//logic to see if player wins the game or not
for(var i = 0; i < squares.length; i++) {
    
    
    //add listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor=this.style.background;
        
        //compare to picked color
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}


// on winning, every square changes color
function changeColor(color) {
    // loop through all squares, changing color to pickedColor
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;   
    }
}

//pick random colors which will be applied to each square
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


//generate random colors for a given number 3 or 6, depending on difficulty
function generateRandomColors(num) {
    // make array
    var arr = [];
    // add num random colors to that array
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    
    // return array
    return arr;
}

//choose a random color giving us rgb in that order
function randomColor() {
    //pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256);
    
    //pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    
    //pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    
    return "rgb(" + red + ", " + green + ", " + blue + ")";
    
}




