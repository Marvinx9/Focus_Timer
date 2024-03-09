//procurando pelo elemento class='.play' dentro do meu html e atribuindo seu valor para a minha variável 'play'
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')

//callback - função que é passada como argumento dentro de outra função
//esse comando remove a imagem de play e adiciona a imagem de pause
play.addEventListener('click', function() {
    play.classList.add('hide')
    pause.classList.remove('hide')
})

// remove a imagem de pause e sibstitui a imagem de play
pause.addEventListener('click', function() {
    pause.classList.add('hide')
    play.classList.remove('hide')
})