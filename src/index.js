document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // grab form
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener("submit", function(e) {
    // stop form from default redirecting action
    e.preventDefault();
    // grab new description
    const newTaskDescription = document.getElementById('new-task-description').value;
  // insert title to list
    // const title = document.createElement('input')
    // title.id = "new-title"
    // title.appendChild(taskForm)

    // const titleItem = document.createElement("li")
    // titleItem.innerHTML = title
    // taskList.appendChild(titleItem)
  // insert into list
    const listItem = document.createElement("li")
    listItem.innerHTML = newTaskDescription;
    taskList.appendChild(listItem);

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Done"
    deleteButton.dataset.action = "delete"
    listItem.appendChild(deleteButton)
  // edit button
    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.dataset.action = "edit"
    listItem.appendChild(editButton)
    // clears form
    taskForm.reset();
  })
// Well my best attempt at creating a color change function
//   document.getElementById('changeColor').addEventListener('change', colorChanger);

//   function colorChanger() {
//   let color = document.getElementById('changeColor').value;
//   let list = document.getElementById('list');
//   for (let i = 0; i < list.length; i++){
//     list[i].style.color = color;
//   }
// }
});
