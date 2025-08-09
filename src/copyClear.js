import { input, resultInput } from './elements.js'

document.getElementById('clear').addEventListener('click', function (){
  input.value = '' // Limpa o input
  input.focus()
})

document.getElementById('copyToClipboard').addEventListener('click', function (ev){
  const button = ev.currentTarget // Obtém o botão clicado
  if (button.innerText === 'Copy'){
    button.innerText = 'Copied' // Altera o texto do botão para 'Copied'
    button.classList.add('success') // Adiciona a classe 'success' ao botão pra aparecer que foi copiado bonitinho
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copy' // Altera o texto do botão de volta para 'Copy'
    button.classList.remove('success') // Remove a classe 'success' do botão
  }
})