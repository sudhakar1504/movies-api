const API_KEY='814973d8811d36d70b0a549dcb6963fa';
const url='https://api.themoviedb.org/3/search/movie?api_key=814973d8811d36d70b0a549dcb6963fa';
const winurl='https://api.themoviedb.org/3/search/movie?api_key=814973d8811d36d70b0a549dcb6963fa&&query=tamil';
const winurl2='https://api.themoviedb.org/3/search/movie?api_key=814973d8811d36d70b0a549dcb6963fa&&query=love';
const winurl3='https://api.themoviedb.org/3/search/movie?api_key=814973d8811d36d70b0a549dcb6963fa&&query=hollywood';
const winurl4='https://api.themoviedb.org/3/search/movie?api_key=814973d8811d36d70b0a549dcb6963fa&&query=hindi';
const imageUrl='https://image.tmdb.org/t/p/w500';

//add input and search buttons

const inputElements=document.querySelector("#inputbtn");
const searchbtn=document.querySelector("#searchbtn");
const container=document.querySelector(".upcoming-movies");
container.addEventListener("click",getcontainer);
const recent=document.querySelector(".recent-movies");
recent.addEventListener("click",getrecent);
const hollywood=document.querySelector(".hollywood-movies");
hollywood.addEventListener("click",gethollywood);
const telugu=document.querySelector(".telugu-movies");
telugu.addEventListener("click",gettelugu);
const mainElements=document.getElementById("main-movies");
const mainVideos=document.getElementById("movie-videos-details");
const movVes=document.getElementById("movies-videos");
mainElements.addEventListener("click",getvideos);
window.onload =function(){
    // add value to query url
    fetch(winurl)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data: ', data);

        let html="";
        if(data.results){
            data.results.forEach(movie =>{
                if(movie.poster_path){
                    html += `
                    <div class = "meal-item" data-id = "${movie.id}">
                     <div class = "movie-image" data-movie-id="${movie.id}">
                            <img src = "${imageUrl + movie.poster_path}" alt = "movies_poster" data-movie-id="${movie.id}">
                        </div>
                        <h3  class = "movie-title">${movie.title}</h3>
                    </div>
                `;
                }
              
            });
        }
      
        
        container.innerHTML=html;
    })
    .catch((error)=>{
        console.log('erroe: ',error);
    });
    fetch(winurl2)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data: ', data);

        let html="";
        if(data.results){
            data.results.forEach(movie =>{
                if(movie.poster_path){
                    html += `
                    <div class = "meal-item" data-id = "${movie.id}">
                        <div class = "movie-image" data-movie-id="${movie.id}">
                            <img src = "${imageUrl + movie.poster_path}" alt = "movies_poster" data-movie-id="${movie.id}">
                        </div>
                        <h3  class = "movie-title">${movie.title}</h3>
                    </div>
                `;
                }
              
            });
        }
        new Glider(document.querySelector(".recent-movies"),{
            slidesToShow:4,
        slidesToScroll: 2,
        draggable:true,
        
        });
        recent.innerHTML=html;
    })
    .catch((error)=>{
        console.log('erroe: ',error);
    });
    fetch(winurl3)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data: ', data);

        let html="";
        if(data.results){
            data.results.forEach(movie =>{
                if(movie.poster_path){
                    html += `
                    <div class = "meal-item" data-id = "${movie.id}">
                        <div class = "movie-image" data-movie-id="${movie.id}">
                            <img src = "${imageUrl + movie.poster_path}" alt = "movies_poster" data-movie-id="${movie.id}">
                        </div>
                        <h3  class = "movie-title">${movie.title}</h3>
                    </div>
                `;
                }
              
            });
        }
        new Glider(document.getElementById("hollywood"),{
            slidesToShow:4,
        slidesToScroll: 2,
        draggable:true,
        
        });
        hollywood.innerHTML=html;
    })
    .catch((error)=>{
        console.log('erroe: ',error);
    });
    fetch(winurl4)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data: ', data);

        let html="";
        if(data.results){
            data.results.forEach(movie =>{
                if(movie.poster_path){
                    html += `
                    <div class = "meal-item" data-id = "${movie.id}">
                        <div class = "movie-image" data-movie-id="${movie.id}">
                            <img src = "${imageUrl + movie.poster_path}" alt = "movies_poster" data-movie-id="${movie.id}">
                        </div>
                        <h3  class = "movie-title">${movie.title}</h3>
                    </div>
                `;
                }
              
            });
        }
        new Glider(document.getElementById("telugu"),{
            slidesToShow:4,
        slidesToScroll: 2,
        draggable:true,
        
        });
        telugu.innerHTML=html;
    })
    .catch((error)=>{
        console.log('erroe: ',error);
    });
    
}
inputElements.onkeyup=function(events){
    events.preventDefault();

    const value=inputElements.value;

    // add value to query url
    const newUrl= url + '&&query='+ value;
    fetch(newUrl)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data: ', data);

        let html="";
        if(data.results){
            data.results.forEach(movie =>{
                if(movie.poster_path){
                    html += `
                    <div class = "meal-item" data-id ="${movie.id}">
                        <div class = "movie-image" >
                            <img src = "${imageUrl + movie.poster_path}" alt = "movies_poster"  data-movie-id="${movie.id}">
                        </div>
                        <h3  class = "movie-title">${movie.title}</h3>
                    </div>
                `;
                }
              
            });
        }
       
        mainElements.innerHTML=html;
    })
    .catch((error)=>{
        console.log('erroe: ',error);
    });
    console.log(value);
}
searchbtn.onclick=function(events){
    events.preventDefault();

    const value=inputElements.value;

    // add value to query url
    const newUrl= url + '&&query='+ value;
    fetch(newUrl)
    .then((res)=> res.json())
    .then((data)=>{
        console.log('data: ', data);

        let html="";
        if(data.results){
            data.results.forEach(movie =>{
                if(movie.poster_path){
                    html += `
                    <div class = "meal-item" data-id ="${movie.id}">
                        <div class = "movie-image" >
                            <img src = "${imageUrl + movie.poster_path}" alt = "movies_poster"  data-movie-id="${movie.id}">
                        </div>
                        <h3  class = "movie-title">${movie.title}</h3>
                    </div>
                `;
                }
              
            });
        }
       
        mainElements.innerHTML=html;
    })
    .catch((error)=>{
        console.log('erroe: ',error);
    });
    console.log(value);
}
///get videos
function getvideos(e){
    e.preventDefault();
    if(e){
        let movidevideo=e.target.parentElement.parentElement;
     fetch(`https://api.themoviedb.org/3/movie/${movidevideo.dataset.id}?api_key=814973d8811d36d70b0a549dcb6963fa`)
         .then(response => response.json())
         .then(data =>
           moviedetail(data));
    
    }
   
    
}
function moviedetail(move){
   
        if(move){
     let html=`
    
     <button class="video-close"><i class="fa fa-window-close" aria-hidden="true"></i></button>
     <button class="back mb-5"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
     <img class="video-image mt-2" src = "${imageUrl + move.poster_path}" alt = "movies_poster">
     <div class="buttons">
  <button class="btn btn-success"><i class="fa fa-download" aria-hidden="true"></i> Download</button>
  <button class="btn btn-primary"><i class="fa fa-video" aria-hidden="true"></i> Watch Online</button>
  <button class="btn btn-info"><i class="fa fa-list" aria-hidden="true"></i> Watchlist</button>
  <button class="share"><i class="fa fa-share" aria-hidden="true"></i></button>
</div>
         <div class="addressing-titles">
         <h2 class="video-title">Movie : ${move.title}</h2>
         <h2 class="video-over-title">Description</h2>
         <p class="video-overview-text">${move.overview}</p>
         <p class="video-release">Release Date : <a href="" class="vote-number">${move.release_date}</a></p>
         <p class="video-vote">Vote Average:<a href="" class="vote"> ${move.vote_average} <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></a></p> 
      </div>
     
        `;
         mainVideos.innerHTML=html;
         mainVideos.classList.add("show");
         document.body.classList.add("colr");
         container.classList.add("contain");

         const close=document.querySelector(".video-close");
         close.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
         const back=document.querySelector(".back");
         back.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
     
        }
    
}
function gettelugu(e){
    e.preventDefault();
    if(e){
        let movidevideo=e.target.parentElement.parentElement;
     fetch(`https://api.themoviedb.org/3/movie/${movidevideo.dataset.id}?api_key=814973d8811d36d70b0a549dcb6963fa`)
         .then(response => response.json())
         .then(data =>
           moviedetail(data));
    
    }
   
    
}
function moviedetail(move){
   
        if(move){
     let html=`
    
     <button class="video-close"><i class="fa fa-window-close" aria-hidden="true"></i></button>
     <button class="back mb-5"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
     <img class="video-image mt-2" src = "${imageUrl + move.poster_path}" alt = "movies_poster">
     <div class="buttons">
  <button class="btn btn-success"><i class="fa fa-download" aria-hidden="true"></i> Download</button>
  <button class="btn btn-primary"><i class="fa fa-video" aria-hidden="true"></i> Watch Online</button>
  <button class="btn btn-info"><i class="fa fa-list" aria-hidden="true"></i> Watchlist</button>
  <button class="share"><i class="fa fa-share" aria-hidden="true"></i></button>
</div>
         <div class="addressing-titles">
         <h2 class="video-title">Movie : ${move.title}</h2>
         <h2 class="video-over-title">Description</h2>
         <p class="video-overview-text">${move.overview}</p>
         <p class="video-release">Release Date : <a href="" class="vote-number">${move.release_date}</a></p>
         <p class="video-vote">Vote Average:<a href="" class="vote"> ${move.vote_average} <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></a></p> 
      </div>
     
        `;
         mainVideos.innerHTML=html;
         mainVideos.classList.add("show");
         document.body.classList.add("colr");
         container.classList.add("contain");

         const close=document.querySelector(".video-close");
         close.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
         const back=document.querySelector(".back");
         back.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
     
        }
    
}

/////get container videos details
function getcontainer(e){
    e.preventDefault();
    if(e){
        let movidevideo=e.target.parentElement.parentElement;
     fetch(`https://api.themoviedb.org/3/movie/${movidevideo.dataset.id}?api_key=814973d8811d36d70b0a549dcb6963fa`)
         .then(response => response.json())
         .then(data =>
           moviedetail(data));
    
    }
   
    
}
function moviedetail(move){
   
        if(move){
     let html=`
    
     <button class="video-close"><i class="fa fa-window-close" aria-hidden="true"></i></button>
     <button class="back mb-5"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
     <img class="video-image mt-2" src = "${imageUrl + move.poster_path}" alt = "movies_poster">
     <div class="buttons">
  <button class="btn btn-success"><i class="fa fa-download" aria-hidden="true"></i> Download</button>
  <button class="btn btn-primary"><i class="fa fa-video" aria-hidden="true"></i> Watch Online</button>
  <button class="btn btn-info"><i class="fa fa-list" aria-hidden="true"></i> Watchlist</button>
  <button class="share"><i class="fa fa-share" aria-hidden="true"></i></button>
</div>
         <div class="addressing-titles">
         <h2 class="video-title">Movie : ${move.title}</h2>
         <h2 class="video-over-title">Description</h2>
         <p class="video-overview-text">${move.overview}</p>
         <p class="video-release">Release Date : <a href="" class="vote-number">${move.release_date}</a></p>
         <p class="video-vote">Vote Average:<a href="" class="vote"> ${move.vote_average} <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></a></p> 
      </div>
     
        `;
         mainVideos.innerHTML=html;
         mainVideos.classList.add("show");
         document.body.classList.add("colr");
         container.classList.add("contain");

         const close=document.querySelector(".video-close");
         close.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
         const back=document.querySelector(".back");
         back.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
     
        }
    
}
//get recent videos
function getrecent(e){
    e.preventDefault();
    if(e){
        let movidevideo=e.target.parentElement.parentElement;
     fetch(`https://api.themoviedb.org/3/movie/${movidevideo.dataset.id}?api_key=814973d8811d36d70b0a549dcb6963fa`)
         .then(response => response.json())
         .then(data =>
           moviedetail(data));
    
    }
   
    
}
function moviedetail(move){
   
        if(move){
     let html=`
    
     <button class="video-close"><i class="fa fa-window-close" aria-hidden="true"></i></button>
     <button class="back mb-5"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
     <img class="video-image mt-2" src = "${imageUrl + move.poster_path}" alt = "movies_poster">
     <div class="buttons">
  <button class="btn btn-success"><i class="fa fa-download" aria-hidden="true"></i> Download</button>
  <button class="btn btn-primary"><i class="fa fa-video" aria-hidden="true"></i> Watch Online</button>
  <button class="btn btn-info"><i class="fa fa-list" aria-hidden="true"></i> Watchlist</button>
  <button class="share"><i class="fa fa-share" aria-hidden="true"></i></button>
</div>
         <div class="addressing-titles">
         <h2 class="video-title">Movie : ${move.title}</h2>
         <h2 class="video-over-title">Description</h2>
         <p class="video-overview-text">${move.overview}</p>
         <p class="video-release">Release Date : <a href="" class="vote-number">${move.release_date}</a></p>
         <p class="video-vote">Vote Average:<a href="" class="vote"> ${move.vote_average} <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></a></p> 
      </div>
     
        `;
         mainVideos.innerHTML=html;
         mainVideos.classList.add("show");
         document.body.classList.add("colr");
         container.classList.add("contain");

         const close=document.querySelector(".video-close");
         close.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
         const back=document.querySelector(".back");
         back.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
     
        }
    
}
//get hollywood videos
function gethollywood(e){
    e.preventDefault();
    if(e){
        let movidevideo=e.target.parentElement.parentElement;
     fetch(`https://api.themoviedb.org/3/movie/${movidevideo.dataset.id}?api_key=814973d8811d36d70b0a549dcb6963fa`)
         .then(response => response.json())
         .then(data =>
           moviedetail(data));
    
    }
   
    
}
function moviedetail(move){
   
        if(move){
     let html=`
    
     <button class="video-close"><i class="fa fa-window-close" aria-hidden="true"></i></button>
     <button class="back mb-5"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>
     <img class="video-image mt-2" src = "${imageUrl + move.poster_path}" alt = "movies_poster">
     <div class="buttons">
  <button class="btn btn-success"><i class="fa fa-download" aria-hidden="true"></i> Download</button>
  <button class="btn btn-primary"><i class="fa fa-video" aria-hidden="true"></i> Watch Online</button>
  <button class="btn btn-info"><i class="fa fa-list" aria-hidden="true"></i> Watchlist</button>
  <button class="share"><i class="fa fa-share" aria-hidden="true"></i></button>
</div>
         <div class="addressing-titles">
         <h2 class="video-title">Movie : ${move.title}</h2>
         <h2 class="video-over-title">Description</h2>
         <p class="video-overview-text">${move.overview}</p>
         <p class="video-release">Release Date : <a href="" class="vote-number">${move.release_date}</a></p>
         <p class="video-vote">Vote Average:<a href="" class="vote"> ${move.vote_average} <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></a></p> 
      </div>
     
        `;
         mainVideos.innerHTML=html;
         mainVideos.classList.add("show");
         document.body.classList.add("colr");
         container.classList.add("contain");

         const close=document.querySelector(".video-close");
         close.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
         const back=document.querySelector(".back");
         back.addEventListener("click",()=>{
             mainVideos.classList.remove("show");
             document.body.classList.remove("colr");
         });
     
        }
    
}
//glider 

new Glider(document.getElementById("main-movies"),{
    slidesToShow:4,
slidesToScroll: 2,
draggable:true,

});
new Glider(document.getElementById("upcoming"),{
    slidesToShow:4,
slidesToScroll: 2,
draggable:true,

});


////autoslide imges for top slider

var i=0;
var image=['https://www.movienewsletters.net/media/slider/1200x444/299932.jpg','https://www.movienewsletters.net/media/slider/1200x444/311592.jpg','https://www.movienewsletters.net/media/slider/1200x444/314959.jpg','https://wallpapercave.com/wp/jCDL6OV.jpg'];
var time=3000;

function autoslide(){
document.slide.src=image[i];

if(i<image.length-1){
 i++;
}
else{
    i=0;
}
}
setInterval(autoslide,time);
