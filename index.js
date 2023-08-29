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
