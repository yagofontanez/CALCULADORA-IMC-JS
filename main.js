function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    const nome = document.getElementById('nome').value;

    if (peso === '' || altura === '') {
        alert("Preencha todos os campos");
        return;
    }

    var imc = peso / (altura * altura);

    var resultado = {
        nome: nome,
        imc: imc
    };

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    var resultadoElement = document.getElementById('resultado');

    var categoria = '';
    if (resultado.imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (resultado.imc < 24.9) {
        categoria = 'Peso normal';
    } else if (resultado.imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (resultado.imc < 34.9) {
        categoria = 'Obesidade grau 1';
    } else if (resultado.imc < 39.9) {
        categoria = 'Obesidade grau 2';
    } else {
        categoria = 'Obesidade grau 3';
    }

    resultadoElement.innerHTML = `${resultado.nome}, Seu IMC é ${resultado.imc.toFixed(2)} (${categoria}).`;
}

document.getElementById('calcularBtn').addEventListener('click', function () {
    event.preventDefault();
    calcularIMC();
});
