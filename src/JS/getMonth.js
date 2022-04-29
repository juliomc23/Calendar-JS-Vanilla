const getMonth = ()=>{
    const gridMonth = document.getElementById('section__div--gridMonth');
    const currentMonth = document.getElementById('currentMonth');
    
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
    
    const date = new Date();
    
    currentMonth.textContent = `${month[date.getMonth()]}`;
    
    const initialDay = new Date(date.getFullYear(), 3, 1).getDay();
    
    
    const diasMeses = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    
    
    
    for(let i = 1; i <= diasMeses+initialDay; i++){
        //Creamos elemento section para el dia
        const sectionDay = document.createElement('section');
        //Creamos div para meter el dia
        const divDay = document.createElement('div');
        //Crear button para crear eventos
        const buttonEvent = document.createElement('button');
        buttonEvent.textContent = "+";
    
        sectionDay.classList.add('div__section--days');
        divDay.classList.add('section__div--singleDay');
    
        
    
        if(i >= initialDay){
            sectionDay.setAttribute("id", `${i-initialDay+1}`);
            divDay.textContent = i-initialDay+1;
    
            sectionDay.appendChild(divDay);
            sectionDay.appendChild(buttonEvent);
    
            
            if( divDay.textContent == date.getDate()){
                divDay.classList.add('section__div--currentDay');
            }

            if(sectionDay.getAttribute("id") === diasMeses.toString()){
                i = diasMeses+initialDay
            }
        }
    
        
        
        gridMonth.appendChild(sectionDay);
    
    }
}

export{getMonth}