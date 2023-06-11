'use client'
/* eslint-disable camelcase */
import Heart_isolated from '@/assets/Heart_isolated.svg'
import { useSpringRef, useTransition, animated } from '@react-spring/web'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface CardInMemoryTransitionProps {
  img: string
  frontalText: string
  backText: string
  canToggle?: boolean
  editable?: boolean
}

export function CardInMemoryTransition({
  img,
  frontalText,
  backText,

  editable = true,
}: CardInMemoryTransitionProps) {
  const pages = [
    <FrontalCard key={0} text={frontalText} img={img} />,
    <BackCard key={1} text={backText} />,
  ]
  const [indexP, setIndex] = useState(0)
  const [isToggled, setToggled] = useState(false)

  const transitionRef = useSpringRef()
  const transitions = useTransition(indexP, {
    ref: transitionRef,
    from: { transform: 'rotateY(-90deg)' },
    enter: { transform: 'rotateY(0deg)' },
    leave: { transform: 'rotateY(90deg)' },
    exitBeforeEnter: true,
  })

  const handleAnimationDiv = () => {
    !isToggled && setToggled(!isToggled)
    editable
      ? setIndex((prevI) => (prevI + 1) % 2)
      : !isToggled && setIndex((prevI) => (prevI + 1) % 2)
  }

  useEffect(() => {
    transitionRef.start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexP])

  return transitions((styles, i) => {
    const page = pages[i]
    return (
      <animated.div
        onClick={handleAnimationDiv}
        style={styles}
        className=" w-60 p-2"
      >
        {page}
      </animated.div>
    )
  })
}

interface CardsProps {
  img?: string
  text: string
}

const FrontalCard = ({ img, text }: CardsProps) => {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-5 rounded-lg bg-cardinal-50 px-2 py-20 transition-all hover:scale-110">
      {/* Image Card */}
      <div className="flex h-44 w-44 items-center justify-center rounded-full ">
        <div className=" flex  h-44 w-44  items-center justify-center rounded-full">
          {img ? (
            <Image
              src={img}
              alt="Coração"
              width={100}
              height={100}
              priority={true}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              className="rounded-full"
            />
          ) : (
            <Image
              src={Heart_isolated}
              alt="Coração"
              width={100}
              height={100}
              priority={true}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          )}
        </div>
      </div>

      {/* Input title */}
      <span className="w-full break-all  text-center text-2xl ">{text}</span>
    </div>
  )
}
const BackCard = ({ text }: CardsProps) => {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-cardinal-50 bg-[#1C1C1C] px-2 py-44">
      {/* Input title */}
      <span className="w-full break-all rounded-sm border-none text-justify text-xl text-dune-10 outline-none">
        {' '}
        {text}
      </span>
    </div>
  )
}
