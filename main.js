const rulesOpen = document.querySelector(".open-rules__btn");
const rulesClose = document.querySelector(".rules__btn");
const selectHand = document.querySelectorAll(".select__hand");
const main = document.getElementsByTagName("main");
const playAgainBtn = document.querySelector(".select__section__btn");
//--------class names
const ROCK = "chosen-rock";
const PAPER = "chosen-paper";
const SCISSORS = "chosen-scissors";

rulesOpen.addEventListener("click", ()=> toggleRules());
rulesClose.addEventListener("click", ()=> toggleRules());
playAgainBtn.addEventListener("click", ()=> playAgain());

selectHand.forEach(item=>{
    item.addEventListener("click", ()=>{
        let chosenShape = item.className.split(' ')[1];
        openBattlegrounds(chosenShape);
    });
});

function toggleRules(){
    document.querySelector(".rules").classList.toggle('rules--display');
}
//function below removes classes that have been adden by openBattlegrounds function
function playAgain(){
    main[0].classList.remove("battleground");
    selectHand[0].classList.remove(selectHand[0].classList[2]);
    selectHand[1].classList.remove(selectHand[1].classList[2]);
}

//adds classes to display battleground 
function openBattlegrounds(chosenShape){
    let shape = chosenShape.split('__')[2];
    main[0].classList.add("battleground");
    if(shape === "rock"){
        console.log("rock")
        selectHand[0].classList.add(ROCK);
    }else if(shape === "paper"){
        selectHand[0].classList.add(PAPER);
    }else{
        selectHand[0].classList.add(SCISSORS);
    }
    generateEnemyShape();
}

function generateEnemyShape(){
    let enemyShape = Math.floor(Math.random() * 3 + 1);
    console.log(enemyShape);
    if(enemyShape === 1){
        selectHand[1].classList.add(ROCK);
    }else if(enemyShape === 2){
        selectHand[1].classList.add(PAPER);
    }else{
        selectHand[1].classList.add(SCISSORS);
    }
}
