const getTodo1 = document.getElementById("get1")
console.log(getTodo1)

getTodo1.addEventListener("click", (event)=>{
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response => {
    console.log(response)    
        for (var i=0; i < response.data.drinks.length; i++) {
            var jerome = document.createElement('h1')

        jerome.textContent = response.data.drinks[i].strDrink
        document.body.appendChild(jerome)    
        
            var jaxon = document.createElement('h1')

        jaxon.textContent = response.data.drinks[i].strGlass
        document.body.appendChild(jaxon)    
            }
        // console.log (response.data.drinks[i].strGlass)
    })

.catch(error => console.log(error))
})
    // function renderh1(data) {
    //     console.log(data)     

console.log(axios)



console.log(axios)