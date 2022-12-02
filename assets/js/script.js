document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game loop, called when the script is first loaded 
 * and then after the users answer has been processed.
 */
function runGame(gameType) {  
    // creates two random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "additon") {
    displayAdditionQuestion(num1, num2)   
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${'gameType}. Aborting`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}