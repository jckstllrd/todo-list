import "./styles.css";

let projects = [];

const createProject = (name) => {
  let todos = [];
  let projectName = name;
  const getProjectName = () => projectName;
  const setProjectName = (newName) => (projectName = newName);

  const createTodo = (title, desc, timeLeft, priority, notes, isComplete) => {
    todos.push({ title, desc, timeLeft, priority, notes, isComplete });
  };
  const getAllTodos = () => {
    return { projectName, todos };
  };
  return { getProjectName, setProjectName, createTodo, getAllTodos };
};

const initialisePage = () => {
  const newProjectBtn = document.querySelector(".new-project.btn");
  const newTodoBtn = document.querySelector(".new-todo.btn");
  newTodoBtn.addEventListener("click", () => {
    const newTodoForm = document.querySelector("dialog.new-todo-dialog");
    newTodoForm.showModal();
  });
  newProjectBtn.addEventListener("click", () => {
    const newTodoForm = document.querySelector("dialog.new-project-dialog");
    newTodoForm.showModal();
  });
};

initialisePage();
