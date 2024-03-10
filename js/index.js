import { Timer } from './timer.js';
import { Controls } from './controls.js';
import Sound from './sounds.js';
import Events from './events.js';
import { 
    buttonPause,
    buttonPlay, 
    buttonStop, 
    buttonSet,
    minutes,
    minutesDisplay,
    secondsDisplay,    
} from './elements.js';

//injeção de dependências
const sound = Sound()

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

Events({controls, timer, sound})
