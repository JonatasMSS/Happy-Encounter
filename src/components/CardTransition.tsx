'use client'

import {
  useTransition,
  useSpringRef,
  animated,
  useSpring,
} from '@react-spring/web'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BackCard } from './BackCard'
import { FrontalCard } from './FrontalCard'
import { useCards } from '@/utils/cards'

export function CardTransition() {
  const [maxCards, setMaxCards] = useState(0)

  const [frontalCardData, setFrontalCardData] = useState('Mude o título!')
  const [backCardData, setBackCardData] = useState('O que ele(a) vai ganhar?')
  const [imageLink, setImageLink] = useState('')
  const { PostCard, defineMaxChoosedCards, getMaxChoosedCards } = useCards()
  const pages = [
    <FrontalCard
      key={0}
      title={frontalCardData}
      setTitle={setFrontalCardData}
      imageLink={imageLink}
      setImageLink={setImageLink}
    />,
    <BackCard key={1} title={backCardData} setTitle={setBackCardData} />,
  ]

  const [index, setI] = useState(0) // Contage de páginas a serem alocadas

  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,

    from: { transform: 'rotateY(-90deg)' },
    enter: { transform: 'rotateY(0deg)' },
    leave: { transform: 'rotateY(90deg)' },

    exitBeforeEnter: true,
  }) // Animação de transição

  const [buttonAnim, buttonTrigger] = useSpring(() => ({
    from: {
      transform: 'rotate(0deg)',
    },
  }))

  const handleButton = () => {
    setI((prevS) => (prevS + 1) % 2)
    buttonTrigger.start({
      to: {
        transform:
          buttonAnim.transform.get() === 'rotate(0deg)'
            ? 'rotate(-180deg)'
            : 'rotate(0deg)',
      },
      config: {
        tension: 120,
        friction: 14,
      },
    })
  }
  const handleButtonAddCard = () => {
    PostCard({
      frontTitle: frontalCardData,
      backContent: backCardData,
      img: imageLink,
    })
    defineMaxChoosedCards(maxCards)
    window.location.reload()
  }

  useEffect(() => {
    const maxCards = getMaxChoosedCards()
    setMaxCards(maxCards)
    transRef.start()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <span className="w-full text-center text-white">
          {' '}
          Máximo de cards a serem selecionados
        </span>
        <input
          type="number"
          name="max-card"
          id="max-card"
          value={maxCards}
          onChange={(value) => setMaxCards(Number(value.target.value))}
          className="w-full break-all rounded-full border-none bg-dune-50 text-center text-2xl text-dune-10  "
        />
      </div>
      {transitions((styles, i) => {
        const page = pages[i]
        return <animated.div style={styles}>{page}</animated.div>
      })}
      <button
        className="w-fit rounded-full bg-black/50 p-2 text-white"
        onClick={handleButton}
      >
        <animated.div style={buttonAnim}>
          <ArrowRight size={32} />
        </animated.div>
      </button>
      <button
        onClick={handleButtonAddCard}
        className="rounded-lg border-2 border-zinc-800 bg-black/50 p-2 text-xl text-white transition-all hover:scale-110 hover:border-zinc-600 hover:bg-zinc-900/80"
      >
        Adicionar card
      </button>
    </>
  )
}
