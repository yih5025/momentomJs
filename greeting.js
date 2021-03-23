const formJs = document.querySelector(".js-form"),
    inputJs = formJs.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN ="showing";

function saveName(text){
    localStorage.setItem(USER_LS ,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currnetValue = inputJs.value;
    paintGreeting(currnetValue);
    saveName(currnetValue);
}

function askForName(){
    formJs.classList.add(SHOWING_CN);
    formJs.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    formJs.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();