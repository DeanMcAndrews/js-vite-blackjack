import { cpuTurn } from "./";

/**
 *
 * @param {String} message Mensaje a mostrarle en consola  al usuario
 * @param {Number} playerPoints Puntos acumulados del jugdor
 * @param {HTMLElement} cpuHtmlPoints Elemento HTML que habrá de mostrar los puntos de la Computadora
 * @param {HTMLImageElement} divCpuCards Elemento HTML (Imagen) que contiene la carta solicitada previamente del Mazo
 * @param {Array<String>} deck Mazo de Cartas que habrá de extraer la Computadora.
 */
export const setBoardForCpu = (
  message,
  playerPoints,
  cpuHtmlPoints,
  divCpuCards,
  deck
) => {
  console.warn(message);
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  cpuTurn(playerPoints, cpuHtmlPoints, divCpuCards, deck);
};
