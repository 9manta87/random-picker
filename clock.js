const clock = document.querySelector('.clock');


function getTime(){
    const date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes();
//    const seconds = date.getSeconds();
    clock.innerHTML = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();