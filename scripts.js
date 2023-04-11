let calcular = document.getElementById("calcular");

let campoPeso = document.getElementById("campoPeso");
let campoAltura = document.getElementById("campoAltura");
let campoResultado = document.getElementById("campoResultado");
let conteudo = document.getElementById("conteudo");

const abaixo = 
`Você está abaixo do peso ideal. <br>
Seria bom procurar um médico especialista para cuidar da sua saúde! <br>
Um peso ideal nos garante uma melhor qualidade de vida e a prevenção de diversas doenças! <br>
Não desanime e não abandone sua saúde de lado!`;

const ideal  = 
`Você está no peso ideal! <br>
Mesmo assim, não deixe de acompanhar os cuidados com sua saúde com um profissional!`;

const acima = 
`Você está com sobrepeso. <br>
Seria bom procurar um médico especialista para cuidar da sua saúde! <br>
Com a dieta e exercícios adequados é fácil de reverter isso! <br>
Não desanime e não abandone sua saúde de lado!`;

function imc() {
    let valorPeso = parseFloat(campoPeso.value);
    let valorAltura = parseFloat(campoAltura.value);
    
    let calculo = valorPeso / (Math.pow(valorAltura, 2));

    campoResultado.innerHTML = `${calculo.toFixed(2)}`;

    if (calculo < 18.5) {
        conteudo.innerHTML = `${abaixo}`;
    }  
    
    if ((calculo >= 18.5) && (calculo <= 24.9)) {
        conteudo.innerHTML = `${ideal}`;
    } 
    
    if (calculo > 24.9) {
        conteudo.innerHTML = `${acima}`;
    }
}

function darkMode () {
    let tela = document.getElementsByTagName("main")[0];
    tela.style.backgroundColor = "red";
}

// calcular.addEventListener('click', darkMode);
calcular.addEventListener('click', imc);
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        imc();
    }
});