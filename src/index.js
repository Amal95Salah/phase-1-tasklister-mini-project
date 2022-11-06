document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");

  const tasksUl = document.getElementById("tasks");


  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    let taskUl = document.createElement("ul");
    taskUl.innerText = newTaskDescription.value

    let buttonUl = document.createElement("button");
    buttonUl.innerText = "x";

    taskUl.appendChild(buttonUl);
    tasksUl.appendChild(taskUl);

    e.target.reset();

    taskUl.addEventListener("click", (e) => {
      tasksUl.removeChild(taskUl);
    });
  });



});
