// write js code here corresponding to matches.html
var matchdata=JSON.parse(localStorage.getItem("schedule"))
var favarr=JSON.parse(localStorage.getItem("favourites"))||[]
document.querySelector("#filterVenue").addEventListener("change",function(){
    var selected=document.querySelector("#filterVenue").value
  var filterdata=  matchdata.filter(function(elem){
        return selected==elem.venue
    })
    display(filterdata)
})
display(matchdata)
function display(data){
 document.querySelector("tbody").innerHTML=null
  data.forEach(function(elem){

    var tr= document.createElement('tr');
  var td1=document.createElement("td")
  td1.innerText=elem.matchnum
 
  var td2=document.createElement("td")
  td2.innerText=elem.teamA
  var td3=document.createElement("td")
  td3.innerText=elem.teamB
  var td4=document.createElement("td")
  td4.innerText=elem.date
  var td5=document.createElement("td")
  td5.innerText=elem.venue
  var td6=document.createElement("td")
  td6.innerText="Favourites"
  td6.style.color="red"
  td6.style.cursor="pointer"
  td6.addEventListener("click",function(){
      favresult(elem);
  })

  document.querySelector("tbody").append(tr)
  tr.append(td1,td2,td3,td4,td5,td6)

  })
}
function favresult(elem){
    var favdata={
        name:elem.matchnum,
        teamA:elem.teamA,
        teamB:elem.teamB,
        date:elem.date,
        venue:elem.venue
    }
    favarr.push(favdata)
console.log(favdata)
    localStorage.setItem("favourites",JSON.stringify(favarr))
}