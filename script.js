document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const playerScoreElem = document.getElementById('player-score');
    const computerScoreElem = document.getElementById('computer-score');
    const resultText = document.getElementById('result-text');
    const playerSelectionImg = document.getElementById('player-selection');
    const computerSelectionImg = document.getElementById('computer-selection');

    let playerScore = 0;
    let computerScore = 0;

    const choiceImages = {
        rock: 'rock.png',
        paper: 'paper.png',
        scissors: 'scissors.png'
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);

            updateScores(result);
            displayResult(playerChoice, computerChoice, result);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'win';
        } else {
            return 'lose';
        }
    }

    function updateScores(result) {
        if (result === 'win') {
            playerScore++;
            playerScoreElem.textContent = playerScore;
        } else if (result === 'lose') {
            computerScore++;
            computerScoreElem.textContent = computerScore;
        }
    }

    function displayResult(playerChoice, computerChoice, result) {
        playerSelectionImg.src = choiceImages[playerChoice];
        computerSelectionImg.src = choiceImages[computerChoice];

        let resultMessage = '';

        if (result === 'draw') {
            resultMessage = `Empate! Ambos escolheram ${playerChoice}.`;
        } else if (result === 'win') {
            resultMessage = `Você venceu! ${playerChoice} vence ${computerChoice}.`;
        } else {
            resultMessage = `Você perdeu! ${computerChoice} vence ${playerChoice}.`;
        }

        resultText.textContent = resultMessage;
    }
});
