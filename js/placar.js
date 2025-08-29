window.onload = function() {
    const scores = JSON.parse(localStorage.getItem('pontuacoes') || '[]');
    const tabela = document.getElementById('tabela-placar');
    scores.reverse().forEach(score => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${score.nick || '-'}</td>
            <td>${score.points}</td>
            <td>${score.dificuldade}</td>
        `;
        tabela.appendChild(tr);
    });
};

