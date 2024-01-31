var contagem = 0;
var intervaloId;

document.getElementById('começar').addEventListener('click', function () {
    var tempo = document.getElementById('tempo').value;
    if (tempo !== "" && tempo > 0) {
        contagem = tempo;
        intervaloId = setInterval(function () {
            contagem--;
            document.getElementById('timer').innerHTML = contagem;
            if (contagem <= 0) {
                clearInterval(intervaloId);
                document.getElementById('timer').innerHTML = "Contagem terminada";
            }
        }, 1000)
    }
});

document.querySelector('.botao-adicionar').addEventListener('click', function() {
    var tempo = document.getElementById('tempo').value;
    if (tempo !== "" && tempo > 0) {
        contagem = tempo;
        document.getElementById('timer').innerHTML = contagem;
    }
});


document.getElementById('pause').addEventListener('click', function () {
    clearInterval(intervaloId);
});

document.getElementById('reiniciar').addEventListener('click', function () {
    clearInterval(intervaloId);
    contagem = 0;
    document.getElementById('timer').innerHTML = "";
    document.getElementById('tempo').value = "";
});
