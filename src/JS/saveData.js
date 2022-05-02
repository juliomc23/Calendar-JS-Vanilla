let titleEvent = document.getElementById("title-event");
let startDate = document.getElementById("start-date");
let timeRemindEvent = document.getElementById("time");
let description = document.getElementById("textarea-description");
let typeEvent = document.getElementById("Meeting");
let asideEvents = document.getElementById("aside-events");

let arrData = [];

if (localStorage.length !== 0) {
  arrData = JSON.parse(localStorage.getItem("calendar_events"));
}

function saveData() {
  let timeSplit = startDate.value.split("T");
  let objData = {
    title: titleEvent.value,
    startDate: {
      time: timeSplit[1],
      date: timeSplit[0],
    },
    timeRemindEvent: timeRemindEvent.value,
    description: description.value,
    typeEvent: typeEvent.value
  };
  arrData.push(objData);
  localStorage.setItem("calendar_events", JSON.stringify(arrData));
  getEventData();
}

function getEventData() {
  let events = JSON.parse(localStorage.getItem("calendar_events"));
  let days = document.querySelector(".section__div--currentDay");
  const date = new Date();

console.log(arrData)
if(arrData != null){
  const found = arrData.find(element => element.date == date.getDate());
    console.log(found)
}


  if (localStorage.getItem("calendar_events") != null && (days.textContent ==  date.getDate())) {
    events.forEach((element) => {
      let eventArticle = document.createElement("article");
      let eventTitle = element.title;
      let eventDate = element.startDate.date;
      let eventTime = element.startDate.time;
      let eventDescription = element.description;
      let typeEvent = element.typeEvent;

      let i = 0;

      while (i < 5) {
        let eventInfo = document.createElement("p");
        switch (i) {
          case 0:
            eventInfo.setAttribute("id", "title-aside");
            eventArticle.appendChild(eventInfo);
            break;
          case 1:
            eventInfo.setAttribute("id", "start-date-aside");
            eventArticle.appendChild(eventInfo);

            break;
          case 2:
            eventInfo.setAttribute("id", "start-time-aside");
            eventArticle.appendChild(eventInfo);

            break;
          case 3:
            eventInfo.setAttribute("id", "description-aside");
            eventArticle.appendChild(eventInfo);

            break;
          case 4:
            eventInfo.setAttribute("id", "type-event-aside");
            eventArticle.appendChild(eventInfo);

            break;
        }
        i++;
      }
      asideEvents.appendChild(eventArticle);
      console.log(element);
    });
  }else{
    let eventInfo = document.createElement("p");  
    eventInfo.textContent = "No hay Eventos";
    asideEvents.appendChild(eventInfo);
  }
}

function clearData() {
  titleEvent.value = "";
  startDate.value = "";
  timeRemindEvent.value = "";
  description.value = "";
  typeEvent.value = "";
}

export { saveData, clearData, getEventData };
