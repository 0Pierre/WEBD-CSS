console.log("script is running")

document.getElementById("loadPokemon").addEventListener("click",function(){
    
    //grab the api data fro the pokemon
    var xhr = new XMLHttpRequest();

    //GET HTTP request to the pokemon API via the URL. IT IS ASYNCHRONOUS meaning it can slow down your code
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offeset=0");

    xhr.onload = function () {
        // console.log("api as responded!")
        // console.log(this);
        var response = JSON.parse(this.responseText);
        console.log(response)
        var pokemonString = "";
        response.results.forEach((pokemon) => {
            pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}<a/></li>`
        });
        document.getElementById("pokemonList").innerHTML = pokemonString;
    };

    xhr.send();
});