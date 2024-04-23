let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

//if match was draw
const gameDraw = () => {
    console.log("The game was draw");
    msg.innerText = "The game was draw"
}
const showWinner = (userWin) => {
    if (userWin) {
        console.log("you win");
        msg.innerText = "You Win The Game";
    }
    else {
        console.log("you  lose");
        msg.innerText = "You Loose The Game";
    }
}
const genCompChoice = () => {//generate rock,papaer,cissor by Computer
    const options = ["rock", "paper", "cissor"];
    const arb = Math.floor(Math.random() * (3-0)+0;
    return options[arb];

}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("user choice =", compChoice);
    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {//paper cissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {//rock,cissor
            userWin = compChoice === "cissor" ? false : true;
        }
 /*cissor */  else {// rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})  
