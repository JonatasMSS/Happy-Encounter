import { CardTransition } from '@/components/CardTransition'
import { CardsInMemory } from '@/components/CardsInMemory'
import Link from 'next/link'

export default function Started() {
  return (
    <main className="flex min-h-screen w-full flex-row bg-[#1C1C1C]">
      <aside className="flex h-full flex-col items-center justify-center gap-5 bg-dune-60 p-5">
        <span className="text-2xl text-white">
          Crie alguns cards para sorteio
        </span>
        <CardTransition />

        <Link
          href={'started/sorting'}
          className="rounded-lg border-2 border-red-800 bg-Cred p-2 text-xl text-white transition-all hover:scale-110 hover:border-red-600 hover:bg-Cred/80"
        >
          Concluido
        </Link>
      </aside>
      {/* Cards in Local Storage */}
      <CardsInMemory />
    </main>
  )
}
