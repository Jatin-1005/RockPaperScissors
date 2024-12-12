let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
let paper = document.querySelector("#paper");

let scoreY = document.querySelector("#scoreY");
let scY = +scoreY.innerText;
let scoreC = document.querySelector("#scoreC");
let scC = +scoreC.innerText;

let result = document.querySelector("#resulttext");

let num;

rock.onclick = () => {
    num = Math.random();
    result.classList = [];
    if (num < 0.33) {
        result.innerText = "Draw Game. You both chose the same!";
        result.classList.add("draw");
    } else if (num < 0.67) {
        result.innerText = "You won. Rock beats scissors!";
        scoreY.innerText = ++scY;
        result.classList.add("win");
    } else {
        result.innerText = "Defeat, hard luck. Paper beats rock!";
        scoreC.innerText = ++scC;
        result.classList.add("loss");
    }
}

scissors.onclick = () => {
    num = Math.random();
    result.classList = [];
    if (num < 0.33) {
        result.innerText = "Draw Game. You both chose the same!";
        result.classList.add("draw");
    } else if (num < 0.67) {
        result.innerText = "You won. Scissors beat paper!";
        scoreY.innerText = ++scY;
        result.classList.add("win");
    } else {
        result.innerText = "Defeat, hard luck. Rock beats scissors!";
        scoreC.innerText = ++scC;
        result.classList.add("loss");
    }
}

paper.onclick = () => {
    num = Math.random();
    result.classList = [];
    if (num < 0.33) {
        result.innerText = "Draw Game. You both chose the same!";
        result.classList.add("draw");
    } else if (num < 0.67) {
        result.innerText = "You won. Paper beats paper!";
        scoreY.innerText = ++scY;
        result.classList.add("win");
    } else {
        result.innerText = "Defeat, hard luck. Scissors beats paper!";
        scoreC.innerText = ++scC;
        result.classList.add("loss");
    }
}
