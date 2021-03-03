const getTodo1 = document.getElementById("get1")
console.log(getTodo1)

getTodo1.addEventListener("click", (event)=>{
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(response => {
    console.log(response)    
        for (var i=0; i < response.data.drinks.length; i++) {
            var jerome = document.createElement('div')
            document.body.appendChild(jerome)

            var jaxon = document.createElement('h1')
            jaxon.style.color = "limegreen"
            jaxon.style.float = "right"
            jaxon.style.margin = "0"
            jaxon.style.marginTop = "75px"

        jaxon.textContent = response.data.drinks[i].strDrink
        jerome.appendChild(jaxon)    
        
            var kyrie = document.createElement('img')
            kyrie.style.float = "left"
            kyrie.style.marginRight = "40px"
            kyrie.style.marginTop = "75px"
            kyrie.style.width = "175x"
            kyrie.style.height = "175px"

        kyrie.src = response.data.drinks[i].strDrinkThumb
        jerome.appendChild(kyrie)    
            }
        
    })

.catch(error => console.log(error))
})
         
console.log(axios)