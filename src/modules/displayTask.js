function displayTask(tasksArray) {
  const todoList = document.querySelector('.todo-list')
  if (tasksArray !== null) {
    tasksArray.forEach((task) => {
      todoList.innerHTML += `
              <div class="edit-task" data-key="${task.index}"> 
              <ul class="ul-edit" >
                  <li class="tick" ><input id="${task.index}" type="checkbox"></li>
                  <li class"text-value" >${task.text}</li>
                  <li class="remove-btn" id="${task.index}"><i class="fa-solid fa-ellipsis-vertical fa-lg vertical-dot"></i></li>
              </ul>  
              <hr>
              </div>
              `;
    });
  }
}

export default displayTask;