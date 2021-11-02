var mexicoBtn = document.getElementById("mexico").addEventListener("click", function(){

    console.log("mexico clicked")
    fetch("https://public-holiday.p.rapidapi.com/2022/MX", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "public-holiday.p.rapidapi.com",
            "x-rapidapi-key": "d35870a259mshb2f120193b48082p1e7145jsnb6dc59be0daa"
        }
    })
        .then(response => {
        {response.json()
        .then(function(data) {
        console.log(data)
        ///start
        var createCol = function(){

        var holidayListEl = document.querySelector(".holiday-list")
        
        
        holidayListEl.innerHTML+=`

            <li><span class="local-name"></span> </li>`
        
        
        
        
        var localNameEl = document.querySelector('.local-name')
        localNameEl.textContent = data[1].localName
        console.log(data.length)
        
        
        
        
        }
        createCol()





        ////end
        });
        }
    })

})