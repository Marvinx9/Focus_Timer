export function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
}) {

    function pause() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonSet.classList.add('hide')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if( !newMinutes ) {
            return false
        }

        return newMinutes 
}

    return {
        reset,
        play,
        pause,
        getMinutes,
    }
}
