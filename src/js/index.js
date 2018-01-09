console.log("hello, world!")

// generating Chuck Norris quotes with Axios API call
let getJoke = document.getElementById("generateJoke");
let quoteDiv = document.getElementById("quoteDiv");
getJoke.onclick = displayJoke;

function displayJoke(){
  axios.get('http://api.icndb.com/jokes/random')
  .then(function(response){
    console.log(response.data.value.joke)
    joke = response.data.value.joke;
    quoteDiv.innerHTML = joke;
  })
  .catch(function(error){
    console.log(error)
  })
}

//print out filterable content from data.json file
let mediaList = document.getElementById("mediaList");
let eachDisplay = document.getElementById("eachDisplay");

// what fetching the data would look like from the index.js file
fetch('./data/data.json')
  .then(response => response.json())
  .then(function(json){
    for(i=0;i<json.media.length;i++){
      console.log(json.media[i]);
    }});

let clearLink = document.getElementById("clearLink");
let movieBtn = document.getElementById("movieBtn");
let bookBtn = document.getElementById("bookBtn");
clearLink.onclick = clearFilters;

// clear filters function
function clearFilters(){
  movieBtn.checked = false;
  bookBtn.checked = false;
}
