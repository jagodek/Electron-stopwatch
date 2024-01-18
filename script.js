
let second
let minute
let isRunning = false

if(localStorage.getItem('seconds') == null)
    localStorage.setItem('seconds',0)

setSecond(parseInt(localStorage.getItem('seconds')))



const stopwatch_paragraph = document.getElementById('stopwatch')

setInterval(()=>{
    if(isRunning)
    addSecond(second)
    setParagraph()
},1000)

function setParagraph(){
    let sec = second%60
    stopwatch_paragraph.innerText =  (minute >= 10 ? minute.toString() : "0"+minute.toString()).toString().concat(":", (sec >= 10 ? sec.toString() : "0"+sec.toString()))
    localStorage.setItem('seconds',second)
}

function setSecond(sec){
    second = sec
    minute = Math.floor(second/60)
}

function addSecond(sec){
    return setSecond(sec+1)
}


function toggleRunning(){
    stopwatch_paragraph.classList.remove(isRunning.toString())
    isRunning = !isRunning
    stopwatch_paragraph.classList.add(isRunning.toString())
}

function resetCounter(){
    setSecond(0)
    setParagraph()
    stopwatch_paragraph.classList.remove(isRunning.toString())
    isRunning = false
}

stopwatch_paragraph.addEventListener('click',(event)=>{
    toggleRunning() 
})

stopwatch_paragraph.addEventListener('contextmenu',(event)=>{
    resetCounter()

})