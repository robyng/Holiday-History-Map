var mexicoBtn = document.getElementById("mexico").addEventListener("click", function(){

    console.log("mexico clicked")
    fetch('https://date.nager.at/api/v3/publicholidays/2022/MX').then(function(response) {
        response.json().then(function(data) {
        console.log(data)

        })
    })


// fetch('https://date.nager.at/api/v3/publicholidays/2022/MX')
// .then(function(res){return res.json()})
// .then(function(data){
//     console.log(data)
//     // var holidayEl = document.querySelector(".country-name");
//     //  weatherResponse.name;

// })
})
    




