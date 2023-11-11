function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso === '' || altura === '') {
        alert("Preencha todos os campos");
        return;
    }

    var imc = peso / (altura * altura);

    exibirResultado(imc);
}

function exibirResultado(imc) {
    var resultadoElement = document.getElementById('resultado');

    var categoria = '';
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc < 34.9) {
        categoria = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        categoria = 'Obesidade grau 2';
    } else {
        categoria = 'Obesidade grau 3';
    }

    resultadoElement.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${categoria}).`;
}

document.getElementById('calcularBtn').addEventListener('click', function() {
    event.preventDefault();
    calcularIMC();
});
