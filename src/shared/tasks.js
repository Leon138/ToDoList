export const addTask = () => {
  const inputTask = document.querySelector('.inputTask');
  const btnAddTask = document.querySelector('.btnAddTask');
  const outputTask = document.querySelector('.outputTask');
  let todoList = [];

  if (localStorage.getItem('task')) {
    todoList = JSON.parse(localStorage.getItem('task'));
    displayTask();
  }

  btnAddTask.addEventListener('click', event => {
    if (inputTask.value !== '') {
      todoList.push(inputTask.value);
      displayTask();
      localStorage.setItem('task', JSON.stringify(todoList));
      inputTask.value = '';
    }
  })
 
  function displayTask() {
    let list = '';
    todoList.forEach(item =>{
      list +=`
      <div class='taskList'>
        ${item}
      </div>
      `;
      outputTask.innerHTML = list;
    })
  }

}
