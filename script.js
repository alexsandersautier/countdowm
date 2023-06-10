const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const date = '24 oct 2023'

function could_down(){
    const birthday = new Date(date)
    const today = new Date()

    const seconds = (birthday - today)/1000

    const total_days = Math.floor(((seconds / 60)/60)/24)
    const total_hours = Math.floor(seconds / 60/60)%24
    const total_minutes = Math.floor(seconds / 60)%60
    const total_seconds = Math.floor(seconds) % 60

    day.innerHTML = total_days
    hour.innerHTML = formatTime(total_hours)
    minute.innerHTML = formatTime(total_minutes)
    second.innerHTML = formatTime(total_seconds)
}


function formatTime(time){
    return time < 10 ?`0${time}`:time
}
could_down()
setInterval(could_down,1000)