axios.get("https://api.vschool.io/jerome.blackwell/todo/")
.then(response => {
        renderh1(response.data)
})
.catch(error => console.log(error))
    
const renderh1 = (data) => {
    console.log(data)

const h1 = document.getElementById("h1")    
    for(let i =0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.body.appendChild(h1)

        if (data[i].completed) {
            h1.style.textDecoration ="line-through"
        }

        if (data[i].imgUrl) {
        const img = document.createElement('img')
        img.src = data[i].imgUrl
        document.body.appendChild(img)
        }   
    }
}

console.log(axios)