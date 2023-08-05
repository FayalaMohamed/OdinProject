const TAB = ["rock", "paper", "scissors"];
let nbPlayer = 0;
let nbComputer = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * TAB.length)
}

function decide(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = TAB.indexOf(playerSelection.toLowerCase());
    console.log(TAB[computerSelection])
    if (playerSelection == computerSelection)
        return 0
    else if (TAB[computerSelection] === 'rock' && TAB[playerSelection] === 'paper')
        return 1 // win
    else if (TAB[computerSelection] === 'paper' && TAB[playerSelection] === 'scissors')
        return 1 // win
    else if (TAB[computerSelection] === 'scissors' && TAB[playerSelection] === 'rock')
        return 1 // win
    return -1
}

function playRound(playerSelection) {
    let res = decide(playerSelection);
    const p = document.getElementById("result");
    const player = document.getElementById("playerPoints");
    const comp = document.getElementById("computerPoints");
    if (res == 1) {
        p.textContent = `You won!`;
        nbPlayer += 1;
        player.textContent = nbPlayer;
    }
    else if (res == -1) {
        p.textContent = `You lost...`;
        nbComputer += 1;
        comp.textContent = nbComputer;
    } else
        p.textContent = `It's a tie!`


    if (nbComputer == 5 || nbPlayer == 5) {
        p.textContent = ``;
        if (nbComputer == 5) {
            window.alert('You lost');
        } else {
            window.alert('Congratulations you won!');
        }
        nbPlayer = 0;
        nbComputer = 0;
        comp.textContent = nbComputer;
        player.textContent = nbPlayer;
    }

}

function game(nbGames) {
    let won = 0;
    let lost = 0;
    for (let i = 0; i < nbGames; ++i) {
        var input = prompt(`Enter your choice: ${TAB}`);
        while (!input || !(TAB).includes((input.toLowerCase())))
            alert('Invalid entry, try again');
        let res = playRound(input);
        if (res != -1)
            won += res;
        else
            lost -= res;
    }
    if (lost > won)
        console.log("You won!")
    else if (lost < won)
        console.log("You lost...")
    else
        console.log("Tie")
}