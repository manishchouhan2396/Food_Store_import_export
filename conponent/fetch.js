let getData = async(url)=>{
    try{
        let res = await fetch(url);
        let data = await res.json();

        return data.meals;
    }catch (err){
        console.log(err)
    }
}

let append = (data) =>{
    data.forEach(ele => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.strMealThumb;
        let name = document.createElement("h3");
        name.textContent = ele.strMeal;

        box.append(img , name);
        document.querySelector("#container").append(box);
    });
};

export {getData , append};