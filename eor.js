let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const comscorePara = document.querySelector("#com-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "It is a draw!";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if (userWin) {
        userscore++;
        userscorePara.innerText = userscore;

        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        comscore++;
        comscorePara.innerText = comscore;

        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    const compChoice = genComputerChoice();
    console.log("Computer choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked: ", userChoice);
        playGame(userChoice);
    });
});
