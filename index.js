let btn = document.getElementById('btn')
let remove = document.getElementById('remove')
let className = document.querySelector('.red')
let greenClass = document.querySelector('.green')

function showmBtn() {
    greenClass.classList.add('red')
}

function hideBtn() {
    greenClass.classList.remove('red')
}


btn.addEventListener('click',showmBtn)
remove.addEventListener('click', hideBtn)