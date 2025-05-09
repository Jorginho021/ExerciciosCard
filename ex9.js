function mudarSemaforo(cor) {
    document.getElementById("vermelho").style.backgroundColor = (cor === 'vermelho') ? 'red' : '#ccc';
    document.getElementById("amarelo").style.backgroundColor = (cor === 'amarelo') ? 'yellow' : '#ccc';
    document.getElementById("verde").style.backgroundColor = (cor === 'verde') ? 'green' : '#ccc';
}
