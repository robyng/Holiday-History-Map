
fetch('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=f82224f6-9d92-48c9-9d36-426be23071ff')
.then(function(res){return res.json()})
//.then(function(data){console.log(data)})
//.catch(function(err){console.log(err)})
.then(function(weatherResponse){
    var cityNameEl = document.querySelector(".city-name");
    cityNameEl.textContent = weatherResponse.name;

})