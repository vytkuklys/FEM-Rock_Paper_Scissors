//------SELECTORS
const rulesOpen = document.querySelector(".open-rules__btn");
const rulesClose = document.querySelector(".rules__btn");
const main = document.getElementsByTagName("main");
const selectHand = document.querySelectorAll(".select__hand");
const playAgainBtn = document.querySelector(".select__section__btn");
const declareResults = document.querySelector(".select__section__title");
const changeScore = document.querySelector(".header__score__table");
const winEffect = document.querySelector(".select--animation");



//--------CLASSES
const ROCK = "chosen-rock";
const PAPER = "chosen-paper";
const SCISSORS = "chosen-scissors";

//--------VARIABLE
let score = 0;


rulesOpen.addEventListener("click", () => toggleRules());
rulesClose.addEventListener("click", () => toggleRules());
playAgainBtn.addEventListener("click", () => playAgain());

selectHand.forEach(item => {
    item.addEventListener("click", () => {
        let chosenShape = item.className.split(' ')[1];
        openBattlegrounds(chosenShape);
    });
});

function toggleRules() {
    document.querySelector(".rules").classList.toggle('rules--display');
}
//function below removes classes that have been adden by openBattlegrounds function
function playAgain() {
    main[0].className = "";
    selectHand[0].classList.remove(selectHand[0].classList[2]);
    selectHand[1].classList.remove(selectHand[1].classList[2]);
    winEffect.classList.remove(winEffect.classList[1]);
}

//adds classes to display battleground 
async function openBattlegrounds(chosenShape) {
    //if statement to prevent reload of battleground if battleground is already loaded
    if (!main[0].className) {
        let shape = chosenShape.split('__')[2];
        let enemyShape, scorePoint;
        main[0].classList.add("battleground");
        if (shape === "rock") {
            selectHand[0].classList.add(ROCK);
        } else if (shape === "paper") {
            selectHand[0].classList.add(PAPER);
        } else {
            selectHand[0].classList.add(SCISSORS);
        }
        await sleep(1000);
        enemyShape = generateEnemyShape();
        await sleep(200);
        scorePoint = showResults(shape, enemyShape);
        showAnimation(scorePoint);
        await sleep(1000);
        showScore(scorePoint);
    }
}

function generateEnemyShape() {
    let enemyShape = Math.floor(Math.random() * 3 + 1);
    if (enemyShape === 1) {
        selectHand[1].classList.add(ROCK);
        enemyShape = "rock";
    } else if (enemyShape === 2) {
        selectHand[1].classList.add(PAPER);
        enemyShape = "paper";
    } else {
        selectHand[1].classList.add(SCISSORS);
        enemyShape = "scissors";
    }
    return enemyShape;
}

function showResults(shape, enemyShape) {
    let scorePoint = 0;
    if (shape === enemyShape) {
        main[0].classList.add('results');
        declareResults.innerHTML = "It's a tie";
    } else if ((shape === "rock" && enemyShape === "scissors") || (shape === "scissors" && enemyShape === "paper") || (shape === "paper" && enemyShape === "rock")) {
        main[0].classList.add('results');
        declareResults.innerHTML = "You win";
        scorePoint = 1;
    } else {
        declareResults.innerHTML = "You lost";
        main[0].classList.add('results');
        scorePoint = -1;
    }
    return scorePoint;
}

function showScore(scorePoint) {
    score += scorePoint;
    changeScore.innerHTML = score;
}

function showAnimation(scorePoint) {
    if (scorePoint === 1) {
        winEffect.classList.add("select__win");
    } else if (scorePoint === -1) {
        winEffect.classList.add("select__lose");
    } else {
        return;
    }
}

function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, ms);
    });
}