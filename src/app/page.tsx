import Image from 'next/image'
import Heart from '@/assets/Heart.svg'
import Link from 'next/link'

export default function Main() {
  return (
    <div className=" flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-[#1C1C1C]">
      <Image src={Heart} alt="Coração" className="w-2/5 animate-wiggle" />
      <span className="w-96  text-justify text-3xl text-dune-10">
        <span className="text-cardinal-40">Sorteei</span> com seu{' '}
        <span className="text-cardinal-40">amor</span> o que irão fazer no dia
        dos namorados!
      </span>
      <Link
        href="/started"
        className="rounded-lg border-2 border-red-800 bg-Cred p-2 text-xl text-white transition-all hover:scale-110 hover:border-red-600 hover:bg-Cred/80"
      >
        Vamos lá
      </Link>
    </div>
  )
}
