// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.querySelector('#masaiForm');
var matchdata=JSON.parse(localStorage.getItem("schedule"))||[]
form.addEventListener("submit",function(){
    event.preventDefault();
    var obj={
        matchnum:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value
    }
    matchdata.push(obj)
    console.log(obj)
    localStorage.setItem("schedule",JSON.stringify(matchdata))
})