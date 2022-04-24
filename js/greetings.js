const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //stop default web action
    loginForm.classList.add(HIDDEN_CLASSNAME); // hide form
    const username = loginInput.value; // get input
    localStorage.setItem(USERNAME_KEY, username); //store in local storage
    paintGreeting(username); // show greeting message
}

function paintGreeting(username) { //greeting function
    greeting.innerText = `Hello ${username}`; //text edit
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //null or submitted username

if(savedUsername === null) { // no saved username in local storage
    loginForm.classList.remove(HIDDEN_CLASSNAME); // show form
    loginForm.addEventListener("submit", onLoginSubmit); // event
}
else { // if there is saved username
    paintGreeting(savedUsername); // show greeting message
}