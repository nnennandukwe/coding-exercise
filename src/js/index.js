console.log("hello,world!")

// generating Chuck Norris quotes with Axios API call
var getJoke = document.getElementById("generateJoke");
var quoteDiv = document.getElementById("quoteDiv");
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
var mediaList = document.getElementById("mediaList");
var eachDisplay = document.getElementById("eachDisplay");
var li = document.createElement("li");
var img = document.createElement("img");

fetch('./data/data.json')
  .then(response => response.json())
  .then(function(json){
    for(i=0;i<json.media.length;i++){
      console.log(json.media[i]);
      var title = json.media[i].title;
      var year = json.media[i].year;
      var poster = json.media[i].poster;
      var genre = json.media[i].genre;
    }});
