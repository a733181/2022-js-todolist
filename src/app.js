const fromEl = document.querySelector('.form');
const inputEl = document.querySelector('.input');
const todolistsEl = document.querySelector('.todolists');
const data = [
  {
    checked: true,
    content: 'List1',
  },
  {
    checked: false,
    content: 'List2',
  },
  {
    checked: false,
    content: 'List3',
  },
];

renderTodoHandler();

fromEl.addEventListener('submit', (e) => {
  e.preventDefault();
  todolistHandler();
});

function todolistHandler() {
  const value = inputEl.value;
  data.push({
    checked: false,
    content: value,
  });
  renderTodoHandler();
  inputEl.value = '';
}

function renderTodoHandler() {
  const renderMap = data.map(
    (list) =>
      `<li class="item">
        <div class="${list.checked ? 'content checked' : 'content'}">
          <input type="checkbox" class="checkbox"  ${
            list.checked ? 'checked' : ''
          }/>
          <p>${list.content}</p>
        </div>
        <button class="btn">Delete</button>
      </li>`
  );

  todolistsEl.innerHTML = renderMap.join('');
  checkedHandler();
  deleteHandler();
}

function checkedHandler() {
  const checkboxAllEl = document.querySelectorAll('.checkbox');
  checkboxAllEl.forEach((checkboxEl, index) => {
    checkboxEl.addEventListener('click', (e) => {
      e.target.parentNode.classList.toggle('checked');
      data[index].checked = e.target.checked;
    });
  });
}

function deleteHandler() {
  const btnAllEl = document.querySelectorAll('.btn');
  btnAllEl.forEach((btnEl, index) => {
    btnEl.addEventListener('click', () => {
      data.splice(index, 1);
      renderTodoHandler();
    });
  });
}
