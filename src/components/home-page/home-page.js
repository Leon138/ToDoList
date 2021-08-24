import { routes } from '../../shared/constants/routes';
import { createTask, getTask, deleteTask, getUsers, createBlock, getBlock, deleteBlock} from '../../api/api-handlers';
import { getPersonalData, getUID, setBlockId, getBlockId } from '../../shared/ls-services';
import moment from 'moment';

export const createLists = () => {
  const dropDown = document.querySelector('.user-info');
  const user = document.querySelector('.user');
  const content = document.querySelector('.wrapper-content');
  const addBlock = document.querySelector('.wrapper-content-block-add');
  const warningBlock = document.querySelector('.warning');
  const btnNo = document.querySelector('.warning-button-no');
  const btnYes = document.querySelector('.warning-button-yes');
  let arrcontent = [];

  user.addEventListener('click', event => {
    event.preventDefault();
    dropDown.classList.toggle('user-info-open');
  });

  addBlock.addEventListener('click', () => {
    if (arrcontent.length <= 99) {
      displayBlockList();
    }
  });  
  
  const displayBlockList = async () => {
    const addBlock = document.querySelector('.wrapper-content-block-add');
    const divContent = document.createElement('div');
    const divNameList = document.createElement('div');
    const inputNameList = document.createElement('input');
    const imgEdit = document.createElement('img');
    const imgDelete = document.createElement('img');
    const imgStar = document.createElement('img');
    const imgStarBackground = document.createElement('img');
    const taskList = document.createElement('div');
    const ul = document.createElement('ul');
    const li_1 = document.createElement('li');
    const li_2 = document.createElement('li');
    const li_3 = document.createElement('li');
    const li_4 = document.createElement('li');
    const input_1 = document.createElement('input');
    const input_2 = document.createElement('input');
    const input_3 = document.createElement('input');
    const input_4 = document.createElement('input');
    const a = document.createElement('a');

    const block = {
      name: null,
      date: null,
      Time: null,
      completed: false,
      userId: getPersonalData().id
    }

    if (arrcontent.length) {
      await createBlock(arrcontent[arrcontent.length - 1]);
    }

    arrcontent.push(block);

    imgStar.src = '/image/star.png';
    imgStarBackground.src = '/image/star_black_24dp.png';
    imgEdit.src = '/image/edit.png';
    imgDelete.src = '/image/close.png'; 
    inputNameList.placeholder = 'Title';
    a.href = './todolist.html';

    divContent.className = 'wrapper-content-block';
    divNameList.className = 'name-list';
    inputNameList.className = 'name-list-input';
    imgEdit.className = 'img-edit';
    imgStar.className = 'img-star';
    imgStarBackground.className = 'img-star-background';
    imgDelete.id = 'img-delete';
    taskList.className = 'wrapper-content-block-task-list';

    content.appendChild(divContent);
    divContent.appendChild(divNameList);
    divNameList.appendChild(a);
    a.appendChild(imgEdit);
    divNameList.append(imgStar, imgStarBackground, inputNameList, imgDelete);
    divContent.appendChild(taskList);
    taskList.append(ul);
    ul.append(li_1, li_2, li_3, li_4);
    li_1.append(input_1);
    li_2.append(input_2);
    li_3.append(input_3);
    li_4.append(input_4);
    content.appendChild(addBlock);

    imgEdit.addEventListener('click', () => {
      window.location.href = routes.todolist;
    });

    imgStar.addEventListener('click', () => {
      content.prepend(divContent);
      if(imgStar) {
        imgStarBackground.style.display = 'block';
        imgStar.style.display = 'none';
      }
    });

    imgStarBackground.addEventListener('click', () => {
      content.append(divContent);
      content.appendChild(addBlock);
      if (imgStarBackground) {
        imgStarBackground.style.display = 'none';
        imgStar.style.display = 'block';
      }
    });    

    imgDelete.addEventListener('click', () => {
      divContent.append(warningBlock);
      warningBlock.style.display = 'flex';  
      btnYes.onclick = function(index) {
        if (btnYes) {
          divContent.remove();
          arrcontent.splice(index, 1);
          warningBlock.style.display = 'none';  
        }
      }
      btnNo.onclick = function() {
        if (btnNo) {
          warningBlock.style.display = 'none';  
        }
      }
    });

    divContent.oninput = () => {
      // block.name = inputNameList.value;
      block.date = moment().format();
      block.Time = moment().format('LTS');
      arrcontent[arrcontent.length - 1] = block;
    };

  }

}

export const renderBlockList = async () => {
  const content = document.querySelector('.wrapper-content');
  const addBlock = document.querySelector('.wrapper-content-block-add');
  const warningBlock = document.querySelector('.warning');
  const btnNo = document.querySelector('.warning-button-no');
  const btnYes = document.querySelector('.warning-button-yes');
  let blocks;
  let tasks;
  let users

  await getTask().then( response => tasks = response);
  await getUsers().then(response => users = response);
  await getBlock().then( response => blocks = response);

  // console.log('block', blocks);
  // console.log('task', tasks);

  blocks.forEach( block  => {
    const user = users.find(user => user.id === block.userId);
    if (user.uuid === getUID()) {
      const divContent = document.createElement('div');
      const divNameList = document.createElement('div');
      const textareaNameList = document.createElement('textarea');
      const imgEdit = document.createElement('img');
      const imgDelete = document.createElement('img');
      const imgStar = document.createElement('img');
      const imgStarBackground = document.createElement('img');
      const taskList = document.createElement('div');
      const ul = document.createElement('ul');
      const li_1 = document.createElement('li');
      const li_2 = document.createElement('li');
      const li_3 = document.createElement('li');
      const li_4 = document.createElement('li');
      const textarea_1 = document.createElement('textarea');
      const textarea_2 = document.createElement('textarea');
      const textarea_3 = document.createElement('textarea');
      const textarea_4 = document.createElement('textarea');
      const a = document.createElement('a');



      imgStar.src = '/image/star.png';
      imgStarBackground.src = '/image/star_black_24dp.png';
      imgEdit.src = '/image/edit.png';
      imgDelete.src = '/image/close.png'; 
      textareaNameList.placeholder = 'Title';
      a.href = './todolist.html';

      divContent.className = 'wrapper-content-block';
      textarea_1.className = 'textarea';
      textarea_2.className = 'textarea';
      textarea_3.className = 'textarea';
      textarea_4.className = 'textarea';
      divNameList.className = 'name-list';
      textareaNameList.className = 'name-list-input';
      imgEdit.className = 'img-edit';
      imgStar.className = 'img-star';
      imgStarBackground.className = 'img-star-background';
      imgDelete.id = 'img-delete';
      taskList.className = 'wrapper-content-block-task-list';

      const inputs = document.getElementsByClassName('textarea');

      console.log(inputs);
      // for (let i = 0; i < tasks.length; i++) {
      //   inputs[i].innerText = tasks[i].input_value;
      // } 

  

        // console.log(task);
        // textareaNameList.innerHTML = task.name;
        // textarea_1.innerHTML = task.input_value;
        // textarea_2.innerHTML = task.input_value;
        // textarea_3.innerHTML = task.input_value;
        // textarea_4.innerHTML = task.input_value;
      // });
         
      content.appendChild(divContent);
      divContent.appendChild(divNameList);
      divNameList.appendChild(a);
      a.appendChild(imgEdit);
      divNameList.append(imgStar, imgStarBackground, textareaNameList, imgDelete);
      divContent.appendChild(taskList);
      taskList.append(ul);
      ul.append(li_1, li_2, li_3, li_4);
      li_1.append(textarea_1);
      li_2.append(textarea_2);
      li_3.append(textarea_3);
      li_4.append(textarea_4);
      content.append(addBlock);

      imgEdit.addEventListener('click', () => {
        window.location.href = routes.todolist;
      });

      imgStar.addEventListener('click', () => {
        content.prepend(divContent);
        if(imgStar) {
          imgStarBackground.style.display = 'block';
          imgStar.style.display = 'none';
        }
      });

      imgStarBackground.addEventListener('click', () => {
        content.append(divContent);
        content.appendChild(addBlock);
        if (imgStarBackground) {
          imgStarBackground.style.display = 'none';
          imgStar.style.display = 'block';
        }
      });    

      imgDelete.addEventListener('click', () => {
        divContent.append(warningBlock);
        warningBlock.style.display = 'flex';  
        btnYes.onclick = function() {
          if (btnYes) {
            divContent.remove();
            // arrcontent.splice(index, 1);
            deleteBlock(block);
            warningBlock.style.display = 'none';  
          }
        }
        btnNo.onclick = function() {
          if (btnNo) {
            warningBlock.style.display = 'none';  
          }
        }
      });
    }  
  });
}

export const setUserInfo = () => {
  const pUserName = document.querySelector('.header-user-name');
  const userName = `${getPersonalData().email}`;
  pUserName.innerText = userName; 
}