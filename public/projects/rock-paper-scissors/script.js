

let userScore = 0;
let compScore = 0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random() * 3);
    return options[i];
}

const playGame = (userChoice, compChoice) => {
    console.log("user choice=", userChoice);
    console.log("computer choice", compChoice);

    if (userChoice === compChoice) {
        msg.innerText = "Your Game is Draw";
        msg.style.backgroundColor = "blue";
    } else {
        if (userChoice === "rock") {
           if( compChoice === "paper"){
                msg.innerText = `You Lose! comp ${compChoice} folds your ${userChoice}`;
                 msg.style.backgroundColor = "red";
                 compScore++;
                 compScorePara.innerText=compScore;
           }
           else{
                 msg.innerText = `You Win! your ${userChoice} breaks comp ${compChoice}`;
                 msg.style.backgroundColor = "green";
                   userScore++;
                 userScorePara.innerText=userScore;
           }
               
                
        } else if (userChoice === "paper") {
            if(compChoice === "rock"){
                 msg.innerText = `You Win! your ${userChoice} folds comp ${compChoice}`;
                 msg.style.backgroundColor = "green";
                  userScore++;
                 userScorePara.innerText=userScore;
            }
            else{
                 msg.innerText = `You Lose! comp ${compChoice} cuts your ${userChoice}`;
                  msg.style.backgroundColor = "red";
                   compScore++;
                 compScorePara.innerText=compScore;
            }
        } else {
            if(compChoice === "rock"){
                  msg.innerText = `You Lose! comp ${compChoice} breaks your ${userChoice}`;
                   msg.style.backgroundColor = "red";
                    compScore++;
                 compScorePara.innerText=compScore;
            }
            else{
                    msg.innerText = `You Win! your ${userChoice} cuts comp ${compChoice}`;
                    msg.style.backgroundColor = "green";
                     userScore++;
                 userScorePara.innerText=userScore;
            }
             
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = genComputerChoice();
        playGame(userChoice, compChoice);
    });
});
