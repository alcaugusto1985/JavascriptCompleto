(function() {
    function calculaIMC(peso, altura) {
        return (peso / (altura * altura));
    }

    function classificaIMC(imc) {
        if (imc <= 18.5) {
            return 'Abaixo do peso!';
        } else if (imc <= 24.9) {
            return 'Peso normal!';
        } else if (imc <= 29.9) {
            return 'Acima do peso!';
        } else if (imc <= 34.0) {
            return 'Obesidade 1!';
        } else if (imc <= 39.9) {
            return 'Obesidade 2!';
        } else {
            return 'Obesidade 3!';
        }
    }

    var peso = prompt('Digite seu peso:');
    var altura = prompt('Digite sua altura:');
    var imc = calculaIMC(peso, altura);
    var result = classificaIMC(imc);
    console.log('A taxa de IMC é: ' + result);
})();