
function mudarCor(cor) {
  
    document.getElementById('redLight').style.backgroundColor = 'transparent';
    document.getElementById('yellowLight').style.backgroundColor = 'transparent';
    document.getElementById('greenLight').style.backgroundColor = 'transparent';
  
   
    if (cor === 'red') {
      document.getElementById('redLight').style.backgroundColor = '#e74c3c'; // Vermelho
    } else if (cor === 'yellow') {
      document.getElementById('yellowLight').style.backgroundColor = '#f39c12'; // Amarelo
    } else if (cor === 'green') {
      document.getElementById('greenLight').style.backgroundColor = '#2ecc71'; // Verde
    }
  }
