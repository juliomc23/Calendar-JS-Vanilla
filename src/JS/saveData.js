let titleEvent = document.getElementById("title-event").value;
let startDate = document.getElementById("start-date").value;
let timeRemindEvent = document.getElementById("time").value;
let description = document.getElementById("textarea-description").value;
let typeEvent = document.getElementById("Meeting").value;

function saveData(){
    
}

function clearData(){
    titleEvent.value = "";
    startDate.value = "";
    timeRemindEvent.value = "";
    description.value = "";
    typeEvent.value = "";
}

export { saveData,clearData };