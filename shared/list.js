export const getNameList = () => {
  const NameLists = document.querySelector('.NameLists');
  const todo = document.querySelector('.Lists__todo');
  let arr = [];
  
  if (localStorage.getItem('btn')) {
    arr = JSON.parse(localStorage.getItem('btn'));
    displayNameList();
  }

  NameLists.addEventListener ('keydown', event => {
    if (event.keyCode === 13) {
      if (NameLists.value !== '') {
        arr.push(NameLists.value);
        localStorage.setItem('btn', JSON.stringify(arr));
        displayNameList();
        NameLists.value = ''
      }
    }
  })

  function displayNameList() {
    let list = '';
      arr.forEach(item => {
        list += `
        <button class='btn_name'>
          ${item}
        </button>
        `;
        todo.innerHTML = list;
    }); 
  }

}
