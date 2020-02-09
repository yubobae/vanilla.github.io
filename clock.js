const clockConatiner = document.querySelector('.js-clock'),
      clockTitle = clockConatiner.querySelector('h1')

      

function getTime() {
    const date = new Date();
    const minuite = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();  //${seconds < 10 ? `0${seconds}` : seconds}
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minuite < 10 ? `0${minuite}`: minuite}`;

}
function init() {
    getTime();
    setInterval(getTime,1000);

};

init();