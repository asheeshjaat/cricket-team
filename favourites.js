// write js code here corresponding to favourites.html
var favdata=JSON.parse(localStorage.getItem("favourites"))
 

display(favdata)
function display(data){
 document.querySelector("tbody").innerHTML=null
  data.forEach(function(elem,a,favdata){

    var tr= document.createElement('tr');
  var td1=document.createElement("td")
  td1.innerText=elem.name
 
  var td2=document.createElement("td")
  td2.innerText=elem.teamA
  var td3=document.createElement("td")
  td3.innerText=elem.teamB
  var td4=document.createElement("td")
  td4.innerText=elem.date
  var td5=document.createElement("td")
  td5.innerText=elem.venue
  var td6=document.createElement("td")
  td6.innerText="delete"
  td6.style.color="red"
  td6.style.cursor="pointer"
  td6.addEventListener("click",function(){
      abc(elem,a);

  })
  document.querySelector("tbody").append(tr)
  tr.append(td1,td2,td3,td4,td5,td6)
  })
}
function abc(elem,i){
  
    favdata.splice(i,1)
   display(favdata)
}