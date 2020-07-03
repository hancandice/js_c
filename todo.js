const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// function getNewID() {
//   const IDs = [];
//   const loadedToDos = localStorage.getItem(TODOS_LS);
//   if (toDos.length === 0) {
//     return 1;
//   } else {
//     const parsedToDos = JSON.parse(loadedToDos);
//     parsedToDos.forEach(function (toDo) {
//       IDs.push(toDo.id);
//     });
//     return Math.max(...IDs) + 1;
//   }
// }

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID =
    toDoList.lastElementChild === null
      ? 1
      : parseInt(toDoList.lastElementChild.id) + 1;
  delBtn.innerText = "🔥";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newID;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newID,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  const currentValue = toDoInput.value;
  event.preventDefault();
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos === null) {
    paintToDo(currentValue);
    toDoInput.value = "";
  } else {
    const parsedToDos = JSON.parse(loadedToDos);
    const toDoArrayLength = parsedToDos.length;
    if (toDoArrayLength < 7) {
      paintToDo(currentValue);
      toDoInput.value = "";
    } else {
      window.alert(
        "You can create up to 7 lists at once. To add another to-do list, click the flame button 🔥 to delete the finished list."
      );
      toDoInput.value = "";
    }
  }
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
