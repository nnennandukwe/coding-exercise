console.log("hello,world!")

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
