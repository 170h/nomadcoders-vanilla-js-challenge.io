const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array type string
}

function deleteTodo(event) {
  //console.log(event.target.parentElement.innerText);
  //console.dir(event.target);
  const li = event.target.parentElement;
  // console.log(li.id);
  console.log(typeof li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo.id is a number !== li.id is a string
  saveTodos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "\u2713";
  button.addEventListener("click", deleteTodo);
  li.prepend(button);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("Hello", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(savedToDos);

if (savedToDos !== null) {
  const paeredToDos = JSON.parse(savedToDos); // convert to live array
  // console.log(paeredToDos);
  // paeredToDos.forEach(sayHello);
  // paeredToDos.forEach((item) => console.log("Hello", item));
  toDos = paeredToDos;
  paeredToDos.forEach(paintToDo);
}
