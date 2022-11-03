let btn = document.querySelector('#js-new-movie');
btn.addEventListener('click', function(){
    getMovie();
});

let base_url = "http://www.omdbapi.com/?apikey=56b1a3d7&t="
let movies= [
    "Creed&y=2-15",
    "Tenet",
    "The+Big+Short",
    "Inception",
    "Moneyball",
    "The+Martian",
    "Burnt",
    "How+to+Train+Your+Dragon",
    "Margin+Call",
    "The+Social+Network",
    "Black+Panther",
    "Ready+or+Not",
    "Wrath+of+Man"
];

getMovie();
function getMovie() {
    console.log("the generate button has been clicked");
    let random_movie = movies[Math.floor(Math.random()*movies.length)];
    let api = base_url + random_movie;

    fetch(api)
        .then(response => response.text())
        .then(data => { 
            // let tweet = data['message']
            let movie_data = (JSON.parse(data))
            let curr_title = movie_data['Title']
            let curr_year = movie_data['Year']
            let curr_director = movie_data['Director']
            let curr_poster = movie_data['Poster']
            displayMovie(curr_title, curr_year, curr_director, curr_poster)
        })
        .catch(error => {
            console.log("ERROR: api fetch FAILED")
        });
}

function displayMovie(title, year, director, poster) {
    console.log("duh");
    let movie_poster = document.getElementById('js-movie-poster');
    let movie_title = document.getElementById('js-movie-title');
    let movie_year = document.getElementById('js-movie-year');
    let movie_director = document.getElementById('js-movie-director');
    // movie_poster.innerHTML = ```<img src=${poster}>```;
    let poster_src = `<img src="${poster}" alt="${title} Poster">`;
    movie_poster.innerHTML = poster_src;
    movie_title.innerHTML = title;
    movie_year.innerHTML = "Year: " + year;
    movie_director.innerHTML = "Director(s): " + director;
    // tweet_display.innerHTML = tweet;
}