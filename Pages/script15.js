// seclectors
var todoinput  = document.querySelector(".todo-input");
var btn = document.querySelector('button');
var todoList = document/querySelector('.todo-list')



//event hander
btn.onclick = create;
todoList.onclick = deletecheck;

function create(e){
    e.preventDefault();
    var newDiv = document.createElement('div');
    newDiv.classList.add('todo')
    var newLi = document.createElement('li')
    newLi.classList.add('todo-item')
    newLi.innerHTML = todoinput.value;
    newDiv.appendChild(newLi);
    var CheckBtn = document.createElement('button');
        CheckBtn.classList.add('complete')
        CheckBtn.innerHTML = "<i class = 'fa fa-check'></i>";
        newDiv.appendChild(CheckBtn);
        +

    todoList.appendChild(newDiv);
    todoinput.value = ""

}