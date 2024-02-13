function activate() {
  const img = document.querySelector('img');

  const container = document.querySelector('.container')
  container.classList.toggle('activateContainer') 

  const html = document.documentElement;
  html.classList.toggle('active')

  if(html.classList.contains('active')) {
    img.setAttribute('src', './assets/sun.svg')
    container.style.backgroundColor = '#F1F1F1';
    img.style.right = 'calc(50% - 235.38px)'; 
  } else {
    img.setAttribute('src', './assets/moon.svg')
    container.style.backgroundColor = '#292C35';
    img.style.right = 'calc(100% - 235.38px)'; 
  }
}

activate()





