/**
 * Calcula el Valor de la carta solicitada del mazo
 * @param {String} card El Valor de la carta previamnete solicitada; Ejemplo: {'A'- C}, {'9'- D}, {'Q' - H}, {'K' - S}
 * @returns {Number} El valor númerico de la carta: '1-9': para los números; 'A': 11; 'J', 'Q', 'K': 10
 */
export const getValueCard = (card) => {
  const valueCard = card.substring(0, card.length - 1);
  return isNaN(valueCard) ? (valueCard === "A" ? 11 : 10) : valueCard * 1;
};
