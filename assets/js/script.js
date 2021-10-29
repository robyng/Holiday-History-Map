var getMexico = function() {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2022/MX");
    console.log('got mexico')
  };
  getMexico();

// var localHolidayEl = document.querySelector(".local-holiday");
// localHolidayEl.textContent = localName;