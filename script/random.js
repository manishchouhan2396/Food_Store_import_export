import navbar from "../conponent/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


import { getData, append } from "../conponent/fetch.js";


let main = async () => {

    let url = "https://www.themealdb.com/api/json/v1/1/random.php";
    let data = await getData(url);
    console.log(data)
    append(data);
};

for(let i=0; i<10; i++){
    main();
}




