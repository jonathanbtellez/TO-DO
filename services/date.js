export const uniqueDates = (task) =>{
    const unique = [];

    task.forEach( task => {
        if(!unique.includes(task.dateFormat)){unique.push(task.dateFormat)};
    });
    return unique;
}

export const orderDate = (dates) => {
    return dates.sort((a,b) =>{
        const firstDate = moment(a, "DD/MM/YYYY");
        const SecondDate = moment(b, "DD/MM/YYYY");
        return firstDate - SecondDate;
    });
}