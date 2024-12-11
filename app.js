let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];

    // 
};





const drawGame = () =>{
    
    
    msg.innerText = " Game was draw.play again ";
    msg.style.backgroundColor = "#081b31";


}

const showWinner = (userWin,userChoice,compChoice) => {

if(userWin){
    userScore ++;
    userScorePara.innerText=userScore;
    
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
} else {
    compScore ++;
    compScorePara.innerText=compScore;
   
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";

}

}


const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choice  -> modular 

    const compChoice = genCompchoice();
    console.log("comp choice = ",compChoice);
if(userChoice === compChoice){
    // draw Game
    drawGame();
} else {
      let userWin = true;
      if(userChoice === "rock") {
        //sciorros,paper
        userWin = compChoice === "paper" ? false :true;
      } else if(userChoice === "paper") {
        // rock ,scirros
       userWin = compChoice === "scirros" ? false:true;
      } else {
            // paper,rock
        userWin = compChoice === "rock" ? false:true;

      }
      showWinner(userWin,userChoice,compChoice)
      
        
      
}


};

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
    });
});









