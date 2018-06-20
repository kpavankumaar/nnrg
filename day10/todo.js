// add btn 
	// create div , input checkbox ,input text , label, edit btn and delete btn 

// checkbox when checked 
	// move created parent div element to completed section of page	

// checkbox when unchecked 
	// move created parent div element to incomplete section of page

// edit Btn 
	// show input text and hide label
	// copy inner text from label to input text 
// save / edit btn
	// show label and hide input text 
	// also copy input text value to label element

var addBtn = document.getElementsByTagName('button')[0];
var addTask = document.getElementsByName('AddTask')[0];
var incompleteDivSection = document.getElementById('todolist');
var completeDivSection = document.getElementById('completedlist');
console.log(addBtn);

function editTask(){
	console.log(this);
}
function deleteTask(){
	console.log(this)
}


function moveTask(){
	// move parentForTask to completed section 
	
	if(this.checked){
		completeDivSection.appendChild(this.parentNode);
	}else{
		incompleteDivSection.appendChild(this.parentNode);	
	}
	
}
function createTask(){
	console.log('createTask');
	var parentForTask = document.createElement('div');
	var inputCheckBox = document.createElement('input');
	var inputText = document.createElement('input');
	var label = document.createElement('label');
	var editBtn = document.createElement('button');
	var deleteBtn = document.createElement('button');
	var child = [inputCheckBox,inputText,label,editBtn,deleteBtn];

	inputCheckBox.setAttribute('type','checkbox');
	inputText.setAttribute('type','text');
	label.innerText = addTask.value;
	editBtn.innerText = 'Edit';
	deleteBtn.innerText = 'Delete';
	// binding 
	inputCheckBox.onchange = moveTask;
	editBtn.onclick = editTask;
	deleteBtn.onclick = deleteTask;
	for(i = 0 ; i < child.length ; i ++){
		parentForTask.appendChild(child[i])
	}
	incompleteDivSection.appendChild(parentForTask);

}

addBtn.onclick = createTask;