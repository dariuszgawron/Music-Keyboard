const playAudio = function(event) {
    const keyLetter = String.fromCharCode(event.keyCode);
    const key = document.querySelector(`.keyboard__key[data-key='${keyLetter}']`);
    const audio = document.querySelector(`audio[data-key='${keyLetter}']`);
    if(!audio || !key) return;
    key.classList.add('keyboard__key--active');
    audio.currentTime=0;
    audio.play();
    
};
const removeActive = function(event) {
    if(event.propertyName!=='transform') return;
    this.classList.remove('keyboard__key--active');
};

const keys = document.querySelectorAll('.keyboard__key');
keys.forEach(key => key.addEventListener('transitionend',removeActive));

window.addEventListener('keydown',playAudio);