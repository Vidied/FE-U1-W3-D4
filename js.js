const c = (x) => console.log(x);

let arrayTabella = [];

const generatoreTabella = function () {
  const tabellaContainer = document.getElementById("tabellaHTML");
  tabellaContainer.innerHTML = "";
  for (let i = 0; i < 76; i++) {
    const cellaTabella = document.createElement("div");
    cellaTabella.innerText = i + 1;
    tabellaContainer.appendChild(cellaTabella);
    arrayTabella.push(cellaTabella);
  }
};

generatoreTabella();
c(arrayTabella);

let numeriUsciti = [];

const estrazioneNumero = function () {
  if (numeriUsciti.length >= 76) {
    alert("Sono usciti tutti i numeri");
    return;
  }

  let numeroEstratto;
  do {
    numeroEstratto = Math.ceil(Math.random() * 76);
  } while (numeriUsciti.includes(numeroEstratto));

  numeriUsciti.push(numeroEstratto);
  console.log("è uscito il numero:", numeroEstratto);

  const cellaEstratta = arrayTabella[numeroEstratto - 1];
  if (cellaEstratta) {
    cellaEstratta.classList.add("evidenziato");
  }
  arrayTabellaPlayer.forEach((cella) => {
    if (parseInt(cella.innerText) === numeroEstratto) {
      cella.classList.add("evidenziato");
    }
  });
};

const resetEstrazioni = function () {
  numeriUsciti = [];

  for (let i = 0; i < arrayTabella.length; i++) {
    arrayTabella[i].classList.remove("evidenziato");
  }

  const tabellaPlayerContainer = document.getElementById("tabellaPlayer");
  tabellaPlayerContainer.innerHTML = "";

  c("tabella resettata");
};

let arrayTabellaPlayer = [];

const tabellaPlayer = function () {
  const tabellaPlayerContainer = document.getElementById("tabellaPlayer");
  tabellaPlayerContainer.innerHTML = "";
  arrayTabellaPlayer = [];

  for (let i = 0; i < 3; i++) {
    const riga = document.createElement("div");
    tabellaPlayerContainer.appendChild(riga);
    for (let y = 0; y < 8; y++) {
      const cellaNumeroTabellaPlayer = document.createElement("div");
      cellaNumeroTabellaPlayer.innerText = Math.ceil(Math.random() * 76);
      riga.appendChild(cellaNumeroTabellaPlayer);
      arrayTabellaPlayer.push(cellaNumeroTabellaPlayer);
    }
  }
};

const tabellaPlayerExtra = function () {
  const tabellaPlayerContainer = document.getElementById("tabellaPlayer");

  const singolaCartella = document.createElement("dic");
  singolaCartella.classList.add("singolaCartella");
  tabellaPlayerContainer.appendChild(singolaCartella);

  for (let i = 0; i < 3; i++) {
    const riga = document.createElement("div");
    singolaCartella.appendChild(riga);
    for (let y = 0; y < 8; y++) {
      const cellaNumeroTabellaPlayer = document.createElement("div");
      cellaNumeroTabellaPlayer.innerText = Math.ceil(Math.random() * 76);
      riga.appendChild(cellaNumeroTabellaPlayer);
      arrayTabellaPlayer.push(cellaNumeroTabellaPlayer);
    }
  }
};

const pesca = document.getElementById("pescaHTML");
pesca.addEventListener("click", estrazioneNumero);

const reset = document.getElementById("resetHTML");
reset.addEventListener("click", resetEstrazioni);

const nuovaTabellaPlayer = document.getElementById("nuovaTabellaPlayerHTML");
nuovaTabellaPlayer.addEventListener("click", tabellaPlayerExtra);

c(numeriUsciti);
