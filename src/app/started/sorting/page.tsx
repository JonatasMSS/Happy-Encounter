'use client'

import { CardInMemoryTransition } from '@/components/CardInMemoryTransition'
import { CongratulationBar } from '@/components/CongratulationBar'
import { Card, useCards } from '@/utils/cards'
import { useEffect, useState } from 'react'

export default function Sorting() {
  const { GetCards, getMaxChoosedCards } = useCards()
  const [cardsSelected, setCardsSelected] = useState(0)
  const [activePopUp, setPopUp] = useState(false)

  const [maxCards, setMaxCards] = useState(1) // Começar com um, pois demora a atualizar
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    const cardsInMemory = GetCards()
    setCards(cardsInMemory)
    const maxCardsInMemory = getMaxChoosedCards()
    setMaxCards(maxCardsInMemory)

    if (cardsSelected === maxCards) {
      setPopUp(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsSelected])
  console.log(cardsSelected)
  return (
    <div className=" relative flex w-full flex-col items-center justify-center bg-[#1C1C1C]">
      {activePopUp && (
        <div className="absolute z-10 h-full w-full bg-zinc-500/10 ">
          <CongratulationBar />
        </div>
      )}
      <span className="my-12 text-4xl text-white ">
        Selecione <span className="text-cardinal-40">{maxCards}</span> cards e
        decida seu encontro!
      </span>
      <main className=" m-0 grid min-h-screen grid-flow-row grid-cols-3 items-center justify-center gap-28  ">
        {cards.map((card, i) => {
          return (
            <div
              key={i}
              onClick={() => setCardsSelected((prevState) => prevState + 1)}
            >
              <CardInMemoryTransition
                editable={false}
                canToggle={false}
                key={i}
                img={card.img}
                frontalText={card.frontTitle}
                backText={card.backContent}
              />
            </div>
          )
        })}
      </main>
    </div>
  )
}
