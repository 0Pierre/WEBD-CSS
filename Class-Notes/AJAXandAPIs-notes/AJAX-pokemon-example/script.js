console.log("script is running")

// document.getElementById("loadPokemon").addEventListener("click",function(){
    
//     //grab the api data fro the pokemon
//     var xhr = new XMLHttpRequest();

//     //GET HTTP request to the pokemon API via the URL. IT IS ASYNCHRONOUS meaning it can slow down your code
//     xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offeset=0");

//     xhr.onload = function () {
//         // console.log("api as responded!")
//         // console.log(this);
//         var response = JSON.parse(this.responseText);
//         console.log(response)
//         var pokemonString = "";
//         response.results.forEach((pokemon) => {
//             pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}<a/></li>`
//         });
//         document.getElementById("pokemonList").innerHTML = pokemonString;
//     };

//     xhr.send();
// });

//proiese

// var userData = await postgresDatabase.GetUserData() 
function fetchUserData (userData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            // reject({status: 400, error: "COuldnt not find"})
            resolve({username: 'user', password: 123});
        }, 5000)
    });

}

async function handlePromise (){
    console.log("INitiatin call to the database...");
    let promiseResault = await fetchUserData();
    console.log(promiseResault)
}

handlePromise();
// // console.log(DBGetUserData)

// DBGetUserData.then(response => {
//     console.log(response)
// })
//     .catch(err => console.log('Promise error caught',err))

document.getElementById("loadPokemon").addEventListener("click",function(){
    let pokemonList = fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offeset=0",{
        method: "GET",
        }
    )
        .then(response=>{
        return response
    }).catch((err) => console.log("Error!:", err))
    .finally(()=>{
        console.log("API Call Complete")
    })
    console.log(pokemonList)
});