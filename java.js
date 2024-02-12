function calcularNota() {
   
    var parcial1 = parseFloat(document.getElementById('parcial1').value);
    var parcial2 = parseFloat(document.getElementById('parcial2').value);
    var parcial3 = parseFloat(document.getElementById('parcial3').value);

   
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) ||
        parcial1 < 0 || parcial1 > 100 ||
        parcial2 < 0 || parcial2 > 100 ||
        parcial3 < 0 || parcial3 > 100) {
        alert('Por favor, ingrese notas válidas entre 0 y 100.');
        return;
    }


    var notaFinal = (parcial1 * 0.3) + (parcial2 * 0.3) + (parcial3 * 0.4);

  
    var mensaje = '';
    if (notaFinal >= 0 && notaFinal <= 59) {
        mensaje = 'Reprobado';
    } else if (notaFinal >= 60 && notaFinal <= 79) {
        mensaje = 'Bueno';
    } else if (notaFinal >= 80 && notaFinal <= 89) {
        mensaje = 'Muy Bueno';
    } else if (notaFinal >= 90 && notaFinal <= 100) {
        mensaje = 'Sobresaliente';
    }

  
    document.getElementById('resultado').innerHTML = '<p>Nota Final: ' + notaFinal.toFixed(2) + '</p><p>Resultado: ' + mensaje + '</p>';
}

function limpiarCampos() {
  
    document.getElementById('notaForm').reset();
    document.getElementById('resultado').innerHTML = '';
}
