export function showDialogDayEvents(section){
    const eventDay = JSON.parse(localStorage.getItem("calendar_events"));
    const month = document.getElementById("currentMonth").textContent;
    const year = document.getElementById("currentYear").textContent;
    const main = document.getElementById("main__container");
    const buttonCloseDialog = document.createElement("button");
    const dialog = document.createElement("dialog"); 
    dialog.setAttribute("class", "main__dialog--Event");

    if(eventDay != null){
        //Check if the div has events to show
        let divDay = document.getElementById(section.textContent);//number of day
        let divDayValue = divDay.getAttribute("id");
        if(parseInt(divDay)<10){
            divDay = "0"+divDay;
        }
        const eventsDay = divDay.querySelectorAll(".section__span--span");
        if(eventsDay.length != 0){//Exists events in the day
            //run in localStorage to get the vents of the day
            Array.from(eventDay).forEach(element => {
                let dayEvent = parseInt(element.startDate.date.split("-")[2]);
                let monthEvent = element.startDate.date.split("-")[1];
                let yearEvent = element.startDate.date.split("-")[0];
                if(dayEvent == divDayValue && monthEvent == obtainMonth(month) && year == yearEvent){
                    const article = document.createElement("article");
                    article.setAttribute("class", "aside__article--Event");
                    const pTitle = document.createElement("p");
                    const pTime = document.createElement("p");
                    const pDescription = document.createElement("p");
                    const pTypeEvent = document.createElement("p");
                    pTitle.textContent = element.title;
                    pTime.textContent = element.startDate.time;
                    pDescription.textContent = element.description;
                    pTypeEvent.textContent = element.typeEvent;
                    article.appendChild(pTitle);
                    article.appendChild(pTime);
                    article.appendChild(pDescription);
                    article.appendChild(pTypeEvent);     
                    buttonCloseDialog.setAttribute("id", "buttonCloseDialog"); 
                    buttonCloseDialog.textContent="X";
                    dialog.prepend(buttonCloseDialog);
                    dialog.appendChild(article);
                    dialog.setAttribute("open", "");
                    main.appendChild(dialog);
                }
            });
        }else{
            let message = document.createElement("p");
            message.textContent = "No events to show";
            dialog.appendChild(message);    
            buttonCloseDialog.setAttribute("id", "buttonCloseDialog"); 
            buttonCloseDialog.textContent="X";
            dialog.setAttribute("open", "");
            dialog.prepend(buttonCloseDialog);
            main.appendChild(dialog);
        }
    }else{
        //Open dialog with "no events to show" message
    }
    buttonCloseDialog.addEventListener("click", function(){
        dialog.removeAttribute("open");
        // getEventData();
        main.removeChild(dialog);
    })
   
}

function obtainMonth(actualMonth){
    let newMonth = new Date().getMonth();
    switch(actualMonth){
        case "January":
            actualMonth = "01";
            break;
        case "Februyary":
            actualMonth = "02";
            break;
        case "March":
            actualMonth = "03";
            break;
        case "April":
            actualMonth = "04";
            break;            
        case "May":
            actualMonth = "05";
            break;
        case "June":
            actualMonth = "06";
            break;
        case "July":
            actualMonth = "07";
            break;
        case "August":
            actualMonth = "08";
            break;
        case "September":
            actualMonth = "09";
            break;
        case "October":
            actualMonth = "10";
            break;
        case "November":
            actualMonth = "11";
            break;
        case "December":
            actualMonth = "12";
            break;
    }
    return actualMonth;
}
