var countryList = document.querySelector(".country-list").addEventListener("click", function(event){
    countryCodeId = event.target.id
    var holidayListEl = document.querySelector(".holiday-list")
    holidayListEl.textContent = " "


    // start public holiday fetch
    
    fetch("https://public-holiday.p.rapidapi.com/2022/" + countryCodeId, {
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

            for (i = 0; i < data.length; i++) {
                


                var holidayListEl = document.querySelector(".holiday-list")
        
        
                holidayListEl.innerHTML+=`
                        <div class="holiday-info-${i}">
                        <li><span class="local-name-${i}"></span> </li>
                        <li><span class="en-name-${i}"></span></li>
                        <li><span class="holiday-date-${i}"></span></li>
                        <button id="btn-name-${i}" name="${youtubeEnName}" class="vid-btn-${i}">See Videos</button>
                        <br />
                        <br />
                    </div>
                    `
                    
                    
                
                var localNameEl = document.querySelector('.local-name-' + i)
                localNameEl.textContent = data[i].localName
                
                var enName = document.querySelector('.en-name-' + i)
                enName.textContent = data[i].name
                var youtubeEnName = data[i].name

                var holidayDate = document.querySelector('.holiday-date-' + i)
                holidayDate.textContent = data[i].date

                // var btnIdEnName = document.querySelector('#en-name-' + i)
                // btnIdEnName.textContent = data[i].name


                
            }

                            // start onclick for holidaybtn div

                            var holidayBtnWrapper = document.querySelector("#holiday-btn-wrapper").addEventListener("click", function(event){
                                holidayBtnId = event.target.id

                                var btnName = event.target.name

                                console.log(holidayBtnId)
                                console.log(event.target.name)
            
                                
                               
                            })
        
        }
        createCol()





        ////end
        });
        }
    })


    

})





// var mexicoBtn = document.getElementById("mexico").addEventListener("click", function(){
//     //mexico new years fetch
//         fetch("https://youtube-v31.p.rapidapi.com/search?q=mexico%20new%20years&part=snippet%2Cid&regionCode=US&maxResults=4&order=relevance", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//             "x-rapidapi-key": "d35870a259mshb2f120193b48082p1e7145jsnb6dc59be0daa"
//         }
//     })
//     .then(response => {
//         {response.json()
//         .then(function(data) {
//         console.log(data)



//     // end mexico new years fetch

//     // start creat column list for video content
//     var createVidCol = function(){

//         var videoListEl = document.querySelector(".video-list")
        
//         videoListEl.innerHTML+=`

//             <li><span class="video"></span> </li>
//             ` 
//         var videoListEl = document.querySelector('.video')
//         videoListEl.textContent = data.items[0].snippet.title

//         var videoId = data.items[0].id.videoId
        
//         var iframeEl = document.querySelector('.iframe')
//         iframeEl.innerHTML+= `<iframe class="resp-iframe" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//     }
//     createVidCol()
        
//         })   
        
//         }
//     })
   



// })
