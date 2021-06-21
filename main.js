const toast = document.getElementById('toast')
const message = document.querySelector('#toast p')
const messageButton = document.querySelector('.message')
const alertButton = document.querySelector('.alert')
const css = document.documentElement.style
const timeout = 1500
let timer

function clickHandler(param) {
    if(param === 'message-toast') 
        toast.classList.remove('alert-toast')
    
    if(param === 'alert-toast') 
        toast.classList.remove('message-toast')

    message.innerText = `This is ${/[aeiou]/.test(param[0]) ? 'an': 'a'} ${param.replace('-toast', '')}`
    toast.classList.add(param)
    css.setProperty('--top', '0')
    messageButton.disabled = true
    alertButton.disabled = true

    timer = setTimeout(() => {
        css.setProperty('--top', '-100%')
        messageButton.disabled = false
        alertButton.disabled = false

        clearTimeout(timer)
    }, timeout)
}

function onMouseEnter() {
    clearTimeout(timer)
}

function onMouseLeave() {
    timer = setTimeout(() => {
        css.setProperty('--top', '-100%')
        messageButton.disabled = false
        alertButton.disabled = false

        clearTimeout(timer)
    }, timeout)
}