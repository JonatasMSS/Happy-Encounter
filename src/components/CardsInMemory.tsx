'use client'

import { X } from 'lucide-react'

import { CardInMemoryTransition } from './CardInMemoryTransition'
import { useEffect, useState } from 'react'
import { Card, useCards } from '@/utils/cards'

export function CardsInMemory() {
  const [Cards, setCards] = useState<Card[]>([])
  const { GetCards, DeleteCard } = useCards()
  useEffect(() => {
    const cardsInMemory = GetCards()
    setCards(cardsInMemory)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRemoveButton = (cardIndex: number) => {
    DeleteCard(cardIndex)

    window.location.reload()
  }

  return (
    <div className="grid h-full w-full grid-flow-row grid-cols-3 ">
      {Cards.map((card, i) => {
        return (
          <div key={i} className="relative w-fit ">
            <CardInMemoryTransition
              frontalText={card.frontTitle}
              backText={card.backContent}
              img={card.img}
            />
            <button
              onClick={() => handleRemoveButton(i)}
              className="absolute right-0 top-0 rounded-full bg-dune-60 p-2"
            >
              <X color="white" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
