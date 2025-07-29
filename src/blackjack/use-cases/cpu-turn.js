import { getValueCard, requestCard } from "./";
import { createHtmlCard } from "./create-html-card";

/**
 * Turno de la Computadora
 * @param {Number} minimumPoints Puntos Mínimos que la Computadora necesita para ganar.
 * @param {HTMLElement} htmlPoints Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCpuCards  Element HTML para mostrar las cartas.
 * @param {Array<String>} deck Mazo de Cartas el cual se hirá reduciendo a medida que la Computadora vaya requiriendo más cartas..
 */
export const cpuTurn = (minimumPoints, htmlPoints, divCpuCards, deck = []) => {
  if (!minimumPoints) {
    throw new Error("Puntos Mínimos son necesarios");
  }
  if (!htmlPoints) {
    throw new Error("ARgumento htmlPoints es necesario");
  }

  let cpuPoints = 0;

  do {
    const card = requestCard(deck);

    cpuPoints = cpuPoints + getValueCard(card);
    htmlPoints.innerText = cpuPoints;

    const cardImg = createHtmlCard(card);
    cardImg.src = `assets/cartas/${card}.png`; //3H, JD
    cardImg.classList.add("carta");
    divCpuCards.append(cardImg);

    if (minimumPoints > 21) {
      break;
    }
  } while (cpuPoints < minimumPoints && minimumPoints <= 21);

  setTimeout(() => {
    if (cpuPoints === minimumPoints) {
      alert("Nadie gana :(");
    } else if (minimumPoints > 21) {
      alert("Computadora gana");
    } else if (cpuPoints > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
