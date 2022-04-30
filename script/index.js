import navbar from "../conponent/navbar.js";

document.getElementById("navbar").innerHTML = navbar();





import {getData,append} from "../conponent/fetch.js"
let id;
let input = document.querySelector("#query");



const main = async () =>{

    console.log(input)
    let name = input.value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    let data = await getData(url);
    console.log(data[0])
    console.log(data[0].strMeal)

    append(data);
};

 input.addEventListener("input" , async() =>{
    if (id) clearTimeout(id);
    id = setTimeout(() => {
        main();

    }, 2000);
})
