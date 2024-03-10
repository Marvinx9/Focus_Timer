import { Timer } from './timer.js';
import { Controls } from './controls.js';

//procurando pelo elemento class='.play' dentro do meu html e atribuindo seu valor para a minha variável 'play'
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);

//injeção de dependências
const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
})
const timer = Timer({
    minutesDisplay,
    minutes,
    secondsDisplay,
    resetControls: controls.reset,
})


//callback - função que é passada como argumento dentro de outra função
//esse comando remove a imagem de play e adiciona a imagem de pause e vai iniciar a função countdown
buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

// remove a imagem de pause e substitui a imagem de play
buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    // o js vai procurar dentro dos timeout um id do meu timeout e quando encontrar ele vai parar o código setTimeout é atribuido ao timeTimeout na linha 28
    timer.reset()
})

// configuração do botão de áudio
buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

//configuração do botão de audio
buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

// configuração que insere o tempo desejado
buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})
