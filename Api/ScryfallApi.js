export function getCardsByDate(page) {
    return fetch(`https://api.scryfall.com/card?page=${page}`)
        .then(response => response.json())
        .catch(error => console.error(error));
}