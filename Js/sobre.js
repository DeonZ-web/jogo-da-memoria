const devs = ['ian', 'ewerton', 'gabriel', 'adrielly'];
let startIndex = 0; // início da janela visível
const visibleCount = 3;

function carousel(direction) {
  // calcula limites
  const maxIndex = devs.length - visibleCount;

  if (direction === 'next') {
    if (startIndex < maxIndex) {
      startIndex++;
    }
  } else if (direction === 'prev') {
    if (startIndex > 0) {
      startIndex--;
    }
  }

  // atualiza a exibição
  for (let i = 0; i < devs.length; i++) {
    const devElement = document.getElementById(devs[i]);
    if (i >= startIndex && i < startIndex + visibleCount) {
      devElement.style.display = 'block';
    } else {
      devElement.style.display = 'none';
    }
  }
}

// funcao pra scrollar o site com um botao 

var btn = document.querySelector("#scroll-to-end");
    btn.addEventListener ("click", () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });

var secondBtn = document.querySelector("#scroll-to-top");
    secondBtn.addEventListener ("click", () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });