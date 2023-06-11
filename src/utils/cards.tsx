export interface Card {
  frontTitle: string
  img: string
  backContent: string
}

export function useCards() {
  function defineMaxChoosedCards(max: number) {
    localStorage.setItem('max-cards', JSON.stringify(max))
  }
  function getMaxChoosedCards(): number {
    return JSON.parse(localStorage.getItem('max-cards') ?? '0')
  }

  function GetCards() {
    const cards = JSON.parse(localStorage.getItem('cards') ?? '[]') as Card[]
    return cards
  }
  function PostCard(newCard: Card) {
    const cards = JSON.parse(localStorage.getItem('cards') ?? '[]') as Card[]
    const newCards = [...cards, newCard]
    localStorage.setItem('cards', JSON.stringify(newCards))
  }
  function DeleteCard(index: number) {
    const cards = JSON.parse(localStorage.getItem('cards') ?? '[]') as Card[]
    const newCards = cards.filter((card, i) => i !== index)

    localStorage.setItem('cards', JSON.stringify(newCards))
  }

  return {
    PostCard,
    DeleteCard,
    GetCards,
    getMaxChoosedCards,
    defineMaxChoosedCards,
  }
}
