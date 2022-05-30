// On clicking remove button the item should be removed from DOM as well as localstorage.

let array= JSON.parse(localStorage.getItem("coffee"))||[];

let addhere = document.querySelector("#bucket");
let sum=0;
let aa = array.reduce(function(acc,ele){
    sum=sum+Number(ele.price);
},0);

let total = document.querySelector("#total_count").innerHTML=sum;
function2(array);

function function2(data){
    data.forEach(function(ele,index){
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
        btn.innerText="Remove";
        btn.setAttribute("id","remove_coffee");
        btn.addEventListener("click",function(){
            btnfunction(ele,index);
        })
        design.append(x,y,z,btn);
        addhere.append(design);
    })
}
function btnfunction(ele,index){
    array.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(array));
    window.location.reload();
}