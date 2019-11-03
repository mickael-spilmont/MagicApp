export function getCardsByDate (page) {
  return fetch(`https://api.scryfall.com/cards?page=${page}`)
    .then(response => response.json())
    .catch(error => console.error(error));
}

export function searchCardByName (cardName) {
  return fetch(`https://api.scryfall.com/cards/search?q=${cardName}`)
    .then(response => response.json())
    .catch(error => console.error(error));
}
