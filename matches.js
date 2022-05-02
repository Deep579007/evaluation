// write js code here corresponding to matches.html




// document.querySelector("#filterVenue").addEventListener("change",haldelfilter);

// function haldelfilter(){
//     var selector=document.querySelector("#filterVenue").ariaValueMax;
//     //console.log(selector);
//     var filter=DataArr.filter(function(el){
//         return el.venue==selector;
//     });
//     //console.log(filter);
//     displayData(filter);
// }



var DataArr=JSON.parse(localStorage.getItem("schedule"));

displayData(DataArr);

var FavouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];

function displayData(Data){
    //document.querySelector("tbody").innerHTML="";
    Data.forEach(function(el){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText.el.matchNum;

        var td2=document.createElement("td");
        td2.innerText.el.teamA;

        var td3=document.createElement("td");
        td3.innerText.el.teamB;

        var td4=document.createElement("td");
        td4.innerText.el.date;

        var td5=document.createElement("td");
        td5.innerText.el.venue;

        var td6=document.createElement("td");
        document.createElement("td");
        td6.innerText="Favourite";
        td6.style.color="blue";
        td6.style.cursor="pointer";

        td6.addEventListener("click",function(){
            Favouritefunction(el);
        });


        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
        
    });

    
}

function Favouritefunction(el){
    FavouriteArr.push(el);
    localStorage.setItem("favourites",JSON.stringify(FavouriteArr));
}