// Add the coffee to local storage with key "coffee"




const url  = `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url)
.then(function(res){

    return res.json()
})

.then(function(res){

    console.log(res.menu.data)

    display(res.menu.data)
})


let arrItems  = localStorage.getItem("coffee") || []




function display(data){

    data.forEach(function(ele){

        let div = document.createElement("div");

        let itemImg = document.createElement("img");
        itemImg.src = ele.image;
        itemImg.style.width = "150px"
        height = "150px";

        let type = document.createElement("h3")
        type.innerText = ele.title;
        type.style.lineHeight= "45px"

        let price = document.createElement("p")
        price.innerText=ele.price;
        price.style.lineHeight= "45px"

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.id = "add_to_bucket";
      
        btn.addEventListener("click", function(){
            saveToCart(ele)
           

        })

        div.append(itemImg,type,price,btn)
        document.querySelector("#menu").append(div)

        

    })
}

function saveToCart(ele){      
    arrItems.push(ele);
    localStorage.setItem("coffee",JSON.stringify(arrItems));
    let total_items = arrItems.length;
    let item_div = document.querySelector("#coffee_count");
    item_div.innerText=total_items;
}