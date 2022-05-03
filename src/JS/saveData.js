let titleEvent = document.getElementById("title-event");
let startDate = document.getElementById("start-date");
let timeRemindEvent = document.getElementById("time");
let description = document.getElementById("textarea-description");
let typeEvent = document.getElementById("Meeting");
let asideEvents = document.getElementById("aside-events");
const asidePempty = document.getElementById('aside-p-empty')
const form = document.getElementById("mainSectionModal");
const overlay = document.getElementById("blurModal");


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
    typeEvent: typeEvent.value,
  };
  arrData.push(objData);
  localStorage.setItem("calendar_events", JSON.stringify(arrData));
  
  getEventData();
  
  overlay.classList.add('hide');
  
  form.classList.add('hide');

  
}

/*function getDay(){
  let dayNumber;
  if(arrData.length != 0){

    arrData.find(element => {
      dayNumber = parseInt (element.startDate.date.split('-')[2])

    });
  
    return dayNumber
  }
}*/



function getEventData() {
  let events = JSON.parse(localStorage.getItem("calendar_events"));

  const date = new Date();

  if (localStorage.getItem("calendar_events") != null) {
    
    

    if(asideEvents.hasChildNodes){
      
      
      const articles = document.querySelectorAll('.aside__article--Event');
      
      articles.forEach(children =>{
        asideEvents.removeChild(children)
      })

      
    }

    // asidePempty.classList.toggle('hide');

    events.forEach((element) => {

      console.log((element))

      if(element.startDate.date.split('-')[2] == date.getDate()){
        

        console.log(element)

        let eventArticle = document.createElement("article");
        eventArticle.className = "aside__article--Event"
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
              eventInfo.textContent = eventTitle;
              eventArticle.appendChild(eventInfo);
              break;
            case 1:
              eventInfo.setAttribute("id", "start-date-aside");
              eventInfo.textContent = eventDate;
              eventArticle.appendChild(eventInfo);
              break;
            case 2:
              eventInfo.setAttribute("id", "start-time-aside");
              eventInfo.textContent = eventTime;
              eventArticle.appendChild(eventInfo);
              break;
            case 3:
              eventInfo.setAttribute("id", "description-aside");
              eventInfo.textContent = eventDescription;
              eventArticle.appendChild(eventInfo);
              break;
            case 4:
              eventInfo.setAttribute("id", "type-event-aside");
              eventInfo.textContent = typeEvent;
              eventArticle.appendChild(eventInfo);
              break;
          }
          i++;
        }
        asideEvents.appendChild(eventArticle);
      }

      
    });

    if(asideEvents.hasChildNodes){
      
      const articles = document.querySelectorAll('.aside__article--Event');

      console.log(articles.length)
      
      if(articles.length != 0){
        asidePempty.classList.add('hide')
      }else{
        asidePempty.classList.remove('hide')
      }

    }

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
