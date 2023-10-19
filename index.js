const data = {
    'w': 'tom-1.mp3',
    'a': 'tom-2.mp3',
    's': 'tom-3.mp3',
    'd': 'tom-4.mp3',
    'j': 'snare.mp3',
    'k': 'crash.mp3',
    'l': 'kick-bass.mp3'
};

document.addEventListener('keydown', handleKeyPress);

const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => button.addEventListener('click', handleClick));

function handleClick() {
    const fileName = getFileName(this.innerHTML);
    
    if (fileName) {
        buttonAnimation(this.innerHTML);
        playAudio(fileName);
    }
}

function handleKeyPress(key)
{
    const fileName = getFileName(key.key);
    
    if(fileName) {
        buttonAnimation(key.key);
        playAudio(fileName);
    }
}


function getFileName(letter) {
    if (data.hasOwnProperty(letter))
        return `sounds/${data[letter]}`;
    
    console.log('ERROR undefined key');
}

function playAudio(fileName) {
    const audio = new Audio(fileName);
    audio.play();
}

function buttonAnimation(letter) {
    const pressedButton = document.querySelector(`.${letter}`);
    pressedButton.classList.add('pressed');
    setTimeout(() => pressedButton.classList.remove('pressed'), 100);
}