import { main, root } from './elements.js'

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