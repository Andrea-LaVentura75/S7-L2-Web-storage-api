let buttonSave = document.getElementById("button-save");

let buttonDelte = document.getElementById("button-delte");

let form = document.querySelector("form");

let archiviazioneregistrazioneUtente = "registrazione-utente";

let stampaNome = document.getElementById("stampa-nome");

const salvaRegistrazione = function (e) {
  e.preventDefault();

  let inputEmail = document.getElementById("inputEmail").value;

  localStorage.setItem(archiviazioneregistrazioneUtente, inputEmail);

  let ultimoUtente = localStorage.getItem(archiviazioneregistrazioneUtente);
  console.log(ultimoUtente);
  if (ultimoUtente) {
    stampaNome.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.innerText = `Ultimo utente: ${ultimoUtente}`;

    stampaNome.appendChild(h1);
  } else {
    alert("inserisci email");
  }
};

const recuperoUltimoElementoSalvato = function () {
  const UltimoElemento = localStorage.getItem(archiviazioneregistrazioneUtente);

  let h1 = document.createElement("h1");

  h1.innerText = `Ultimo utente ${UltimoElemento}`;

  stampaNome.appendChild(h1);
};

recuperoUltimoElementoSalvato();

form.addEventListener("submit", salvaRegistrazione);

buttonDelte.addEventListener("click", function () {
  stampaNome.innerHTML = "";
});
