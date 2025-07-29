import _ from "underscore";
import {
  createDeck,
  getValueCard,
  requestCard,
  cpuTurn,
  createHtmlCard,
  setBoardForCpu,
} from "./use-cases";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let playerPoints = 0,
  cpuPoints = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const puntosHTML = document.querySelectorAll("small");

deck = createDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener("click", () => {
  const card = requestCard(deck);

  playerPoints = playerPoints + getValueCard(card);
  puntosHTML[0].innerText = playerPoints;

  const cardImg = createHtmlCard(card);
  divCartasJugador.append(cardImg);

  if (playerPoints > 21) {
    setBoardForCpu(
      "Lo siento mucho, perdiste",
      playerPoints,
      puntosHTML[1],
      divCartasComputadora,
      deck
    );
  } else if (playerPoints === 21) {
    setBoardForCpu(
      "21, genial!",
      playerPoints,
      puntosHTML[1],
      divCartasComputadora,
      deck
    );
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  cpuTurn(playerPoints, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = createDeck(tipos, especiales);

  playerPoints = 0;
  cpuPoints = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
