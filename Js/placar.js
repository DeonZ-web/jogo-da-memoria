const times = JSON.parse(localStorage.getItem('tempoPartida') || '[]')
const list = document.getElementById('colocados')
const ul = document.createElement('ul')
ul.style.color = 'yellow'

if (times.length > 0) {
    times.sort((a, b) => a - b).forEach(element => {
        const li = document.createElement('li')
        
        li.innerHTML = `${element.nick}: ${element.points} pontos`
    
        ul.appendChild(li)
    });

    list.appendChild(ul)
}

