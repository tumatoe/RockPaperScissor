let playerScore = 0;
let computerScore = 0;
let buttonCreated = false;
let winner;
let restartButton;


function playRound(playerChoice) { 
    const ComputerChoice = getComputerChoice();
    console.log(`Computer picked: ${ComputerChoice}`)
    const PlayerChoice = playerChoice;
    console.log(`You picked: ${PlayerChoice}`)
    let result;

    if (ComputerChoice === PlayerChoice)
    {
        result = "Tie!";
    }
    else if ((ComputerChoice === 'Rock' && PlayerChoice === 'Scissors') ||
             (ComputerChoice === 'Paper' && PlayerChoice === 'Rock') || 
             (ComputerChoice === 'Scissors' && PlayerChoice === 'Paper') ){ 
        result = 'You lose this round!';
        computerScore++;
    }
    else if ((PlayerChoice === 'Rock' && ComputerChoice === 'Scissors') ||
             (PlayerChoice === 'Paper' && ComputerChoice === 'Rock') || 
             (PlayerChoice === 'Scissors' && ComputerChoice === 'Paper')){ 
        result = 'You win this round!';
        playerScore++;
    }
    else {
        result = 'Select again'
    }

    displayRoundResults(PlayerChoice, ComputerChoice, result);
    checkForWinner()
return result
}





function updateScoreBoard() {
    let updatedScore = document.querySelector('#scoreBoard');
    if (playerScore <= 5 && computerScore <= 5) {
        updatedScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
    }
}

function displayRoundResults(PlayerChoice, ComputerChoice, result) {
    const playerResult = document.querySelector('#playerResult');
    const computerResult = document.querySelector('#computerResult');
    const roundResult = document.querySelector('#round-result')

    playerResult.textContent = `You picked ${PlayerChoice}`
    computerResult.textContent = `Computer picked ${ComputerChoice}`
    roundResult.textContent = result


}

function checkForWinner() {
    const winner = document.querySelector('#winner')
    
    if (playerScore === 5) {
        winner.textContent = 'Game Winner: You!'
    }
    else if (computerScore === 5) {
        winner.textContent = 'Game Winner: Computer!'
    }   
    if ((playerScore >= 5 || computerScore >= 5) && !buttonCreated) {
        createRestartButton();
        buttonCreated = true; // Set the flag to true after creating the button
    }
}

function createRestartButton() {
    let infoContainer = document.querySelector('.info-container');
    let restartButton = document.createElement('button');
    restartButton.className = 'restartButton';
    restartButton.textContent = 'Restart Game';
    restartButton.addEventListener('click', restartGame);
    infoContainer.appendChild(restartButton);
}



function restartGame() {
    // Logic to restart the game
    playerScore = 0;
    computerScore = 0;

    updatedScore = document.querySelector('#scoreBoard');
    winner = document.querySelector('#winner')
    infoContainer = document.querySelector('.info-container');
    restartButton = document.querySelector('.restartButton');


    updatedScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
    winner.textContent = ''
    buttonCreated = false; // Reset the flag when the game is restarted
    // Additional restart logic...
    infoContainer.removeChild(restartButton)
    

}

function getComputerChoice() {
    const choices =['Rock', 'Paper', 'Scissors'];
    const num1 = Math.floor(Math.random() * 3);
    return choices[num1]
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('choice')) {
        const playerChoice = event.target.getAttribute('data-choice');
        const result = playRound(playerChoice);
        updateScoreBoard(result);
        
    }
})
