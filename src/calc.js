import { input, resultInput } from './elements.js'

export function calculate(){
  resultInput.value = 'ERROR'
  resultInput.classList.add('error') // Adiciona a classe 'error' ao input de resultado

  const result = eval(input.value) // Avalia a expressão matemática do input
  
  resultInput.value = result // Atribui o resultado ao input de resultado
  resultInput.classList.remove('error') // Remove a classe 'error' do input de resultado
}