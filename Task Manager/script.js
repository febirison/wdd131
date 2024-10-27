document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        
        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => toggleComplete(taskItem));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => deleteTask(taskItem));
        
        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);
        
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskActions);
        
        taskList.appendChild(taskItem);
    }

    function toggleComplete(taskItem) {
        taskItem.classList.toggle('completed');
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});