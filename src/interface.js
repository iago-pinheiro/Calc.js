import { allowedKeys } from "./config.js"
import { calculate } from './calc.js'
import { input } from './elements.js'

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
  charKeyBtn.addEventListener('click', function (){
    const value = charKeyBtn.dataset.value // Obtém o valor do botão clicado
    input.value += value // Adiciona o valor ao input //?Achei isso muuuuito fera
  })
})

input.addEventListener('keydown', function (ev) { //keydown é quando uma tecla é pressionada
  ev.preventDefault() // Previne o comportamento padrão do teclado
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key // Adiciona o valor da tecla pressionada ao input
    return
  } 
  if (ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1) // Remove o último caractere do input
  }
  if (ev.key === 'Enter'){
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)