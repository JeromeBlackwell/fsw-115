const getTodo1 = document.getElementById("get1")
console.log(getTodo1)

getTodo1.addEventListener("click", (event)=>{
    axios.get("https://api.vschool.io/jerome.blackwell/todo/")
    .then(response => {})
 
.catch(error => console.log(error))
})
    function renderh1(data) {
        console.log(data)     
{}}
console.log(axios)