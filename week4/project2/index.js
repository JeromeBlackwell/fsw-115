const button1 = document.getElementById("get1")
console.log(button1)

button1.addEventListener("click", (event)=>{
    axios.get("https://api.vschool.io/jerome.blackwell/todo/6030883cee6f8d3fc3fec58c")
    .then(response => {
    
    const renderh1 = (data) => {
        console.log(data)
        const h1 = document.getElementById("h1")
     
        for(let i =0; i < data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = data[i].title
            document.body.appendChild(h1)
            }
        }
        renderh1(response.data)
    })
})

const button2 = document.getElementById("get2")
console.log(button2)

button1.addEventListener("click", (event)=>{
    axios.get("https://api.vschool.io/jerome.blackwell/todo/")
    .then(response => {
    
    const renderh1 = (data) => {
        console.log(data)
        const h1 = document.getElementById("h1")
     
        for(let i =0; i < data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = data[i].title
            document.body.appendChild(h1)
            }
        }
        renderh1(response.data)
    })
})


// axios.get("https://api.vschool.io/jerome.blackwell/todo")
// .then(response => {
    
// const renderh1 = (data) => {
//     console.log(data)
// const h1 = document.getElementById("h1")
 
    
//     for(let i =0; i < data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = data[i].title
//         document.body.appendChild(h1)
//         }
//     } 
// })
// .catch(error => console.log(error))

console.log(axios)