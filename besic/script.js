
let [seconds,minutes,hours] = [0,0,0];
let dispalytime = document.getElementById('displaytime');
let timer = null;

function startwatch()
{
    seconds++;
    if(seconds == 60)
    {
        seconds = 0;
        minutes++;
        if(minutes == 60)
        {
            minutes = 0;
            hours++;

        }
    }

    let h = (hours < 10 ? "0" : "  ") + hours;
    let m = (minutes < 10 ? "0" : " ") + minutes;
    let s = (seconds < 10 ? "0" : " ") + seconds;

    dispalytime.innerHTML = h + " : " + m + " : " + s
 

}
function watchstart()
{
    timer = setInterval(startwatch, 1000);
}
function watchstop()
{
    clearInterval(timer)
}
function watchreset()
{
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    dispalytime.innerHTML = "00:00:00";
    dispalytime.innerHTML = "00:00:00";
  
}


