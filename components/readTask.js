import dateElement from "./dateElement.js";
import {uniqueDates,orderDate} from "../services/date.js";
import { createTask } from "./addTask.js";

export const displayTask = ()=>{
    const list = document.querySelector("[data-list]");
    
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const dates = uniqueDates(taskList);
    orderDate(dates);
    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if(diff==0){
                list.appendChild(createTask(task));
            }
        });
    });
}

