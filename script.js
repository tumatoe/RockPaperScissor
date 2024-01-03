


function getComputerChoice() {
    const choices =['Rock', 'Paper', 'Scissors'];
    const num1 = Math.floor(Math.random() * 3);
    return choices[num1]
}


function playRound() { 
    const ComputerChoice = getComputerChoice();
    console.log(ComputerChoice)
    const PlayerChoice = prompt('Select your Choice:')
    console.log(PlayerChoice)
    let result;

    if (ComputerChoice === PlayerChoice)
    {
        result = "Tie!";
    }
    else if ((ComputerChoice === 'Rock' && PlayerChoice === 'Scissors') ||
             (ComputerChoice === 'Paper' && PlayerChoice === 'Rock') || 
             (ComputerChoice === 'Scissors' && PlayerChoice === 'Paper') ){ 
        result = 'You Lose!';
    }
    else if ((PlayerChoice === 'Rock' && ComputerChoice === 'Scissors') ||
             (PlayerChoice === 'Paper' && ComputerChoice === 'Rock') || 
             (PlayerChoice === 'Scissors' && ComputerChoice === 'Paper')){ 
        result = 'You Win!';
    }
    else {
        result = 'Select again'
    }
return result;

}



function game() { 
    let playerScore = 0;
    let computerScore = 0;
    let i = 0

    while (playerScore < 5 && computerScore < 5) {
        const result = playRound();
        

        if (result === 'You Win!') {
            playerScore++
        }
        else if (result === 'You Lose!') {
            computerScore++
        }

        i++
        
    console.log(`Round ${i + 1}: ${result} ${[computerScore, playerScore]}`);   //print score system after each round
    }
    
    if (playerScore > computerScore) {
        console.log("Overall Winner: You!")
    }
    else if (playerScore < computerScore) {
        console.log("Overall Winner: Computer!")
    }
    else {
        console.log("Game Ended in a Draw!")
    }
    }

game()


