const getTodo2 = document.getElementById("get2")
console.log(getTodo2)

getTodo2.addEventListener("click", (event)=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => {
    console.log(response)    
        for (var i=0; i < response.data.categories.length; i++) {
            var rusty = document.createElement('div')
            document.body.appendChild(rusty)

            var jaden = document.createElement('h1')
            jaden.style.color = "limegreen"
            jaden.style.float = "right"
            jaden.style.margin = "0"

        jaden.textContent = response.data.categories[i].strCategory
        rusty.appendChild(jaden)    
        
            var kyrie = document.createElement('img')
            kyrie.style.float = "left"
            kyrie.style.marginRight = "10px"

        kyrie.src = response.data.categories[i].strCategoryThumb
        rusty.appendChild(kyrie)    
            }
        // console.log (response.data.drinks[i].strGlass)
    })

.catch(error => console.log(error))
})
    // function renderh1(data) {
    //     console.log(data)     