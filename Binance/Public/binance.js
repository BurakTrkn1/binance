let coin=[]
let temp="";
let piece="";
let totalprice="";
var buyCoin = []
var count=0;
var str="";
// kar zarar tablosu için
var div="";
// alış satış arrayi

var co=[];
let sit=[];
let control=0;

let situation="alış";

let lt=[];

buyCoin=[{döviz:temp.asset_id_base,birimi:temp.rate,adet:piece,toplamtutar:totalprice,sattığıtutar:str,durum:sit}]
coin.push(buyCoin);
// let coins=[
//   {BTC:('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=AFBA9527-0ECD-49FC-9B02-EFFD2BB92A64')},
//   {ETC:('https://rest.coinapi.io/v1/exchangerate/ETC/USD?apikey=AFBA9527-0ECD-49FC-9B02-EFFD2BB92A64')},
//   {ABC:('https://rest.coinapi.io/v1/exchangerate/ABC/USD?apikey=AFBA9527-0ECD-49FC-9B02-EFFD2BB92A64')},
//   {ADA:('https://rest.coinapi.io/v1/exchangerate/ADA/USD?apikey=AFBA9527-0ECD-49FC-9B02-EFFD2BB92A64')},
//   {COR:('https://rest.coinapi.io/v1/exchangerate/COR/USD?apikey=AFBA9527-0ECD-49FC-9B02-EFFD2BB92A64')},
// ]
document.getElementById("amount").onchange=function (){
  let amount=parseInt(document.getElementById("amount").value);
  let price= parseInt(document.getElementById("price").value)
  total=amount*price;
  document.getElementById("sum").value=total;
 piece=amount;
 totalprice=document.getElementById("sum").value;
  

}  

function buy(event,id) {
 
 
  let td=`
  <tr id="tr">
  <td>${temp.asset_id_base}</td>
  <td>${temp.rate}</td>
  <td>${piece}</td>
  <td>${totalprice}</td>
  <td><button type="button" class="btn btn-outline-dark"  onclick="sellPerson(event,id)">Sat</button></td>
  
  </tr>
  `;
  let tr=document.createElement("tr")
  tr.innerHTML=td
  document.getElementById("Tbody").appendChild(tr);
  
  let mov1=`
  <tr>
  <td class="name">${temp.asset_id_base}</td>
  <td class="price">${temp.rate}</td>
  <td class="amount">${piece}</td>
  <td class="total">${totalprice}</td>
  <td class="str" id="stri">${str}</td>
  <td  class="situ "id="situ">${situation}</td>
 
  
  </tr>
   `;
   
  
   let ts=document.createElement("tr")
   ts.innerHTML=mov1;
   document.getElementById("tt").appendChild(ts);
 
  
 
  let storage=JSON.parse(localStorage.getItem("Coin"));
  console.log(storage);
  if(storage===null){
  coin.push([{döviz:temp.asset_id_base,birimi:temp.rate,adet:piece,toplamtutar:totalprice,sattığıtutar:str,durum:sit}])
  localStorage.setItem("coin",JSON.stringify(coin));   
  }
  else{
  coin.push([{döviz:temp.asset_id_base,birimi:temp.rate,adet:piece,toplamtutar:totalprice,sattığıtutar:str,durum:sit}])
  JSON.parse(localStorage.getItem("coin"))

 }

 localStorage.setItem("coin",JSON.stringify(coin));   

 }
  
  
  


document.getElementById("lost").innerHTML=div;

function simple(){
  let selects=document.getElementById("myselect").value;

  
  
  fetch('https://rest.coinapi.io/v1/exchangerate/'+selects+'/USD?apikey= AFBA9527-0ECD-49FC-9B02-EFFD2BB92A64').then(response=>{
  return response.json()
  }
  ).then(data=>{
    temp=data;
    let div=` 
    <label id="unit1" type="text" class="input-group-text">${data.asset_id_base}</label>
    `;
    let price  =`
    <span class="input-group-text">$</span>
    <span class="input-group-text">${data.rate}</span>
    `
    document.getElementById("unit1").value=data.asset_id_base;
    document.getElementById("price").value=parseFloat(data.rate);

   
  })
  .catch(Error=>Error)
  
  
  
}
function wa(event){
  document.getElementById("prof").style.display="none";
  document.getElementById("wallet").style.display="block";
  document.getElementById("t").style.display="none";
  

 }
function move(event,id){
 document.getElementById("wallet").style.display="none";
 document.getElementById("prof").style.display="none";
 document.getElementById("t").style.display="block";
 // document.getElementById("sel").style.display="none";
 
 
  
  
  // if(document.getElementById("process").innerHTML="Satın al"){
  //   document.getElementById("situ").innerHTML=JSON.stringify(sit[0]);

  // }
  // else if(document.getElementById("process").innerHTML="Sat")
  // {
  //   console.log("else if içi");
  //   document.getElementById("situ").innerHTML=JSON.stringify(sit[1]);
    

  // }
  // else{
    
  // }
  
}
function deleted(event,id) {
  event.target.closest("div").remove();
  coin=coin.filter((buyCoin)=>buyCoin. id!=id);
  console.log(coin);
  
}
// satış fonksiyonu
function sell(event,id) {
 let situation1="satış";
  
  let div1=`
  <tr>
   <td>${temp.asset_id_base}</td>
   <td>${temp.rate}</td>
   <td>${piece}</td>
   <td>${totalprice}</td>
   <td id="stri">${str}</td>
</tr>
   `;
   let se=document.createElement("tr");
  se.innerHTML=div1;
   document.getElementById("lost").appendChild(se);

  
   let mov1=`
   <tr>
   <td>${temp.asset_id_base}</td>
   <td>${temp.rate}</td>
   <td>${piece}</td>
   <td>${totalprice}</td>
   <td id="stri">${str}</td>
   <td id="situ">${situation1}</td>
  
   
   </tr>
    `;
    
   
    let ts=document.createElement("tr")
    ts.innerHTML=mov1;
    document.getElementById("tt").appendChild(ts);
  
    if(totalprice<temp.rate){
      console.log("if içi");
      console.log(document.getElementById("stri"))
      document.getElementById("stri").style.color="green";
     }
     else{
      console.log("else içi");
      console.log(document.getElementById("stri"))
      document.getElementById("stri").style.color="red";
      }


   

}


// hareketlerimin açılıp kapanması için kurulan fonksiyon 
function sellPerson(event,id){ 
  document.getElementById("amount").value=totalprice;
  let prof=document.getElementById("amount").value-temp.rate;
  document.getElementById("sum").value=prof;
str=document.getElementById("sum").value;
document.getElementById("ad").innerHTML="Tutar";
document.getElementById("fiy").innerHTML="Satış yaptığım tutar"
console.log( document.getElementById("ad").innerHTML);
document.getElementById("process").innerHTML="Sat";
document.getElementById("process").setAttribute
("onclick","javascript: sell(event,"+id+") ");

const mymodal = new bootstrap.Modal('#modal', {
  keyboard: false,
  
});
mymodal.show('modal')

}


function profit_lost(event){
  document.getElementById("prof").style.display="block";
  document.getElementById("wallet").style.display="none";
  document.getElementById("t").style.display="none";
  
  


   
    if(totalprice<temp.rate){
      console.log("if içi");
      console.log(document.getElementById("stri"))
      document.getElementById("stri").style.color="green";
     }
     else{
      console.log("else içi");
      console.log(document.getElementById("stri"))
      document.getElementById("stri").style.color="red";
      }
}

function chate(event) {
   
  document.getElementById("chan").innerHTML="Döviz birimini seçiniz";
    document.getElementById("unit1").value="";
  
    document.getElementById("price").value="";
  
    document.getElementById("amount").value="";
  
    document.getElementById("sum").value="";
    // modalımın içindeki inputumun labelın ismini değiştirmem için
    document.getElementById("ad").innerHTML="Adet";
    
    document.getElementById("fiy").innerHTML="Fiyat";
    document.getElementById("process").innerHTML="Satın Al"
    
     
     
    
  }

window.onload=function(id){

let count=0;
coin.push([{döviz:temp.asset_id_base,birimi:temp.rate,adet:piece,toplamtutar:totalprice,sattığıtutar:str,durum:sit}]);

  console.log(JSON.parse(localStorage.getItem("coin")))
  // JSON.parse(localStorage.getItem("coin"))
  JSON.parse(localStorage.getItem("coin"))==undefined ?  coin = [] : coin =  JSON.parse(localStorage.getItem("coin"))
  console.log(coin);
   
  coin.forEach(val => {
    
    console.log(val);
    const tw=
    `
    <tr>
    <td>${val.döviz}</td>
    <td>${val.birimi}</td>
    <td>${val.adet}</td>
    <td>${val.toplamtutar}</td>
    <td id="stri">${val.sattığıtutar}</td>
    <td id="situ">${val.situation}</td>
    
    
    </tr>
    `;
    const yt=document.createElement("tr")
    yt.setAttribute("id",count)
    yt.innerHTML=tw;
    if(count==1){
      
      document.getElementById("tt").innerHTML="";
      
    }
    else{
      document.getElementById("tt").appendChild(yt);
      
    }
  });
  
  
  
}

