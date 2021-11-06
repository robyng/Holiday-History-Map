var countryList = document.querySelector(".country-list").addEventListener("click", function(event){

    // countryCodeId is MX or CA or US, the button ids for each country
    countryCodeId = event.target.id
    var holidayListEl = document.querySelector(".holiday-list")
    
    //full country name to pass to youtube search query and others
    var countryFullName = event.target.value
    console.log(countryFullName)
    
    var countryNameSpan = document.querySelector(".country-name")
    countryNameSpan.textContent = countryFullName + " Public Holidays"

    //clear holiday list of previous content when clicked again
    holidayListEl.textContent = " "

    // start public holiday fetch plus countryCodeId 
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

        /// start createCol() for Holiday List column
        var createCol = function(){

            for (i = 0; i < data.length; i++) {
                
                var holidayListEl = document.querySelector(".holiday-list")
                // always have vars above where you use them        
                var youtubeEnName = data[i].name

                holidayListEl.innerHTML+=`
                        <div class="holiday-info-${i}">
                        <li><span class="local-name-${i}"></span> </li>
                        <li><span class="en-name-${i}"></span></li>
                        <li><span class="holiday-date-${i}"></span></li>
                        <button id="btn-name-${i}" value="${countryFullName}" name="${youtubeEnName}" class="vid-btn-${i}">See Videos</button>
                        <br />
                        <br />
                    </div>
                    `                
                var localNameEl = document.querySelector('.local-name-' + i)
                localNameEl.textContent = data[i].localName
                
                var enName = document.querySelector('.en-name-' + i)
                enName.textContent = data[i].name


                var holidayDate = document.querySelector('.holiday-date-' + i)
                holidayDate.textContent = data[i].date
                
            }

                    // start onclick for holidaybtn div

                    var holidayBtnWrapper = document.querySelector("#holiday-btn-wrapper").addEventListener("click", function(event){
                        holidayBtnVal = event.target.value

                        var btnName = event.target.name


                        
                        console.log(holidayBtnVal + " is var holidayBtnVal")
                        console.log(btnName + " is var btnName")

                        //fetch a country's holiday youtube videos
                        fetch("https://youtube-v31.p.rapidapi.com/search?q=" + btnName + "%20" + holidayBtnVal + "&part=snippet%2Cid&regionCode=US&maxResults=4&order=relevance", {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
                                "x-rapidapi-key": "d35870a259mshb2f120193b48082p1e7145jsnb6dc59be0daa"
                                        }
                                })
                                .then(response => {
                                    {response.json()
                                    .then(function(data) {
                                    console.log(data)
                    
                    
                    
                                // end fetch
        
                                // start create column list for video content
                                var createVidCol = function(){
                                
                                // add localstorage
                                localStorage.setItem('Country', holidayBtnVal)
                                localStorage.setItem('Holiday', btnName) 
                                //localStorage.setItem("Youtube Search", "")   

                                // add text to title area above video list    
                                var aboutHolidayTitle = document.querySelector(".about-this-holiday")
                                aboutHolidayTitle.textContent = "Videos About " + btnName     
        
                                var videoListEl = document.querySelector(".video-list")
                                
                                videoListEl.innerHTML+=`
        
                                    <li><span class="video"></span> </li>
                                    ` 
                                var videoListEl = document.querySelector('.video')
                                videoListEl.textContent = data.items[0].snippet.title
        
                                var videoId = data.items[0].id.videoId
                                
                                var iframeEl = document.querySelector('.iframe')
                                iframeEl.innerHTML+= `<iframe class="resp-iframe" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                            }
                            createVidCol()
                                
                    })   
                    
                }
            })
        
                            
                            
                        })
        
        }
        createCol()





        ////end
        });
        }
    })


    

})