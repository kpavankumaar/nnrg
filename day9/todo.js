// when user clicks on addbutton 
// when user clicks on addbutton 
	// create div -> inputcheckbox, inputtypetext, label, editbutton,deletebutton

// when user clicks on editbutton , 
	// show input type text ,and hide lable element 
	// and copy the label value into the input type text

// when user clicks on deletebutton 
	// remove complete Div element
// when user check or uncheck the inputcheckbox
	// move parentDiv element from completeSection to incompleteSection
	// or move parentDiv element fomr incompletesection to complete section 
var addButton = document.getElementsByTagName('button')[0];
var enterTask = document.getElementsByName('AddTask')[0];
var toDoList = document.getElementById('todolist');
var completedList = document.getElementById('completedlist');

addButton.onclick = function(){
	var parentDivForTask = document.createElement('div');
	var checkBox = document.createElement('input');
	var inputTypeText = document.createElement('input');
	var taskLabel = document.createElement('label');
	var editButton = document.createElement('button');
	var deleteButton = document.createElement('button');
	var flag = true;
	checkBox.setAttribute('type','checkbox');
	inputTypeText.setAttribute('type','text');
	editButton.innerText = 'Edit/Save';
	deleteButton.innerText = 'Delete';
	taskLabel.innerText = enterTask.value;

	parentDivForTask.appendChild(checkBox);
	parentDivForTask.appendChild(inputTypeText);
	parentDivForTask.appendChild(taskLabel);
	parentDivForTask.appendChild(editButton);
	parentDivForTask.appendChild(deleteButton);


	toDoList.appendChild(parentDivForTask);
	checkBox.onchange = function(){
		var checkBoxParentEl = this.parentNode;
		var parentForNewTaskAdded = checkBoxParentEl.parentNode;
		console.log(parentForNewTaskAdded.id);

		if(parentForNewTaskAdded.id === 'todolist'){
				completedList.appendChild(checkBoxParentEl);
			}else{
				toDoList.appendChild(checkBoxParentEl);
			}

	}
	
	editButton.onclick = function(){
		// alert('you clicked on edit button ');
		
		console.log(this);
		var divEl = this.parentNode;
		var inputText = divEl.querySelector('input[type=text]');
		var label = divEl.querySelector('label');
		if(flag){
			inputText.style.display = 'inline';
			label.style.display = 'none';
			inputText.value = label.innerText;
			flag =false
		}else{
			inputText.style.display = 'none';
			label.style.display = 'inline';
			label.innerText = inputText.value;
			flag = true;
		}
	}
	
}






















