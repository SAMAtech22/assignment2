const axios = require("axios")

async function fetchData(){
   try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      const data = await response.data();
      document.getElementById("result").innerText = `Title:${data.title}`
   }catch(error){
      console.error("Error fetching data:", error)
   }

}

// console.log(fetchData())

// handle errors


// task 3 ternary operator
let evenNum = 2,
    oddNum = 7;

function ans(evenNum, oddNum){
   if
}