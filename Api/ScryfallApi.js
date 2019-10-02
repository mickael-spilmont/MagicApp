export function getCardsByDate(page) {
    return fetch(`https://api.scryfall.com/cards?page=${page}`)
        .then(response => response.json())
        .catch(error => console.error(error));
}

export function searchCardByNAme(cardName) {
    return fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
        .then(response => response.json())
        .catch(error => console.error(error));
}