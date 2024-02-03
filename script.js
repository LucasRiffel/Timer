var contagem = 0;
var intervalo;
var estaContando = false;
var estaPausado = false;

function converterSegundos(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;

    if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
    }

    return minutos + ":" + segundosRestantes;
}

document.getElementById('começar').addEventListener('click', function () {
    var tempo = document.getElementById('tempo').value;
    if (tempo !== "" && tempo > 0 && !estaContando) {
        if (!estaPausado) { 
            contagem = tempo;
        }
        estaContando = true;
        estaPausado = false;
        intervalo = setInterval(function () {
            contagem--;
            document.getElementById('timer').innerHTML = converterSegundos(contagem);
            if (contagem <= 0) {
                clearInterval(intervalo);
                estaContando = false;
                document.getElementById('timer').innerHTML = "Fim da contagem";
            }
        }, 1000)
    }
});

document.querySelector('.botao-adicionar').addEventListener('click', function () {
    var tempo = document.getElementById('tempo').value;
    if (tempo !== "" && tempo > 0) {
        contagem = tempo;
        document.getElementById('timer').innerHTML = converterSegundos(contagem);
    }
});

document.getElementById('pause').addEventListener('click', function () {
    clearInterval(intervalo);
    estaContando = false;
    estaPausado = true;
});

document.getElementById('reiniciar').addEventListener('click', function () {
    clearInterval(intervalo);
    contagem = 0;
    estaContando = false;
    estaPausado = false;
    document.getElementById('timer').innerHTML = "0:00";
    document.getElementById('tempo').value = "";
});