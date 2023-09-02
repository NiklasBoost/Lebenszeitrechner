const unbornSayings = [
  "Oops! Sie sind so weit in der Zukunft, dass wir noch nicht einmal fliegende Autos haben",
  "Tut mir leid, aber das Geburtsdatum ist in einer fernen Galaxie",
  "Wow, Sie sind aus der Zukunft? Gibt es dort schon Zeitmaschinen",
  "Ihr Geburtsdatum ist so zukünftig, es hat bereits einen eigenen Fanclub",
  "Sind Sie sicher, dass Sie nicht versehentlich ein Datum aus einem Science-Fiction-Fil gewählt haben?",
  "Herzlichen Glückwunsch! Sie sind der erste Mensch, der uns aus der Zukunft besucht",
  "Die gute Nachricht: IN der Zukunft gibt es immer noch Pizza. Die schlechte Nachricht: Sie existieren noch nicht, um sie zu genießen.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass er bereits in den Geschichtsbüchern steht - in der Zukunft"
];

let pastTime = {
  nowTime: 0,
  diffToNowTime: (func) => {
    nowTime = new Date();
    const year = nowTime.getFullYear();
    const month = nowTime.getMonth() + 1;
    const day = nowTime.getDate();
    const hour = nowTime.getHours();
    const minute = nowTime.getMinutes();
    const seconds = nowTime.getSeconds();

    const nowTimeInSeconds = seconds + (minute * 60) + (hour * 60 * 60) + (day * 60 * 60 *24) + (month * 60 * 60 * 24 * 30) + (year * 60 * 60 * 24 * 30 * 12);
   
    const timeDiffInSeconds = nowTimeInSeconds - func;

    if (timeDiffInSeconds < 0) {
      console.log(unbornSayings[2]);
    }
    
    return timeDiffInSeconds;
    

  },
  displayPastTime: (func) => {
    const timeDiff = pastTime.diffToNowTime(saveUserInputs());
    console.log(timeDiff);
    
    if (timeDiff < 0) {
      console.log('DocAusgabe');
      return;
    } else {
      const seconds = document.querySelector('.seconds-div');
      const minutes = document.querySelector('.minutes-div');
      const hours = document.querySelector('.hours-div');
      const days = document.querySelector('.days-div');
      const weeks = document.querySelector('.weeks-div');
      const month = document.querySelector('.month-div');
      const years = document.querySelector('.years-div');
      const decades = document.querySelector('.decades-div');
    
      
      seconds.innerHTML = func + ' seconds';
      minutes.innerHTML = Math.round(func / 60) + ' minutes';
      hours.innerHTML = Math.round(func / 60 / 60) + ' hours';
      days.innerHTML = Math.round(func / 60 / 60 / 24) + ' days';
      weeks.innerHTML = Math.round(func / 60 / 60 / 24 / 7) + ' weeks';
      month.innerHTML = Math.round(func / 60 / 60 / 24 / 30) + ' month';
      years.innerHTML = Math.round(func / 60 / 60 / 24 / 365) + ' years';
      decades.innerHTML = Math.round(func / 60 / 60 /24 /365 / 10) + ' decades';    
    }

  }
}

document.querySelector('.see-past-time-button-js')
.addEventListener('click', () => {
  startPastLifeFunc(true);
});

function startPastLifeFunc(boolean) {
  if(event.key === 'Enter' || boolean) {
    setInterval(() => { 
      pastTime.displayPastTime(pastTime.diffToNowTime(saveUserInputs()));
    }, 1000);
  }
}

function saveUserInputs() {
  const birthDateInput = document.querySelector('.birth-date-js');
  const birthTimeInput = document.querySelector('.birth-time-js');
  
  userBirthDate = new Date(birthDateInput.value);
  userBirthTime = birthTimeInput.value;
  const [inputHour, inputMinute] = userBirthTime.split(":");
  
  const year = userBirthDate.getFullYear();
  const month = userBirthDate.getMonth() + 1;
  const day = userBirthDate.getDate();
  const hour = Number(inputHour);
  const minute = Number(inputMinute);

  const birthTimeInSeconds = (minute * 60) + (hour * 60 * 60) + (day * 60 * 60 * 24) + (month * 60 * 60 * 24 * 30) + (year * 60 * 60 * 24 * 30 * 12);

  return birthTimeInSeconds;
}
