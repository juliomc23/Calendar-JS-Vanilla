import {getEventData} from "./saveData.js";
function clearAsideEvent(e){
    let control = 0;
    let localEvent = JSON.parse(localStorage.getItem("calendar_events"));

    //coger el padre del button e pasado por parametro y obtener  el hijo con clase start-time-aside
    const parent = e.parentNode;

    const divSpanDay = document.querySelector(".section__div--span");
    const spanEventDay = divSpanDay.querySelectorAll(".section__span--span");
    // const articleAside = e.parentNode;
    const articleAside = parent.getAttribute("id");//.querySelector(".aside__article--Event")
    const timeEventStart = parent.querySelectorAll(".start-time-aside");
    const eventArticletoDelete = timeEventStart.item(0);
    let i = 0;
    spanEventDay.forEach(span =>{
        if(span.textContent.split("-")[1] == eventArticletoDelete.textContent && control == 0){
            divSpanDay.removeChild(span);
            localEvent.splice(i, 1);
            control = 1;
        }
        i++;
    });
    localStorage.setItem("calendar_events", JSON.stringify(localEvent));
    e.removeEventListener("click", function(){
        clearAsideEvent(e);
    });

    console.log(articleAside);

    getEventData();
}

export {clearAsideEvent};