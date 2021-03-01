axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => {
        renderh1(response.data)
})
.catch(error => console.log(error))
    
const renderh1 = (data) => {
    console.log(data)
}

console.log(axios)