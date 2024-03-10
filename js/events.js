import {
    buttonPlay, 
    buttonPause, 
    buttonStop, 
    buttonSet, 
    buttonSoundOn, 
    buttonSoundOff
} from "./elements.js"
export default function ({ timer, controls, sound }) {

//callback - função que é passada como argumento dentro de outra função
//esse comando remove a imagem de play e adiciona a imagem de pause e vai iniciar a função countdown
buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

// remove a imagem de pause e substitui a imagem de play
buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    // o js vai procurar dentro dos timeout um id do meu timeout e quando encontrar ele vai parar o código setTimeout é atribuido ao timeTimeout na linha 28
    timer.reset()
    sound.pressButton()
})

// configuração do botão de áudio
buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
})

//configuração do botão de audio
buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
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
});
}
