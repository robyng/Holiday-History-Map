// button event from weather api
var searchForm = document.querySelector("#search-form");
var inputEl = document.querySelector("#search-city");

var inputHandler = function(event) {
    event.preventDefault();
    

    var cityChoice = inputEl.value.trim();

    if (cityChoice) {
        currentForcast(cityChoice)
        forcast(cityChoice);
        // resets search form to blank
        inputEl.value = "";
    } else {
        alert("No matches. please re-enter city name")
    }

    console.log(event)

}

searchForm.addEventListener("submit", inputHandler)



// fetch
var getMexico = function() {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2022/MX");
    console.log('got mexico')
  };
  getMexico();

// var localHolidayEl = document.querySelector(".local-holiday");
// localHolidayEl.textContent = localName;

fetch('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=f82224f6-9d92-48c9-9d36-426be23071ff')
.then(function(res){return res.json()})
//.then(function(data){console.log(data)})
//.catch(function(err){console.log(err)})
.then(function(weatherResponse){
    var cityNameEl = document.querySelector(".city-name");
    cityNameEl.textContent = weatherResponse.name;

})

