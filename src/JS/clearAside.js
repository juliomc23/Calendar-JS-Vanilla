import {getEventData} from "./saveData.js";
function clearAsideEvent(e){
    let control = 0;
    let localEvent = JSON.parse(localStorage.getItem("calendar_events"));

    //coger el padre del button e pasado por parametro y obtener  el hijo con clase start-time-aside
    const parent = e.parentNode;
    let i = 0;
    const articleAside = parent.getAttribute("id");
    const timeEventStart = parent.querySelectorAll(".start-time-aside");
    const eventArticletoDelete = timeEventStart.item(0);
    const divSpanDay = document.querySelectorAll(".section__div--span");
    divSpanDay.forEach(node=>{
        let nodes = node.querySelectorAll(".section__span--span");
        nodes.forEach(span =>{
            if(span.textContent.split("-")[1] == eventArticletoDelete.textContent && control == 0){
                node.removeChild(span);
                localEvent.splice(i, 1);
                control = 1;
            }
            i++;
        });
    })
    localStorage.setItem("calendar_events", JSON.stringify(localEvent));
    e.removeEventListener("click", function(){
        clearAsideEvent(e);
    });

 

    getEventData();
}

export {clearAsideEvent};