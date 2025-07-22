const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // Teclas permitidas

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
  charKeyBtn.addEventListener('click', function (){
    const value = charKeyBtn.dataset.value // Obtém o valor do botão clicado
    input.value += value // Adiciona o valor ao input //?Achei isso muuuuito fera
  })
})

document.getElementById('clear').addEventListener('click', function (){
  input.value = '' // Limpa o input
  input.focus()
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

function calculate(){
  resultInput.value = 'ERROR'
  resultInput.classList.add('error') // Adiciona a classe 'error' ao input de resultado

  const result = eval(input.value) // Avalia a expressão matemática do input
  
  resultInput.value = result // Atribui o resultado ao input de resultado
  resultInput.classList.remove('error') // Remove a classe 'error' do input de resultado
}

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

document.getElementById('themeSwitcher').addEventListener('click', function(){
  if (main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color', '#ffffff')
    root.style.setProperty('--border-color', '#e5e5e7')
    root.style.setProperty('--font-color', '#1c1c1e')
    root.style.setProperty('--primary-color', '#007aff')
    root.style.setProperty('--secondary-bg', '#f2f2f7')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#1c1c1e')
    root.style.setProperty('--border-color', '#38383a')
    root.style.setProperty('--font-color', '#f2f2f7')
    root.style.setProperty('--primary-color', '#007aff')
    root.style.setProperty('--secondary-bg', '#2c2c2e')
    main.dataset.theme = 'dark'
  }
})