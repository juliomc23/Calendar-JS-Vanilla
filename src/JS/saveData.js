let titleEvent = document.getElementById("title-event");
let startDate = document.getElementById("start-date");
let timeRemindEvent = document.getElementById("time");
let description = document.getElementById("textarea-description");
let typeEvent = document.getElementById("Meeting");

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