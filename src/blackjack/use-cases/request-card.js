/**
 * Extrae la última carta del mazo.
 * @param {String} deck el mazo de cartas; Inicialmente el # de Cartas será siempre 52.
 * @returns {String} La carta solicitada del mazo; Ejemplo: '2C', '3H', '4D', '5S', etc...
 */
export const requestCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw "There are no cards in the deck";
  }
  const carta = deck.pop();
  return carta;
};
