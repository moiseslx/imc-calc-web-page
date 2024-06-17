document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result');

    if(!isNaN(weight) && !isNaN(height)) {
        const imc = weight / (height * height);
        let resultText;

        if (imc < 18.5) {
            resultText = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
        } else if (imc < 24.9) {
            resultText = `Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`;
        } else if (imc < 29.9) {
            resultText = `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
        } else {
            resultText = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade.`;
        }

        result.textContent = resultText;
    } else {
        result.textContent = 'Por favor, insira valores numéricos.'
    }
});