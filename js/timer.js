export function Timer({
    minutesDisplay,
    minutes,
    secondsDisplay,
    resetControls,
}) {

    let timerTimeOut

    function updateDisplay(minutes, seconds) {
        // atualização do display
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
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

            updateDisplay(minutes, 0)
            
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
