import{ addTask } from "./components/addTask.js";
import{ displayTask } from "./components/readTask.js";
(() =>{

const btnForm = document.querySelector("[data-form-btn]");
btnForm.addEventListener("click",addTask);
displayTask();
})();