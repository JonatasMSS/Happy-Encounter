'use client'

import { useSpring, animated } from '@react-spring/web'
import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

export function CongratulationBar() {
  const [barAnim, animTrigger] = useSpring(() => ({
    from: {
      y: 60,
    },
  }))
  const navigator = useRouter()

  const handleButton = () => {
    localStorage.clear()
    navigator.push('/')
  }

  useEffect(() => {
    animTrigger.start({
      to: {
        y: 0,
      },
      delay: 300,
      config: {
        tension: 280,
        friction: 60,
      },
    })
  }, [])

  return (
    <animated.div
      style={barAnim}
      className="fixed bottom-0  right-0 z-20 flex w-full items-center justify-center gap-5 bg-dune-60 p-5 "
    >
      <span className="text-2xl text-white">
        Parabéns! Ai estão os{' '}
        <span className="text-cardinal-40"> encontros</span> e{' '}
        <span className="text-cardinal-40">atividades </span>
        para hoje! Divirtam-se
      </span>
      <button
        onClick={handleButton}
        className="rounded-lg border-2 border-red-800 bg-Cred p-2 text-xl text-white transition-all hover:scale-110 hover:border-red-600 hover:bg-Cred/80"
      >
        {' '}
        Retornar
      </button>
    </animated.div>
  )
}
