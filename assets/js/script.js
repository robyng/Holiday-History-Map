
var mexicoBtn = document.getElementById("mexico").addEventListener("click", function(){
//mexico new years fetch
    fetch("https://youtube-v31.p.rapidapi.com/search?q=mexico%20new%20years&part=snippet%2Cid&regionCode=US&maxResults=4&order=relevance", {
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



// end mexicao new years fetch

// start creat column list for video content
var createVidCol = function(){

    var videoListEl = document.querySelector(".video-list")
       
    videoListEl.innerHTML+=`

        <li><span class="video"></span> </li>
        ` 
    var videoListEl = document.querySelector('.video')
    videoListEl.textContent = data.items[0].snippet.title
    
    var iframeEl = document.querySelector('.iframe')
    iframeEl.innerHTML+= `<iframe class="resp-iframe" src="https://www.youtube.com/embed/jK-YFggBdGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}
createVidCol()
    
    })   
    
    }
})
   

// start public holiday fetch
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
        localNameEl.textContent = data[0].localName
        console.log(data.length)
        
        
        
        
        }
        createCol()





        ////end
        });
        }
    })

})
