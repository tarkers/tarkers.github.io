let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-Board");
const result_div = document.querySelector(".result>p");
const rock_span = document.getElementById("r");
const paper_span = document.getElementById("p");
const scissors_span = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    var computerChoice = (Math.floor(Math.random() * 3));
    return choices[computerChoice];
}

function changeName(name) {
    switch (name) {
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Stone";
        default:
            return null;
    }
}



function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord ="user".fontsize(3).sub().fontcolor("white");
    const smallCompWord ="comp".fontsize(3).sub().fontcolor("white");
    const userChoice_span =document.getElementById(userChoice);
    result_div.innerHTML = `${changeName(userChoice)}${smallUserWord} beats ${changeName(computerChoice)}${smallCompWord}. You Win!`;
    userChoice_span.classList.add('green-glow');
    userChoice_span.classList.remove('hover');
    setTimeout(()=> {userChoice_span.classList.remove('green-glow') ;userChoice_span.classList.add('hover')},800);
}

function draw(userChoice, computerChoice) {
    const smallUserWord ="user".fontsize(3).sub().fontcolor("white");
    const smallCompWord ="comp".fontsize(3).sub().fontcolor("white");
    const userChoice_span =document.getElementById(userChoice);
    result_div.innerHTML = `${changeName(userChoice)}${smallUserWord} Tie ${changeName(computerChoice)}${smallCompWord}.Tie Game!`;
    userChoice_span.classList.add('white-glow');
    userChoice_span.classList.remove('hover');
    setTimeout(()=> {userChoice_span.classList.remove('white-glow') ;userChoice_span.classList.add('hover')},800);

}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord ="user".fontsize(3).sub().fontcolor("white");
    const smallCompWord ="comp".fontsize(3).sub().fontcolor("white");
    const userChoice_span =document.getElementById(userChoice);
    result_div.innerHTML = `${changeName(computerChoice)}${smallUserWord} covers ${changeName(userChoice)}${smallCompWord}. You Lose!`;
    userChoice_span.classList.add('red-glow');
    userChoice_span.classList.remove('hover');
    setTimeout(()=> {userChoice_span.classList.remove('red-glow') ;userChoice_span.classList.add('hover')},800);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
    }
}



function main() {
    rock_span.addEventListener('click', ()=>game("r"));
    paper_span.addEventListener('click', ()=>game("p"));
    scissors_span.addEventListener('click', ()=>game("s"));
}

main();
