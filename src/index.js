const tasks = [
  {
     description: 'First task',
     completed: false,
     index: 1,
  },
  {
     description: 'Second task',
     completed: true,
     index: 2,
  },
];

const newTask = new Task();
const inputTask = document.querySelector('.input-task');

export default function updateUi(id) {
  const localData = JSON.parse(localStorage.getItem('tasks'));
  if (localData !== null) {
    localData.forEach((data) => {
      if (data.index === Number(id)) {
        const newarr = localData.indexOf(data);
        localData.splice(newarr, 1);
      }
    });
  }
  newTask.tasks = localData;
  localStorage.setItem('tasks', JSON.stringify(localData));
}

inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const inputValue = inputTask.value.trim();
    if (inputValue !== '') {
      newTask.addNewTask(inputValue);
      inputTask.value = '';
      inputTask.focus();
    }
    displayTask();
    window.location.reload();
  }
});
// instantiate modules
displayTask();