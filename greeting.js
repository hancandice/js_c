const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function deleteGreetings(event) {
  const deleteConfirm = confirm(
    `Click "OK" if you want to delete all data completely. 😱`
  );
  if (deleteConfirm === true) {
    localStorage.clear();
  }
  location.reload();
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello 👋🏼 ${text} 🍀`;
  const delBtn = document.createElement("button");
  greeting.appendChild(delBtn);
  delBtn.innerText = "🔥";
  delBtn.addEventListener("click", deleteGreetings);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
