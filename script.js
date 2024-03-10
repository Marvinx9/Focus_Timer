//procurando pelo elemento class='.play' dentro do meu html e atribuindo seu valor para a minha variável 'play'
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
}

function updateTimeDisplay(minutes, seconds) {
    // atualização do display
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
    //função usada para aguardar um tempo antes de ser executada
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimeDisplay(minutes, 0)
        
        // quando o minutes for = 0 é enviado um return vazio, isso irá parar de rodar a função countdown
        if( minutes <= 0 ) {
            resetControls()
            return
        }
        
        // se minutes for = 0, subtraia uma unidade de minutos
        if( seconds <= 0 ) {
            seconds = 60
            --minutes
        }
        // caso as duas condições acima sejam falsas, subtraia um segundo da variável secondsDisplay.textContent
        updateTimeDisplay(minutes, String(seconds -1))

        //recursão, uma função que em algum momento chama ela novamente
        countdown()
    }, 1000)
};

//callback - função que é passada como argumento dentro de outra função
//esse comando remove a imagem de play e adiciona a imagem de pause e vai iniciar a função countdown
buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
    countdown()
})

// remove a imagem de pause e substitui a imagem de play
buttonPause.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
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
    minutes = prompt('Quantos minutos?')

    // atualização do display passando a variável minutes para preparar a função countdown()
    updateTimeDisplay(minutes, 0)
})
