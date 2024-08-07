let [seconds,minutes,houres]=[0,0,0,]
let displayTime=document.getElementById('displayTime')
let timer=null;
function startwatch()
{
    seconds++;
    if(seconds == 60)
    {
        seconds=0;
        minutes++;
        if(minutes==60)
        {
            minutes=0
            houres++;
            
        }
    }
     let h=(houres<10 ? "0":" ")+houres;
    let m=(houres<10 ? "0":" ")+minutes;
    let s=(houres<10 ? "0":" ")+seconds;
    displayTime.innerHTML= h + ":"+ m +":"+s 
    // displayTime.innerHTML= houres+ ":"+ minutes+":"+seconds 

}
    function watchStart()
    {
timer=setInterval(startwatch,1000)
    }
    function watchStop()
    {
        clearInterval(timer)
    }
    function watchReset()
    {
        clearInterval(timer);
        [seconds,minutes,houres]=[0,0,0]
        displayTime.innerHTML="00:00:00"
    }