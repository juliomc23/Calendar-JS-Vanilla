const getMonth = (counter) => {
  const gridMonth = document.getElementById("section__div--gridMonth");
  const currentMonth = document.getElementById("currentMonth");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  let initialDay = new Date(
    date.getFullYear(),
    date.getMonth() + counter - 1
  ).getDay();
  const diasMeses = new Date(
    date.getFullYear(),
    date.getMonth() + counter,
    0
  ).getDate();

  currentMonth.textContent = `${month[date.getMonth()]}`;
  console.log(initialDay+'inicial');
    let d = 1;

  for (let i = 1; i <= diasMeses + initialDay; i++) {
      
    //Creamos elemento section para el dia
    const sectionDay = document.createElement("section");
    //Creamos div para meter el dia
    const divDay = document.createElement("div");
    //Crear button para crear eventos
    const buttonEvent = document.createElement("button");
    buttonEvent.textContent = "+";

    sectionDay.classList.add("div__section--days");
    divDay.classList.add("section__div--singleDay");
    if(initialDay == 0){
        initialDay = 7
    }
    if (i >= initialDay) {
        
      sectionDay.setAttribute("id", `${d}`);
      divDay.textContent = d;

      //darle clase e id a los botones y tab index con setattribute

      //

      sectionDay.appendChild(divDay);
      sectionDay.appendChild(buttonEvent);

      if (divDay.textContent == date.getDate()) {
        divDay.classList.add("section__div--currentDay");
      }

      if (sectionDay.getAttribute("id") === diasMeses.toString()) {
        i = diasMeses + initialDay;
      }

      d++;
    
    }
    

    gridMonth.appendChild(sectionDay);
  }

  console.log(d)
};

export { getMonth };
