import moment from 'moment';
import { createTask } from '../../api/api-handlers';

export const ToDoList = () => {
  const dropDown = document.querySelector('.user-info');
  const user = document.querySelector('.user');
  const todolistContent = document.querySelector('.todolist-wrapper');
  const blockAdd = document.querySelector('.todolist-add');
  const blockAddImg = document.querySelector('.todolist-add-img');
  const todolist = document.querySelector('.todolist');
  const imgStar = document.querySelector('.todolist-header-img-star');
  const imgStarBackground = document.querySelector('.todolist-header-img-star-black');
  const todolistHeaderInput = document.querySelector('.todolist-header-input');
  const footer = document.querySelector('.footer');
  const radio1 = document.querySelector('.footer-form-span-1');
  const radio2 = document.querySelector('.footer-form-span-2');
  const radio3 = document.querySelector('.footer-form-span-3');
  const radio4 = document.querySelector('.footer-form-span-4');
  const radio5 = document.querySelector('.footer-form-span-5');
  let arrtask = [];

  user.addEventListener('click', event => {
    event.preventDefault();
    dropDown.classList.toggle('user-info-open');
  });

  imgStar.addEventListener('click', () => {
    if(imgStar) {
      imgStarBackground.style.display = 'block';
      imgStar.style.display = 'none';
    }
  });

  imgStarBackground.addEventListener('click', () => {
    if (imgStarBackground) {
      imgStarBackground.style.display = 'none';
      imgStar.style.display = 'block';
    }
  });    

  blockAddImg.addEventListener('click', () => {
    if (arrtask.length <= 99) {
      displayTask();
    }
    todolistContent.appendChild(blockAdd);
  });

  radio1.addEventListener('click', () => {
    todolist.style.background = '#c9c1cc'; 
    footer.style.background = '#c9c1cc'; 
    todolistHeaderInput.style.background = '#c9c1cc'; 
  });

  radio2.addEventListener('click', () => {
    todolist.style.background = '#9DB4C6'; 
    footer.style.background = '#9DB4C6'; 
    todolistHeaderInput.style.background = '#9DB4C6'; 
  });

  radio3.addEventListener('click', () => {
    todolist.style.background = '#C1CAA6'; 
    footer.style.background = '#C1CAA6'; 
    todolistHeaderInput.style.background = '#C1CAA6'; 
  });

  radio4.addEventListener('click', () => {
    todolist.style.background = '#B3B8B5'; 
    footer.style.background = '#B3B8B5'; 
    todolistHeaderInput.style.background = '#B3B8B5'; 
  });

  radio5.addEventListener('click', () => {
    todolist.style.background = '#CDBDBD'; 
    footer.style.background = '#CDBDBD'; 
    todolistHeaderInput.style.background = '#CDBDBD'; 
  });

    function displayTask() {
    const todolistContent = document.querySelector('.todolist-wrapper');
    const blockAddImg = document.querySelector('.todolist-add-img');
    const divContent = document.createElement('div');
    const divCircle = document.createElement('div');
    const contentInput = document.createElement('div');
    const input = document.createElement('input');
    const imgDelet = document.createElement('img');
    const line = document.createElement('div');

    imgDelet.src = '/image/close.png'; 
    input.placeholder = 'Change Text';
    input.type = 'text';

    divContent.className = 'todolist-wrapper-content';
    divCircle.className = 'todolist-wrapper-content-circle';
    contentInput.className = 'todolist-wrapper-content-input';
    input.className = 'todolist-wrapper-content-input-task';
    imgDelet.className = 'todolist-wrapper-content-input-img';
    line.className = 'todolist-wrapper-content-input-line';
   
    todolistContent.append(divContent);
    divContent.appendChild(divCircle);
    divContent.appendChild(contentInput);
    contentInput.append(line);
    contentInput.appendChild(input);
    contentInput.appendChild(imgDelet);

    imgDelet.onclick = function () {
      divContent.remove();
    }

    divCircle.addEventListener('click', () => {
      divCircle.classList.toggle('circle-background');
      input.classList.toggle('task-color');
      line.classList.toggle('line-display');
    });

    arrtask.push(divContent);

    const task = {
      taskValue: null,
      complited: false,
      date: null,
      Time: null,
    }

    blockAddImg.addEventListener('click', () => {
      task.taskValue = input.value;
      task.date = moment().format();
      task.Time = moment().format('LTS');
      createTask(task);
    });

  }
  
}
