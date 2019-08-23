
let hours;
  let minutes;
  let seconds;
  let counterClock;
  let check=true;

function set(){
   
   
    hours=document.querySelector("#hrs").value;
     minutes=document.querySelector("#mins").value;
   seconds=document.querySelector("#sec").value;


   counterClock=document.getElementById("counter");
   counterClock.innerHTML=(hours<10 ? "0" : "")+hours.toString() + ":"+(minutes<10 ? "0": "")+String(minutes)+":"+(seconds<10? "0":"")+String(seconds);
}
function countDown(hr){
    hours=hr;
    if(minutes<60 && check){
        hours=hr;
    }
    else{
    hours=hours-1;
    }
    if(hours>=0){
        min(minutes);
    }

}
function min(mins){
    if(seconds<60 && check){
        minutes=mins;
    }
    else{
    minutes=mins-1;
    }
    if(minutes>=0&&seconds>0)
    {
        sec();
    }
    else{
        check=false;
        minutes=60;
        countDown(hours);

    }
}
function sec(){
    seconds=seconds-1;
    counterClock.innerHTML=(hours<10 ? "0" : "")+hours.toString() + ":"+(minutes<10 ? "0": "")+String(minutes)+":"+(seconds<10? "0":"")+String(seconds);
    if(seconds>0){
        setTimeout(sec,100);
    }
    else{
if(minutes>=0 && seconds==0){
seconds=60;
check=false;
min(minutes);
}
    }

}