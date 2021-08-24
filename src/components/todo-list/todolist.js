import moment from 'moment';

import { createTask, getTask, deleteTask, getUsers, getBlock } from '../../api/api-handlers';
import { getPersonalData, getUID, setBlockId, getBlockId } from '../../shared/ls-services';

import { createTask } from '../../api/api-handlers';


export const ToDoList = () => {
  const dropDown = document.querySelector('.user-info');
  const user = document.querySelector('.user');

  const imgBurger = document.querySelector('.todolist-header-img-burger-menu');
  const divSort = document.querySelector('.todolist-header-img-burger-menu-sort');

  const todolistContent = document.querySelector('.todolist-wrapper');

  const blockAdd = document.querySelector('.todolist-add');
  const blockAddImg = document.querySelector('.todolist-add-img');
  const todolist = document.querySelector('.todolist');
  const imgStar = document.querySelector('.todolist-header-img-star');
  const imgStarBackground = document.querySelector('.todolist-header-img-star-black');

  const todolistHeaderInput = document.querySelector('.todolist-header-input-block-name');

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


  imgBurger.addEventListener('click', () => {
    divSort.classList.toggle('sort-block');
  });



  blockAddImg.addEventListener('click', () => {
    if (arrtask.length <= 99) {
      displayTask();
    }

    todolistContent.appendChild(blockAdd);

  });

  radio1.addEventListener('click', () => { 
    radioColor('#c9c1cc');
  });

  radio2.addEventListener('click', () => {
    radioColor('#9DB4C6');
  });

  radio3.addEventListener('click', () => {
    radioColor('#C1CAA6');
  });

  radio4.addEventListener('click', () => {
    radioColor('#B3B8B5');
  });

  radio5.addEventListener('click', () => {
    radioColor('#CDBDBD');
  });

  const radioColor = color => {
    todolist.style.background = color; 
    footer.style.background = color; 
    todolistHeaderInput.style.background = color; 
  }


  const displayTask = async () => {
    const todolistContent = document.querySelector('.todolist-wrapper');
    const divContent = document.createElement('div');
    const divCircle = document.createElement('div');
    const contentInput = document.createElement('div');
    const input = document.createElement('textarea');
    const imgDelet = document.createElement('img');
    const line = document.createElement('div');

    const task = {
      userId: getPersonalData().id,
      name: null,
      date: null,
      Time: null,
      input_value: null,
    }

    if(arrtask.length) {
      await createTask(arrtask[arrtask.length - 1]);
    }

    arrtask.push(task);

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

    input.className = 'todolist-header-input';
    imgDelet.className = 'todolist-wrapper-content-input-img';
    line.className = 'todolist-wrapper-content-input-line';

    imgDelet.src = '/image/close.png'; 
    input.placeholder = 'Change Text';
    input.maxLength = 200;

    input.className = 'todolist-wrapper-content-input-task';
    imgDelet.className = 'todolist-wrapper-content-input-img';
    line.className = 'todolist-wrapper-content-input-line';

   
    todolistContent.append(divContent);
    divContent.appendChild(divCircle);
    divContent.appendChild(contentInput);

    contentInput.append(line, input, imgDelet);
    todolistContent.appendChild(blockAdd);
  

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


    input.oninput = () => {
      task.input_value = input.value;
      // task.name = todolistHeaderInput.value;
      task.date = moment().format();
      task.Time = moment().format('LTS');
      arrtask[arrtask.length - 1] = task;
    }
    
  }
  
}

export const renderTask = async () => {
  const blockAdd = document.querySelector('.todolist-add');
  let tasks;
  let users;

  await getTask().then(response => tasks = response);
  await getUsers().then(response => users = response);

  tasks.forEach( task => {
    // console.log(task);
    const user = users.find(user => user.id === task.userId);
    if (user.uuid === getUID()) {
      const todolistContent = document.querySelector('.todolist-wrapper');
      const divContent = document.createElement('div');
      const divCircle = document.createElement('div');
      const contentInput = document.createElement('div');
      const textarea = document.createElement('textarea');
      const imgDelet = document.createElement('img');
      const line = document.createElement('div');

      divContent.className = 'todolist-wrapper-content';
      divCircle.className = 'todolist-wrapper-content-circle';
      contentInput.className = 'todolist-wrapper-content-input';
      textarea.className = 'todolist-wrapper-content-input-task';
      imgDelet.className = 'todolist-wrapper-content-input-img';
      line.className = 'todolist-wrapper-content-input-line';

      imgDelet.src = '/image/close.png'; 
      textarea.placeholder = 'Change Text';
      textarea.maxLength = 200;

      textarea.innerHTML = task.input_value;
      // textarea.innerHTML = task.input_value_1;
      // textarea.innerHTML = task.input_value_2;

      todolistContent.append(divContent);
      divContent.append(divCircle);
      divContent.append(contentInput);
      contentInput.append(line, textarea, imgDelet);
      todolistContent.appendChild(blockAdd);

      imgDelet.onclick = async () => {
        divContent.remove();
        await deleteTask(task);
      }

      divCircle.addEventListener('click', () => {
        divCircle.classList.toggle('circle-background');
        textarea.classList.toggle('task-color');
        line.classList.toggle('line-display');
      });
    }

  });

}

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

