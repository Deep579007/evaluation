// let array = JSON.parse(localStorage.getItem('user'));

// document.getElementById('wallet_balance').innerText=array;

// async function searchVouchers(){
//     try{
//         const res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);

//         let data = await res.json();

//         let voucher = data.Search;

//         append(voucher_list);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// function append(data){
//     document.getElementById('voucher_list').innerHTML=null;

//     data.forEach(ele =>{

//         let box = document.createElement('div');

//         let imgbox = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = ele.image;
//         Imgbox.append(img);

//         let name = document.createElement('p');
//         name.innerText= ele.name;

//         let price = document.createElement('p');
//         price.innerText= ele.price;
        
//         let btn = document.createElement('button');
//         btn.innerText ="Buy";

//         btn.addEventListener('click',function(){

//             addData(ele);
            
//         })
//         btn.setAttribute("class","voucher")

//         box.append(img,name,price,btn);

//         document.getElementById('voucher_list').append(box);



//     });
// }

// function addData(ele){
//     let arr=[];
//     localStorage.setItem('user',JSON.stringify(arr));
    
//     window.location.href ='purchase.html';

// }

// async function main(){
//     let data = await searchVouchers();
//     if(data == undefined){
//         return false;
//     }
//     append(data);
// }



let money = JSON.parse(localStorage.getItem("user"))
  document.getElementById("wallet_balance").innerHTML=money.wallet
  
  let arr = JSON.parse(localStorage.getItem("purchase")) || []


  async function hello(){
   let url ="https://masai-vouchers-api.herokuapp.com/api/vouchers" ;
   let responce = await fetch(url) 
   let data = await responce.json()

   addpenddata(data[0].vouchers)
  
 
  }
 
  hello()


  function addpenddata(data){

    let container = document.getElementById("voucher_list")

    data.forEach(function(el){
      let box = document.createElement("div")
     box.setAttribute("class","voucher")

     let img = document.createElement("img")
     img.src= el.image
     let name = document.createElement("p")
     name.innerText=el.name 
     let price = document.createElement("p")
     price.innerHTML=el.price;
     let button = document.createElement("button")
     button.innerHTML="Buy"
     button.setAttribute("class","buy_voucher")
     button.addEventListener("click",function(){
         
      select(el)

     })


     box.append(img,name,price,button)

     container.append(box)

    })


  }

  function select(el){
     let x= Number(el.price)
     let y = Number(money.wallet)
    if(x<y){
      alert("Hurray! purchase successful")
      arr.push(el);
    localStorage.setItem("purchase",JSON.stringify(arr))
    sum= y-x
    money.wallet=sum

    localStorage.setItem("user",JSON.stringify(money))
    window.location.reload()
    }
    else{
      alert("Sorry! insufficient balance")
    }

  }