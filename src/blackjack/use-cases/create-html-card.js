/**
 *
 * @param {string} card Carta solicitada del Mazo
 * @returns {HTMLImageElement} Elemento HTML (Imagen) de retorno
 */
export const createHtmlCard = (card) => {
  if (!card) {
    throw new Error("La Carta es un argumento obligatorio");
  }

  const cardImg = document.createElement("img");
  cardImg.src = `assets/cartas/${card}.png`; //3H, JD
  cardImg.classList.add("carta");

  return cardImg;
};
