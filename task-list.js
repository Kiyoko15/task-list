 let tasks = []

function addTasks(){
    const inputTask = document.getElementById('inputTask')
    let task = inputTask.value.trim()

    const message = document.getElementById('message')

    if (task == ''){
        const warnningColor = 'red'
        let messageErro = 'Type a task to add in your list.'
        message.textContent = messageErro
        message.style.color = warnningColor
    }else{
        const sussessColor = 'green'
        let messageSuccess = 'Task added successfully!'
        message.textContent = messageSuccess
        message.style.color = sussessColor
        tasks.push(task)
        renderizarTasks()

    }
    inputTask.value = ''
}

function renderizarTasks() {
    const tasksList = document.getElementById('tasksList')
    tasksList.innerHTML = ""

    let i = 0
    for (i; i < tasks.length; i++){
        let newTasks = document.createElement('li')
        newTasks.textContent = tasks[i]
        
        let removeButton = document.createElement('button')
        removeButton.className = 'remove'
        removeButton.textContent = 'Remove'
        removeButton.onclick = () => removeTask(i)//o 'i' está no escopo global

        let editButton = document.createElement('button')
        editButton.className = 'edit'
        editButton.textContent = 'Edit'
        editButton.onclick = () => editTask(i)
        
        newTasks.appendChild(removeButton)
        newTasks.appendChild(editButton)
        tasksList.appendChild(newTasks)
    }
}

function removeTask(i) {
    tasks.splice(i, 1)
    renderizarTasks()
}   

function editTask(i) {
    let editedTask = prompt('Edit task: ')
if (skedTask.trim() !== '') {
        tasks[i] = editedTask
        renderizarTasks()
    }
}

function cleanList() {
    tasks.length = 0
    renderizarTasks()
    const menssage = document.getElementById('menssage')
    menssage.textContent = "Successfully cleared task list!"
}

