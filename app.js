var minute = 0;
var second = 0;
var milisec = 0;
var minheading = document.getElementById("minute");
var secheading = document.getElementById("second");
var miliheading = document.getElementById("milisec");
var intervel;

function timer(){
    milisec++;
    miliheading.innerHTML = milisec;
    if(milisec>=99){
        second++;
        secheading.innerHTML = second;
        milisec = 0;

    }
    else if(second>=59){
        minute++;
        minheading.innerHTML = minute;
        second = 0;
    }

}

function start(){
    intervel = setInterval(timer,10);
    document.getElementById("startbtn").disabled = true;

}
function stop(){
    clearInterval(intervel);
    document.getElementById("startbtn").disabled = false;

}
function reset(){
    minute = 0;
    second = 0;
    milisec = 0;
    minheading.innerHTML =minute;
    secheading.innerHTML = second;
    miliheading.innerHTML = milisec;
    stop();
}
function lap(){
    document.write(minheading.innerHTML);
    document.write(secheading.innerHTML);
    document.write(miliheading.innerHTML);
}