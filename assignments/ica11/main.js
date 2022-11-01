let btn = document.querySelector('#js-new-quote');
btn.addEventListener('click', function(){
    getQuote();
});

let tweet_display  = document.getElementById('js-quote-text');


let api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
let tweet = '';
getQuote();
function getQuote() {
    console.log("the button has been clicked");

    fetch(api)
        .then(response => response.text())
        .then(data => { 
            // let tweet = data['message']
            let tweet= (JSON.parse(data))['message']
            console.log(tweet)
            displayQuote(tweet)
        })
        .catch(error => {
            console.log("ERROR: api fetch FAILED")
        });
}

function displayQuote(tweet) {
    tweet_display.innerHTML = tweet;
}