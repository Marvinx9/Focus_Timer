export function Timer({
    minutesDisplay,
    minutes,
    secondsDisplay,
    resetControls,
}) {

    let timerTimeOut;

    function updateDisplay(newMinutes, seconds) {
        // atualização do display
        //ternario, se 'new minutes' for igual a 'undefined' retorne minutes, senão retorne newMinutes
        newMinutes = newMinutes === undefined ? minutes: newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    };

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    };

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold () {
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        //função usada para aguardar um tempo antes de ser executada
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)
            
            // quando o minutes for = 0 é enviado um return vazio, isso irá parar de rodar a função countdown
            if( isFinished ) {
                resetControls()
                updateDisplay()
                return
            }
            
            // se minutes for = 0, subtraia uma unidade de minutos
            if( seconds <= 0 ) {
                seconds = 3
                --minutes
            }
            // caso as duas condições acima sejam falsas, subtraia um segundo da variável secondsDisplay.textContent
            updateDisplay(minutes, String(seconds -1))

            //recursão, uma função que em algum momento chama ela novamente
            countdown()
        }, 1000)
    };
    return {
        countdown,
        reset,
        hold,
        updateDisplay,
        updateMinutes,
    }
}
