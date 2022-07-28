import checkComplete from "./checkcomplete.js";
import removeItem from "./removeItem.js";
import { displayTask } from "./readTask.js";

export const addTask = (evento)=>{
    evento.preventDefault();
    
    const list = document.querySelector("[data-list]");
    const inputForm = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    
    const value = inputForm.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    
    if(value == "" || date == ""){
        return
    }

    inputForm.value = "";
    calendar.value = "";

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4(),
    }

    list.innerHTML="";

    const taskList = JSON.parse(localStorage.getItem("task"))||[];
    taskList.push(taskObj);
    localStorage.setItem("task",JSON.stringify(taskList));
    
    displayTask();
}

export const createTask = ({value,dateFormat,complete,id})=>{ 
    const task = document.createElement("li");   
    task.classList.add("card");
    
    const taskContent = document.createElement("div")
    const check = checkComplete(id);
   
    if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }
    
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(removeItem(id));
    return task;
}
