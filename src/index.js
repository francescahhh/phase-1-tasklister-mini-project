//code from first try:
// document.addEventListener("DOMContentLoaded", () => {

//   document.getElementById("create-task-form").addEventListener("submit", function(event) {
//     //create child node
//     let taskList = document.getElementById("tasks");
//     let task = document.createElement("li");
//     let taskInput = document.getElementById("new-task-description").value;
//     let taskNode = document.createTextNode(taskInput);

//     //append child node to list
//     task.appendChild(taskNode);
//     taskList.appendChild(task);

//     event.preventDefault();
//   });
// });

//marc's review solution:
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  //setting up the task list
  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = (event.target.description.value);
  taskList.append(task);

  //creating delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(task);
    //or task.remove();
});
  task.append(deleteButton);


  //to clear out the text box after submitted
  event.target.reset();
}