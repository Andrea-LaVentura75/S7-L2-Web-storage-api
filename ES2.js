let timeLeft = 60; // Imposta il tempo iniziale (60 secondi)

const tempoSalvato = sessionStorage.getItem("tempo");
if (tempoSalvato) {
  timeLeft = parseInt(tempoSalvato); // Se c'è un valore, usa quello al posto di 60
}

const countdown = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(countdown); // Ferma il timer quando raggiunge 0
    document.getElementById("timer").innerText = "Tempo scaduto!";
  } else {
    document.getElementById("timer").innerText = timeLeft; // Mostra il tempo rimanente
  }
  sessionStorage.setItem("tempo", timeLeft);
  timeLeft -= 1; // Decrementa il tempo
}, 1000); // Intervallo di 1 secondo (1000 ms)

const recuperoUltimoElementoSalvato = function () {
  const tempoRimanente = sessionStorage.getItem("tempo");

  let timer = document.getElementById("timer");

  if (tempoRimanente) {
    timer.innerText = `${tempoRimanente}`;
  } else {
    timer.innerText = "60"; // Il valore iniziale se non c'è niente salvato
  }
};

recuperoUltimoElementoSalvato();
