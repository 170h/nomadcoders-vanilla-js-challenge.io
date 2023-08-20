const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // "key", value / Chromw Inspector > Applicaiotb > Local Storage
  // console.log(username);
  // greeting.innerText = "Hello " + username;
  // greeting.innerText = `Hello ${username}!`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreen(username);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

function paintGreen(username) {
  // const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = `Hello ${username}`;
  paintGreen(savedUserName);
}
