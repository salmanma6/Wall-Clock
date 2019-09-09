setInterval(doit,1000);
var hourdiv=document.querySelector('.hour');
var mindiv=document.querySelector('.min');
var secdiv=document.querySelector('.sec');
function doit(){
    var now=new Date();
    var seconds=now.getSeconds();
    var seconddegrees=(seconds/60)*360+90;
    secdiv.style.transform=`rotate(${seconddegrees}deg)`;
    var minutes=now.getMinutes();
    var  mindegress=(minutes/60)*360+90;
    mindiv.style.transform=`rotate(${mindegress}deg)`;
    var hours=now.getHours();
    var hourdegress=(hours/12)*360+90;
    hourdiv.style.transform=`rotate(${hourdegress}deg)`;
}