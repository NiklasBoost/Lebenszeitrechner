const unbornSayings = [
  "Oops! Sie sind so weit in der Zukunft, dass wir noch nicht einmal fliegende Autos haben!",
  "Tut mir leid, aber das Geburtsdatum ist in einer fernen Galaxie!",
  "Wow, Sie sind aus der Zukunft? Gibt es dort schon Zeitmaschinen?",
  "Ihr Geburtsdatum ist so zukünftig, es hat bereits einen eigenen Fanclub!",
  "Sind Sie sicher, dass Sie nicht versehentlich ein Datum aus einem Science-Fiction-Fil gewählt haben?",
  "Herzlichen Glückwunsch! Sie sind der erste Mensch, der uns aus der Zukunft besucht!",
  "Die gute Nachricht: IN der Zukunft gibt es immer noch Pizza. Die schlechte Nachricht: Sie existieren noch nicht, um sie zu genießen.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass er bereits in den Geschichtsbüchern steht - in der Zukunft!",
  "Wenn Ihr Geburtsdatum ein Buch wäre, würde es definitiv Science-Fiction des Jahres sein!",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass sogar Roboter nostalgisch werden, wenn sie daran denken.",
  "In der Zukunft erzählen die Menschen Geschichten über Ihr Geburtsdatum und wundern sich, wie es wohl war, in dieser Zeit zu leben.",
  "Sind Sie sicher, dass Sie nicht versehentlich die Tasten auf Ihrer Zeitmaschine verwechselt haben?",
  "Ihr Geburtsdatum ist der Schlüssel zur Lösung aller Rätsel des Universums... in der Zukunft.",
  "Die Zeitreiseabteilung ist aufgeregt, Sie hier zu haben. Leider ist sie noch in der Entwicklung.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass selbst Aliens darauf wetten, wann es sein wird.",
  "Wir sind gespannt, was Sie uns aus der Zukunft berichten können. Wurden endlich Katzen die Weltherrschaft übernehmen?",
  "Ihr Geburtsdatum ist so zukünftig, dass es bereits ein Passwort für die Zukunft ist.",
  "Herzlichen Glückwunsch! Sie sind der Zeitreisende des Tages. Bitte kommen Sie zur Zeitreisekontrolle.",
  "Ihr Geburtsdatum ist ein echtes Mysterium. Selbst die Zeitreisenden können es nicht entschlüsseln.",
  "In der Zukunft ist Ihr Geburtsdatum ein Feiertag. Die Menschen feiern mit holografischen Kuchen.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass selbst die Dinosaurier es nicht vorhersehen konnten.",
  "Sind Sie sicher, dass Sie nicht aus der Zukunft kommen, um Ihr eigenes Geburtsdatum zu feiern?",
  "Ihr Geburtsdatum ist wie ein Diamant - selten, kostbar und extrem weit in der Zukunft.",
  "Wenn die Zeitmaschine jemals fertig ist, wissen wir jetzt schon, wann Ihr Geburtstagsfest steigt!",
  "Ihr Geburtsdatum ist so zukünftig, dass es bereits in der Zeitung von übermorgen steht.",
  "Wir haben einen Platz für Ihr Geburtsdatum in unserem Museum für zukünftige Kuriositäten reserviert.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass selbst die Technologie noch nicht bereit dafür ist.",
  "Wenn es jemals eine Zeit gibt, in der Ihr Geburtsdatum gefeiert wird, dann ist es definitiv die Zukunft.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass die Wissenschaft darüber rätselt, wie es überhaupt möglich ist.",
  "In der Zukunft ist Ihr Geburtsdatum ein Geheimnis, das niemand entschlüsseln kann.",
  "Sind Sie sicher, dass Ihr Geburtsdatum nicht der Startpunkt für die nächste Zeitreise ist?",
  "Ihr Geburtsdatum ist wie ein legendäres Artefakt aus der Zukunft, das noch entdeckt werden muss.",
  "Die Nachricht aus der Zukunft: Ihr Geburtsdatum wird legendär sein!",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass die Menschen noch über die Bedeutung von 'heute' debattieren.",
  "Die Zeitreisenden diskutieren immer noch, ob Ihr Geburtsdatum real oder nur eine Legende ist.",
  "Ihr Geburtsdatum ist so zukünftig, dass es in der Chronik der Zukunft eine eigene Zeile hat.",
  "Wenn Ihr Geburtsdatum ein Film wäre, würde er sicher einen Oscar in der Kategorie 'Fernste Zukunft' gewinnen.",
  "In der Zukunft wird Ihr Geburtsdatum als Meilenstein in der Zeitreisegeschichte gefeiert.",
  "Sind Sie sicher, dass Ihr Geburtsdatum nicht das Passwort zur Kontrolle der Zeitmaschinen ist?",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass es bereits auf anderen Planeten bekannt ist.",
  "Die Zeitreisenden der Zukunft werden sich fragen, wie es wohl war, in Ihrer Zeit zu leben.",
  "Ihr Geburtsdatum ist so zukünftig, dass es bereits auf der nächsten Stufe der Evolutionsleiter steht.",
  "Herzlichen Glückwunsch! Sie sind der Gewinner der 'Zeitreisenden des Jahrhunderts'-Auszeichnung.",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass es in der Geschichte der Menschheit noch nicht vorkommt.",
  "Ihr Geburtsdatum ist der Schlüssel zur Enthüllung der Geheimnisse des Universums... in der Zukunft.",
  "Die Zeitreiseagentur freut sich auf Ihren Besuch in der Zukunft. Leider sind die Termine noch ausgebucht.",
  "Ihr Geburtsdatum ist so zukünftig, dass es bereits als Währung in der Zukunft verwendet wird.",
  "Wir sind gespannt, was Sie uns aus der Zukunft berichten können. Gibt es dort immer noch Kaffee?",
  "Ihr Geburtsdatum ist so weit in der Zukunft, dass selbst die Zeit selbst darauf gewartet hat.",
  "Ihr Geburtsdatum ist wie ein ungelöstes Rätsel aus der Zukunft, das noch erforscht werden muss.",
];
let unbornSayingsIndex = 0;
let runningTimeInterval = null;

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

    return timeDiffInSeconds;
    
  },
  displayPastTime: (func) => {
    const timeDiff = pastTime.diffToNowTime(saveUserInputs());
    console.log(timeDiff);
    
    if (timeDiff < 0) {
      displayMessage('.message', unbornSayings[unbornSayingsIndex]);
      clearInterval(runningTimeInterval);

      if(unbornSayingsIndex < unbornSayings.length) {
        unbornSayingsIndex++;
        console.log('if ' + unbornSayingsIndex);
      } else {
        unbornSayingsIndex = 0;
        console.log('else ' + unbornSayingsIndex);
        console.log(unbornSayings.length);
      }
      // console.log(unbornSayingsIndex);
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
    runningTimeInterval = setInterval(() => { 
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

function displayMessage(cont, message) {
  const messageContainer = document.querySelector(cont);
  messageContainer.innerHTML = message;
}