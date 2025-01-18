let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let time = document.getElementById("time")

let msec = 0
let sec = 0
let min = 0
let hrs = 0


let timer = null



function startTimer() {
    msec++
    if (msec == 100) {
        msec = 0
        sec += 1
    }
    if (sec == 60) {
        sec = 0
        min += 1
    }
    if (min == 60) {
        min = 0
        hrs += 1
    }
    let msecstr = msec < 10 ? "0" + msec : msec
    let secstr = sec < 10 ? "0" + sec : sec
    let minstr = min < 10 ? "0" + min : min
    let hrstr = hrs < 10 ? "0" + hrs : hrs



    time.innerHTML = `${hrstr}:${minstr}:${secstr}:${msecstr}`
}


start.addEventListener("click" , function (){
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(startTimer,10)
})
stop.addEventListener("click" , function (){
    clearInterval(timer)
})
reset.addEventListener("click" , function (){
    clearInterval(timer)
    time.innerHTML = `00:00:00:00`
    msec = 0
    sec = 0
    min = 0
    hrs = 0
})