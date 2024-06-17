
    const stoneButton = document.getElementById('so');
    const paperButton = document.getElementById('pa');
    const scissorButton = document.getElementById('sc');
    const resultContainer = document.getElementById('result');

    stoneButton.addEventListener('click', function() {
        playGame('stone');
    });

    paperButton.addEventListener('click', function() {
        playGame('paper');
    });

    scissorButton.addEventListener('click', function() {
        playGame('scissor');
    });

    function playGame(userChoice) {
        const choices = ['stone', 'paper', 'scissor'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        setTimeout(function(){
        let result;
        let imageSrc;
        if (userChoice === computerChoice) {
            result = "It's a tie!";
            imageSrc = "https://thumbs.dreamstime.com/b/scissors-paper-stone-hands-game-24131079.jpg";
        } else if ((userChoice === 'stone' && computerChoice === 'scissor') ||
                   (userChoice === 'paper' && computerChoice === 'stone') ||
                   (userChoice === 'scissor' && computerChoice === 'paper')) {
            result = "You win!";
            if (userChoice === 'stone' && computerChoice === 'scissor') {
                imageSrc = "https://thumbs.dreamstime.com/b/close-up-young-businessmen-hands-playing-rock-paper-scissors-bright-city-buildings-background-leisure-game-concept-close-307032654.jpg";
            } else if (userChoice === 'paper' && computerChoice === 'stone') {
                imageSrc = "https://thumbs.dreamstime.com/b/rock-paper-scissors-gambling-hand-game-all-ages-sex-asian-male-hands-post-white-background-174940203.jpg";
            } else if (userChoice === 'scissor' && computerChoice === 'paper') {
                imageSrc = "https://thumbs.dreamstime.com/b/close-up-young-businessmen-hands-playing-rock-paper-scissors-bright-light-city-buildings-background-leisure-game-close-307881265.jpg";
            }
        } else {
            result = "Computer wins!";
            if(userChoice ==='stone' && computerChoice === 'paper'){
                imageSrc="https://thumbs.dreamstime.com/b/close-up-male-hands-playing-rock-paper-scissors-bright-light-city-buildings-background-leisure-game-concept-close-up-307032656.jpg"
            }
            else if(userChoice === 'paper' && computerChoice ==='scissor'){
                imageSrc="https://thumbs.dreamstime.com/b/rock-paper-scissors-gambling-hand-game-all-ages-sex-asian-male-hands-post-white-background-174940203.jpg"
            }
            else if(userChoice === 'scissor' && computerChoice === 'stone'){
                imageSrc="https://thumbs.dreamstime.com/b/rock-paper-scissors-gambling-hand-game-all-ages-sex-asian-male-hands-post-white-background-174940229.jpg"
            }
            
        }

            resultContainer.innerHTML = `
                <p>You chose: ${userChoice}</p>
                <p>Computer chose: ${computerChoice}</p>
                <p>Result: ${result}</p>
                <img height="400" src="${imageSrc}">
            `;
        }, 6000);
    }

