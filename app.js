let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePAra = document.querySelector("#user-score");
const CompScorePAra = document.querySelector("#comp-score");

const getcompChoice = () => {
    const options = ['rock' , 'paper' , 'scissor'];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
};

const drawGame = () => {
console.log ('Game was Draw')
msg.innerText = "Draw Game!"
msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, compChoice) => {
if (userWin){
    userscore++;
    userScorePAra.innerText = userscore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}` ;
    msg.style.backgroundColor = "green";
    celebrate();
    
}

else{
    compscore++;
    CompScorePAra.innerText = compscore;
    msg.innerText = `You Lose! Your ${compChoice} beats ${userChoice}` ;
    msg.style.backgroundColor = "red";
    sadEffect();
   
}
}
const playGame= (userChoice) => {
console.log("user Choice = " ,userChoice); 
const compChoice =  getcompChoice();
console.log("Comp Choice = " ,compChoice);

if (userChoice === compChoice) {
drawGame();

}else{
    let userWin = true;
    if (userChoice === 'rock'){
        userWin = compChoice === "paper"? false : true;
    }else if(userChoice === "paper")
        {
        userWin = compChoice === "scissor"? false : true;
    }else {
        userWin =compChoice === "rock" ? false : true;
    }
showWinner(userWin, userChoice, compChoice);
    };

}

function celebrate() {
    confetti({
        particleCount: 300,
        spread: 270,
        origin: { y: 0.6 } // Confetti neeche girayega
    });
}

// Example: Jab user jeetay to function call ho
document.getElementById("msg").addEventListener("click", celebrate);

function sadEffect() {
    confetti({
        particleCount: 100,
        spread: 60,
        colors: ['#ff0000', '#800000'], // Red shades for sad effect
        scalar: 1.5,
        gravity: 2, // Faster falling
        origin: { y: 0.2 } // Start from top
    });
}




document.getElementById("msg").addEventListener("click", sadEffect);





choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }); // Yeh closing bracket sahi jagah par hona chahiye
});
