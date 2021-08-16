import { routes } from '../../shared/constants/routes';

export const dropDownList = () => {
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
    content.appendChild(addBlock);
  });  
  
  function displayBlockList() {
    const divContent = document.createElement('div');
    const divNameList = document.createElement('div');
    const inputNameList = document.createElement('input');
    const imgEdit = document.createElement('img');
    const imgDelete = document.createElement('img');
    const imgStar = document.createElement('img');
    const imgStarBackground = document.createElement('img');
    const taskList = document.createElement('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const input = document.createElement('input');
    const a = document.createElement('a');

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
    divNameList.append(imgStar);
    divNameList.append(imgStarBackground);
    divNameList.appendChild(inputNameList);
    divNameList.appendChild(imgDelete);
    divContent.appendChild(taskList);
    taskList.append(ul);
    ul.appendChild(li);
    li.append(input);
    li.insertAdjacentHTML('beforebegin', '<li><input type="text"></li>');
    li.insertAdjacentHTML('afterend', '<li><input type="text"></li>');
    li.insertAdjacentHTML('afterend', '<li><input type="text"></li>');
    
    arrcontent.push(divContent);

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
          console.log(arrcontent);
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

}
