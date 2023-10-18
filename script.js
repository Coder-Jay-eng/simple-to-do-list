function addTaskOnEnter(event) {
	if (event.key === 'Enter') {
		addTask();
	}
}

function addTask() {
	const taskInput = document.getElementById('task');
	const taskText = taskInput.value;

	if (taskText === '') {
		return;
	}

	const taskList = document.getElementById('taskList');
	const listItem = document.createElement('li');
	listItem.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <span>${taskText}</span>
        <button onclick="removeTask(this)">X</button>
    `;

	taskList.appendChild(listItem);
	taskInput.value = '';
}

function toggleTask(checkbox) {
	const taskText = checkbox.nextElementSibling;
	if (checkbox.checked) {
		taskText.style.textDecoration = 'line-through';
	} else {
		taskText.style.textDecoration = 'none';
	}
}

function removeTask(button) {
	const listItem = button.parentElement;
	listItem.remove();
}
