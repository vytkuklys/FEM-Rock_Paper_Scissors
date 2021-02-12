const rulesOpen = document.querySelector(".open-rules__btn");
const rulesClose = document.querySelector(".rules__btn");


rulesOpen.addEventListener("click", ()=>toggleRules());
rulesClose.addEventListener("click", ()=> toggleRules());

function toggleRules(){
    document.querySelector(".rules").classList.toggle('rules--display');
}

