const times = JSON.parse(localStorage.getItem('tempoPartida') || '[]')
const list = document.getElementById('colocados')
const ul = document.createElement('ul')
ul.style.color = 'yellow'

times.sort((a, b) => b - a).forEach(element => {
    const li = document.createElement('li')
    
    li.innerHTML = `${element} pontos`

    ul.appendChild(li)
});

if (times.length > 0) {
    list.appendChild(ul)
}

