const form = document.querySelector('form')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const h2 = document.querySelector('h2')

let randomNumber = Math.round(Math.random() * 3)
let xAttempts = 1



form.addEventListener('submit', event => {
   event.preventDefault()
   const inputNumber = event.target.inputNumber
   
   if (Number(inputNumber.value) == randomNumber) {
       screen1.classList.toggle('hide')
       screen2.classList.toggle('hide')
       h2.textContent = `Acertou em ${xAttempts} tentativas(s)!`
       return
    }
    
    
   xAttempts = xAttempts + 1
   return
})
