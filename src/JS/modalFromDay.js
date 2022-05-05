const form = document.getElementById("mainSectionModal");
const overlay = document.getElementById("blurModal");
const dateInput = document.getElementById("start-date")

function createEventFromDay(e){
    console.log(e);
    const startDate = document.querySelector("#start-date");
    const date = new Date();
    const day = date.toISOString();
    const day1 = day.split(':')[0];
    const min = day.split(':')[1];
    let tabindexDay = e.getAttribute("tabindex");
    let actualMonth = document.getElementById('currentMonth').textContent;
    const actualYear = document.getElementById('currentYear').textContent;
    let newDate = [];


    if(tabindexDay < 10){
        tabindexDay = "0"+tabindexDay;
    }
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
    newDate.push(actualYear, actualMonth, tabindexDay);
    let fecha = [];
    fecha.push(day1);
    fecha.push(min);
    const stringCurrentMinutes = fecha.join(':').split('T')[1].split(':')[1];
    let integerCurrentHour = parseInt(fecha.join(':').split('T')[1].split(':')[0])+2;
    if(integerCurrentHour < 10){
        integerCurrentHour = "0"+integerCurrentHour;
    }else{
        integerCurrentHour = integerCurrentHour;
    }

    const stringCurrentHour = integerCurrentHour.toString();
    startDate.value = `${newDate.join('-')}T${stringCurrentHour}:${stringCurrentMinutes}`;
    form.classList.remove("hide");
    overlay.classList.remove("hide");
    // dateInput.setAttribute("value", `${day}/${month}/${year}T00:00`)
}

export {createEventFromDay}